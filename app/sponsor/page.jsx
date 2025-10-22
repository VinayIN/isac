'use client';

import { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { classNames } from "primereact/utils";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { useFirestore } from "../_hooks/useFirestore";
import app from "../_lib/init";

const validateForm = (data) => {
  const errors = {};

  if (!data.name || data.name.trim() === "") {
    errors.name = "Company name is required";
  }

  if (!data.email || data.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
    errors.email = "Invalid email address";
  }

  if (!data.accept) {
    errors.accept = "You must agree to be contacted";
  }

  return errors;
};

const SponsorCard = ({ sponsor }) => {
  return (
    <div>
      <Card className="h-full hover:shadow-lg border border-gray-200 overflow-hidden">
        <div className="relative h-48 bg-gray-100 overflow-hidden flex items-center justify-center">
          <Image
            src={sponsor.src}
            alt={sponsor.alt}
            width={220}
            height={120}
            className="object-contain"
          />
        </div>

        <div className="p-5 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {sponsor.alt}
          </h3>
          <Button
            icon="pi pi-external-link"
            className="p-button-rounded p-button-text p-button-sm"
            onClick={() =>
              window.open(sponsor.href, "_blank", "noopener,noreferrer")
            }
            title="Visit website"
          />
        </div>
      </Card>
    </div>
  );
};

export default function SponsorPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const { data, loading: dataLoading } = useFirestore("sponsor");

  useEffect(() => {
    const fetchImageUrls = async () => {
      if (!data || data.length === 0 || dataLoading) return;
      setLoading(true);
      try {
        const storage = getStorage(app);
        const sponsorsWithUrls = await Promise.all(
          data.map(async (sponsor) => {
            try {
              const imageRef = ref(storage, sponsor.src);
              const url = await getDownloadURL(imageRef);
              return { ...sponsor, src: url };
            } catch (err) {
              console.error(`Error loading sponsor image: ${sponsor.alt}`, err);
              return sponsor;
            }
          }),
        );
        setSponsors(sponsorsWithUrls);
      } catch (err) {
        console.error("Error fetching sponsor URLs:", err);
        setSponsors(data);
      } finally {
        setLoading(false);
      }
    };

    fetchImageUrls();
  }, [data, dataLoading]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street: "",
    description: "",
    plz: "",
    ort: "",
    land: "",
    accept: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    console.log("Form submitted:", formData);
    setShowSuccess(true);

    setFormData({
      name: "",
      email: "",
      street: "",
      description: "",
      plz: "",
      ort: "",
      land: "",
      accept: false,
    });
    setFormErrors({});
  };

  const isInvalid = (name) => !!formErrors[name];
  const errorMessage = (name) =>
    isInvalid(name) && (
      <small className="p-error block mt-1">{formErrors[name]}</small>
    );

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 mb-4">
            <div className="w-2 h-8 bg-orange-400 rounded-full"></div>
            <div className="w-2 h-8 bg-green-500 rounded-full"></div>
            <div className="w-2 h-8 bg-red-500 rounded-full"></div>
          </div>
          <span className="text-sm font-bold uppercase tracking-widest text-orange-600 block mb-2">
            Our Partners
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Partnership Opportunities</h1>

          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Help us spread cultural diversity and support the vibrant Indian
            student community at BTU Cottbus-Senftenberg. Partner with us to
            make a meaningful impact.
          </p>
        </div>
      </div>

      {/* Previous Sponsors Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-gray-200">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are grateful to the organizations that have supported our
            mission to celebrate cultural diversity
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="text-center">
              <i className="pi pi-spin pi-spinner text-blue-500 text-5xl mb-4 block"></i>
              <p className="text-gray-600">Loading partners...</p>
            </div>
          </div>
        ) : sponsors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sponsors.map((sponsor) => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-lg border border-gray-200">
            <i className="pi pi-inbox text-5xl text-gray-400 mb-4 block"></i>
            <p className="text-gray-600 text-lg">
              No partners yet. Be the first to support ISAC!
            </p>
          </div>
        )}
      </div>

      {/* Why Sponsor Section */}
      <div className="bg-orange-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Partner with ISAC?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4 text-orange-600">
                <i className="pi pi-users"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community Impact
              </h3>
              <p className="text-gray-600">
                Reach and support a vibrant community of 1000+ Indian students
                at Cottbus and Senftenberg
              </p>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4 text-green-600">
                <i className="pi pi-globe"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Cultural Exchange
              </h3>
              <p className="text-gray-600">
                Promote international understanding and cultural diversity in
                Cottbus
              </p>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4 text-red-600">
                <i className="pi pi-star"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Brand Recognition
              </h3>
              <p className="text-gray-600">
                Gain visibility as a supporter of cultural initiatives and
                community events
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Sponsorship Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Express Your Interest
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below to discuss sponsorship opportunities
            </p>
          </div>

          {/* Success Dialog */}
          <Dialog
            visible={showSuccess}
            onHide={() => setShowSuccess(false)}
            header="Success"
            modal
            className="w-full md:w-96"
          >
            <p className="text-gray-700">
              Your sponsorship inquiry has been submitted successfully! We
              will contact you soon.
            </p>
            <div className="mt-6 flex justify-end">
              <Button label="Close" onClick={() => setShowSuccess(false)} />
            </div>
          </Dialog>

          {/* Error Dialog */}
          <Dialog
            visible={showError}
            onHide={() => setShowError(false)}
            header="Error"
            modal
            className="w-full md:w-96"
          >
            <p className="text-gray-700">
              There was an error submitting the form. Please try again.
            </p>
            <div className="mt-6 flex justify-end">
              <Button
                label="Close"
                onClick={() => setShowError(false)}
                severity="secondary"
              />
            </div>
          </Dialog>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-md p-8 space-y-6"
          >
            {/* Company Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Company Name <span className="text-red-500">*</span>
                </label>
                <InputText
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={classNames("w-full", {
                    "p-invalid": isInvalid("name"),
                  })}
                  placeholder="Enter company name"
                />
                {errorMessage("name")}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <InputText
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={classNames("w-full", {
                    "p-invalid": isInvalid("email"),
                  })}
                  placeholder="company@example.com"
                />
                {errorMessage("email")}
              </div>
            </div>

            {/* Address Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="street"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Street Address
                </label>
                <InputText
                  id="street"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="Street name"
                />
              </div>
              <div>
                <label
                  htmlFor="plz"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Postal Code
                </label>
                <InputText
                  id="plz"
                  name="plz"
                  value={formData.plz}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="Postal code"
                />
              </div>
            </div>

            {/* City and Country Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="ort"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  City
                </label>
                <InputText
                  id="ort"
                  name="ort"
                  value={formData.ort}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="City"
                />
              </div>
              <div>
                <label
                  htmlFor="land"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Country
                </label>
                <InputText
                  id="land"
                  name="land"
                  value={formData.land}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="Country"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Additional Information
              </label>
              <InputTextarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={5}
                className="w-full"
                placeholder="Tell us about your company and sponsorship interests..."
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <Checkbox
                inputId="accept"
                name="accept"
                checked={formData.accept}
                onChange={handleInputChange}
                className={classNames({
                  "p-invalid": isInvalid("accept"),
                })}
              />
              <label
                htmlFor="accept"
                className={classNames("text-sm text-gray-700 pt-1", {
                  "p-error": isInvalid("accept"),
                })}
              >
                I agree to be contacted regarding sponsorship opportunities{" "}
                <span className="text-red-500">*</span>
              </label>
            </div>
            {errorMessage("accept")}

            {/* Notice */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-sm text-gray-700">
                <i className="pi pi-info-circle text-blue-500 mr-2"></i>
                <strong>Note:</strong> This form is currently in development.
                Please contact us directly via email or social media to
                discuss partnership opportunities.
              </p>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                label="Submit Inquiry"
                icon="pi pi-send"
                className="flex-1"
              />
              <Button
                type="button"
                label="Contact Directly"
                icon="pi pi-envelope"
                severity="secondary"
                className="flex-1"
                onClick={() => window.open("mailto:isacottbus@gmail.com?subject=Sponsorship%20Inquiry")}
              />
            </div>
          </form>
        </div>
      </div>

      {/* Alternative Contact Section */}
      <div className="bg-gray-50 border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Prefer Direct Contact?
            </h2>
            <p className="text-gray-600">
              Reach out to us through our social media channels or email
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              icon="pi pi-envelope"
              label="Email Us"
              className="p-button-outlined"
              onClick={() => window.open("mailto:isacottbus@gmail.com?subject=Sponsorship%20Inquiry")}
            />
            <Button
              icon="pi pi-whatsapp"
              label="WhatsApp"
              severity="success"
              onClick={() =>
                window.open(
                  "https://chat.whatsapp.com/EMtoCcEhDWmHgwGThM3FDK",
                  "_blank",
                )
              }
            />
            <Button
              icon="pi pi-instagram"
              label="Instagram"
              severity="info"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/isac_cottbus/",
                  "_blank",
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
