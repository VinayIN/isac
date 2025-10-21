import { useState, useEffect } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import Link from "next/link";
import Head from "next/head";

const resourceSections = [
  {
    id: "admission-procedure",
    title: "Admission Procedure at BTU",
    description:
      "Learn about the admission process and application requirements",
    icon: "pi-graduation-cap",
    color: "blue",
  },
  {
    id: "accommodation",
    title: "Finding Accommodation",
    description:
      "Discover housing options and accommodation facilities in Cottbus",
    icon: "pi-home",
    color: "green",
  },
  {
    id: "city-registration",
    title: "City Registration",
    description: "Complete your registration with the city authorities",
    icon: "pi-file-o",
    color: "orange",
  },
  {
    id: "bank-account",
    title: "Opening Bank Account",
    description: "Set up your bank account for seamless financial management",
    icon: "pi-wallet",
    color: "purple",
  },
  {
    id: "reaching-cottbus",
    title: "Reaching Cottbus",
    description: "Transportation options and travel guides to Cottbus",
    icon: "pi-map",
    color: "red",
  },
  {
    id: "emergency-contacts",
    title: "Emergency Contacts",
    description: "Important emergency contact information and resources",
    icon: "pi-phone",
    color: "pink",
  },
];

const colorClasses = {
  blue: "bg-blue-50 hover:bg-blue-100 border-l-4 border-blue-500",
  green: "bg-green-50 hover:bg-green-100 border-l-4 border-green-600",
  orange: "bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-500",
  purple: "bg-purple-50 hover:bg-purple-100 border-l-4 border-purple-500",
  red: "bg-red-50 hover:bg-red-100 border-l-4 border-red-500",
  pink: "bg-pink-50 hover:bg-pink-100 border-l-4 border-pink-500",
};

const iconColorClasses = {
  blue: "text-blue-500",
  green: "text-green-600",
  orange: "text-orange-500",
  purple: "text-purple-500",
  red: "text-red-500",
  pink: "text-pink-500",
};

const ResourceCard = ({ section }) => {
  return (
    <Link href={`/resources/${section.id}`}>
      <div className="group cursor-pointer">
        <Card
          className={`h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md ${colorClasses[section.color]} overflow-hidden`}
        >
          <div className="flex flex-col h-full">
            <div className={`text-5xl mb-4 ${iconColorClasses[section.color]}`}>
              <i className={`pi ${section.icon}`}></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
              {section.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              {section.description}
            </p>
            <div className="flex items-center text-orange-500 font-semibold text-sm group-hover:translate-x-1 transition-transform">
              <span>Learn more</span>
              <i className="pi pi-arrow-right ml-2 text-xs"></i>
            </div>
          </div>
        </Card>
      </div>
    </Link>
  );
};

export default function Resources() {
  return (
    <>
      <Head>
        <title>Student Resources - ISAC BTU Cottbus</title>
        <meta
          name="description"
          content="Complete guide to student resources including admission, accommodation, registration, bank accounts, travel, and emergency contacts."
        />
      </Head>

      <div className="w-full bg-white">
        {/* Hero Section */}
        <div className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "linear-gradient(135deg, #FF9933 0%, #138808 50%, #D00000 100%)",
            }}
          ></div>

          {/* Floating decorative elements */}
          <div className="absolute top-10 left-10 text-6xl opacity-20">
            <i className="pi pi-book"></i>
          </div>
          <div className="absolute bottom-10 right-10 text-6xl opacity-20">
            <i className="pi pi-lightbulb"></i>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex gap-2">
                <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
                <div className="w-2 h-8 bg-green-600 rounded-full"></div>
                <div className="w-2 h-8 bg-red-600 rounded-full"></div>
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-orange-600">
                Student Resources
              </span>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Everything you need to know to thrive at BTU Cottbus-Senftenberg.
              From admission to accommodation, we've got you covered with
              comprehensive guides and essential information.
            </p>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Essential Guides
            </h2>
            <p className="text-gray-600">
              Comprehensive resources to help you succeed as an international
              student
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceSections.map((section) => (
              <ResourceCard key={section.id} section={section} />
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="bg-gradient-to-r from-orange-50 to-green-50 border-t border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
              Quick Links
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Direct access to important external resources and official
              information
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a
                href="https://www.b-tu.de/en/prospective-international-students"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      BTU Official Page
                    </h4>
                    <p className="text-sm text-gray-600">
                      Prospective students information
                    </p>
                  </div>
                  <i className="pi pi-arrow-right text-orange-500"></i>
                </div>
              </a>

              <a
                href="https://www.b-tu.de/en/students/admissions-registrars-office/dates-and-deadlines"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Important Deadlines
                    </h4>
                    <p className="text-sm text-gray-600">
                      Dates and application deadlines
                    </p>
                  </div>
                  <i className="pi pi-arrow-right text-orange-500"></i>
                </div>
              </a>

              <a
                href="https://www.b-tu.de/en/international/news/events"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      International Events
                    </h4>
                    <p className="text-sm text-gray-600">
                      Community events and activities
                    </p>
                  </div>
                  <i className="pi pi-arrow-right text-orange-500"></i>
                </div>
              </a>

              <a
                href="https://www.b-tu.de/en/welcome-centre/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Welcome Centre
                    </h4>
                    <p className="text-sm text-gray-600">
                      Support and orientation services
                    </p>
                  </div>
                  <i className="pi pi-arrow-right text-orange-500"></i>
                </div>
              </a>

              <a
                href="https://studentenwerk-frankfurt.net/wohnen-in-cottbus/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Studentenwerk
                    </h4>
                    <p className="text-sm text-gray-600">
                      Housing and accommodation
                    </p>
                  </div>
                  <i className="pi pi-arrow-right text-orange-500"></i>
                </div>
              </a>

              <a
                href="https://www.vbb.de/en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      VBB Transport
                    </h4>
                    <p className="text-sm text-gray-600">
                      Public transportation info
                    </p>
                  </div>
                  <i className="pi pi-arrow-right text-orange-500"></i>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-orange-500 via-yellow-400 to-green-700 rounded-lg p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
              Our community is here to support you. Connect with us through
              social media or email if you have any questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                label="Join WhatsApp Community"
                icon="pi pi-whatsapp"
                className="p-button-lg"
                style={{
                  background: "white",
                  color: "#138808",
                  borderColor: "white",
                }}
                onClick={() =>
                  window.open(
                    "https://chat.whatsapp.com/EMtoCcEhDWmHgwGThM3FDK",
                    "_blank",
                  )
                }
              />
              <Button
                label="Contact Us"
                icon="pi pi-envelope"
                className="p-button-lg"
                style={{
                  background: "rgba(255,255,255,0.2)",
                  borderColor: "white",
                }}
                onClick={() =>
                  window.open("mailto:isac.btu@gmail.com", "_blank")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
