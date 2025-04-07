import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { classNames } from 'primereact/utils';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { useFirestore } from '../hooks/firestore';
import app from '../hooks/init';

const Sponsors = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [sponsors, setSponsors] = useState([]);
  const { data, loading } = useFirestore('sponsor');

  useEffect(() => {
    const fetchImageUrls = async () => {
      if (!data.length || loading) return;
      try {
        const storage = getStorage(app);
        const sponsorsWithUrls = await Promise.all(
          data.map(async (sponsor) => {
            const imageRef = ref(storage, sponsor.src);
            const url = await getDownloadURL(imageRef);
            return { ...sponsor, src: url };
          })
        );
        setSponsors(sponsorsWithUrls);
      } catch (err) {
        setSponsors(data);
      }
    };
    fetchImageUrls();
  }, [data, loading]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      street: '',
      description: '',
      plz: '',
      ort: '',
      land: '',
      accept: false,
    },
    validate: (data) => {
      const errors = {};
      if (!data.name) errors.name = 'Name is required.';
      if (!data.email) errors.email = 'Email is required.';
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email))
        errors.email = 'Invalid email address.';
      if (!data.accept) errors.accept = 'You must agree to be contacted.';
      return errors;
    },
    onSubmit: async (data, { resetForm }) => {
    },
  });

  const isInvalid = (name) => formik.touched[name] && formik.errors[name];
  const errorMessage = (name) =>
    isInvalid(name) && <small className="p-error">{formik.errors[name]}</small>;

  return (
    <div className="form-demo pb-4 mx-6">
      <Dialog
        visible={showSuccess}
        onHide={() => setShowSuccess(false)}
        header="Success"
        footer={<Button label="Ok" onClick={() => setShowSuccess(false)} text />}
      >
        <p>Your form has been submitted successfully!</p>
      </Dialog>
      <Dialog
        visible={showError}
        onHide={() => setShowError(false)}
        header="Error"
        footer={<Button label="Ok" onClick={() => setShowError(false)} text />}
      >
        <p>There was an error submitting the form. Please try again.</p>
      </Dialog>

      <Card title="Our Previous Sponsors!" className="text-center">
        <div className="p-3 m-3 flex flex-wrap justify-center gap-4">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="relative">
              <Image 
                src={sponsor.src} 
                alt={sponsor.alt} 
                width="200" 
                className="object-contain"
              />
              <Button
                icon="pi pi-external-link"
                className="p-button-rounded p-button-text absolute top-0 right-0"
                onClick={() => window.open(sponsor.href, '_blank', 'noopener,noreferrer')}
              />
            </div>
          ))}
        </div>
      </Card>

      <div className="flex justify-center mt-4">
        <Card 
        title="Help us spread cultural diversity around Cottbus" 
        subTitle="The form widget is not functional yet. Please contact us via email or social media."
        className="w-full max-w-lg text-center">
          <form onSubmit={formik.handleSubmit} className="p-fluid">
            <div className="field mb-4">
              <span className="p-float-label">
                <InputText
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className={classNames({ 'p-invalid': isInvalid('name') })}
                />
                <label htmlFor="name">Name*</label>
              </span>
              {errorMessage('name')}
            </div>
            <div className="field mb-4">
              <span className="p-float-label">
                <InputText
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className={classNames({ 'p-invalid': isInvalid('email') })}
                />
                <label htmlFor="email">Email*</label>
              </span>
              {errorMessage('email')}
            </div>
            <div className="field mb-4">
              <span className="p-float-label">
                <InputText
                  id="street"
                  name="street"
                  value={formik.values.street}
                  onChange={formik.handleChange}
                />
                <label htmlFor="street">Street</label>
              </span>
            </div>
            <div className="field mb-4">
              <span className="p-float-label">
                <InputText
                  id="plz"
                  name="plz"
                  value={formik.values.plz}
                  onChange={formik.handleChange}
                />
                <label htmlFor="plz">Postal Code</label>
              </span>
            </div>
            <div className="field mb-4">
              <span className="p-float-label">
                <InputText
                  id="ort"
                  name="ort"
                  value={formik.values.ort}
                  onChange={formik.handleChange}
                />
                <label htmlFor="ort">City</label>
              </span>
            </div>
            <div className="field mb-4">
              <span className="p-float-label">
                <InputText
                  id="land"
                  name="land"
                  value={formik.values.land}
                  onChange={formik.handleChange}
                />
                <label htmlFor="land">Country</label>
              </span>
            </div>
            <div className="field mb-4">
              <label htmlFor="description">Additional Information</label>
              <InputTextarea
                id="description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                rows={5}
                autoResize
              />
            </div>
            <div className="field-checkbox mb-4">
              <Checkbox
                inputId="accept"
                name="accept"
                checked={formik.values.accept}
                onChange={formik.handleChange}
                className={classNames({ 'p-invalid': isInvalid('accept') })}
              />
              <label htmlFor="accept" className={classNames({ 'p-invalid': isInvalid('accept') })}>
                I agree to be contacted*
              </label>
              {errorMessage('accept')}
            </div>
            <Button type="submit" label="Submit" className="mt-2" disabled/>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Sponsors;