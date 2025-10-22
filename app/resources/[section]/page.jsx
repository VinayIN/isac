import ResourceContent from "./resource-content";
import Link from "next/link";
import { Button } from "primereact/button";

// Centralized resource configuration
const RESOURCE_CONFIG = {
  "admission-procedure": {
    title: "Admission Procedure at Brandenburg Technical University",
    description: "Learn about the admission process and application requirements",
    file: "admissionProcedure.md",
    links: [
      {
        label: "BTU official page",
        href: "https://www.b-tu.de/en/prospective-international-students",
        description: "Official BTU information for international students",
      },
      {
        label: "Check deadlines here",
        href: "https://www.b-tu.de/en/students/admissions-registrars-office/dates-and-deadlines",
        description: "Important application deadlines",
      },
      {
        label: "International Events",
        href: "https://www.b-tu.de/en/international/news/events",
        description: "Connect with international community events",
      },
      {
        label: "Welcome Point",
        href: "https://www.b-tu.de/en/welcome-centre/",
        description: "Get support from the welcome center",
      },
    ],
  },
  "accommodation": {
    title: "Finding Accommodation",
    description: "Explore housing options and accommodation facilities in Cottbus",
    file: "findingAccommodation.md",
    links: [
      {
        label: "Studentenwerk Frankfurt (Oder)",
        href: "https://studentenwerk-frankfurt.net/wohnen-in-cottbus/",
        description: "Official student housing service",
      },
      {
        label: "Guesthouse der Uni-Service GmbH",
        href: "https://www.gaestehaus-uni.de/en/home",
        description: "University guest house accommodations",
      },
      {
        label: "T-1 Campus",
        href: "http://www.t1-cottbus.de/",
        description: "Student housing complex",
      },
      {
        label: "Wg-gesucht",
        href: "https://www.wg-gesucht.de/wg-zimmer-in-Cottbus.22.0.1.0.html",
        description: "Roommate and apartment search platform",
      },
    ],
  },
  "city-registration": {
    title: "City Registration",
    description: "Complete your registration with the city authorities",
    file: "cityRegistration.md",
    links: [
      {
        label: "Online Booking",
        href: "https://www.cottbus.de/stadtverwaltung/d31/buergerservice/stadtbuero/moeglichkeiten_zur_terminvereinbarung.html",
        description: "Book your registration appointment online",
      },
    ],
  },
  "bank-account": {
    title: "Opening Bank Account",
    description: "Set up your bank account for seamless financial management",
    file: "bankAccount.md",
    links: [
      {
        label: "Tip: Bank Accounts",
        href: "https://www.study-in-germany.de/en/germany/arrival/bank-account/",
        description: "Comprehensive guide to opening bank accounts in Germany",
      },
    ],
  },
  "reaching-cottbus": {
    title: "Reaching Cottbus",
    description: "Transportation options and travel guides to Cottbus",
    file: "reachingCottbus.md",
    links: [
      {
        label: "VBB (Verkehrsverbund Berlin-Brandenburg)",
        href: "https://www.vbb.de/en",
        description: "Regional public transport network",
      },
      {
        label: "DB Navigator (Deutsche Bahn)",
        href: "https://int.bahn.de/en/",
        description: "National railway information",
      },
    ],
  },
  "emergency-contacts": {
    title: "Emergency Contacts",
    description: "Important emergency contact information and resources",
    file: "emergencyContacts.md",
    links: [],
  },
};

const getResourceConfig = (slug) => RESOURCE_CONFIG[slug];

export function generateStaticParams() {
  return Object.keys(RESOURCE_CONFIG).map((section) => ({ section }));
}

export function generateMetadata({ params }) {
  const config = getResourceConfig(params.section);

  if (!config) {
    return {
      title: "Resource Not Found",
      description: "The requested resource could not be located.",
    };
  }

  return {
    title: `${config.title} - Resources`,
    description: config.description,
  };
}

// Header Component
function ResourceHeader({ config }) {
  if (!config) {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <Link href="/resources" className="text-orange-400 hover:text-orange-300 flex items-center gap-2 mb-4 w-fit">
            <i className="pi pi-arrow-left text-sm"></i>
            <span>Back to Resources</span>
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Resource Not Found</h1>
          <p className="text-gray-300">The resource you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        <Link href="/resources" className="text-orange-400 hover:text-orange-300 flex items-center gap-2 mb-4 w-fit">
          <i className="pi pi-arrow-left text-sm"></i>
          <span>Back to Resources</span>
        </Link>
        <h1 className="text-4xl font-bold text-white mb-2">{config.title}</h1>
        <p className="text-gray-300">{config.description}</p>
      </div>
    </div>
  );
}

// Links Section Component
function UsefulLinks({ links }) {
  if (!links || links.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Useful Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <div className="p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-400 hover:shadow-md transition-all duration-300 cursor-pointer h-full">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">{link.label}</h4>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </div>
                <i className="pi pi-external-link text-orange-600 ml-2 mt-1 text-xs"></i>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// Navigation Footer Component
function NavigationFooter() {
  return (
    <div className="flex justify-center pt-8 border-t border-gray-200">
      <Link href="/resources">
        <Button
          label="Explore All Resources"
          icon="pi pi-arrow-right"
          iconPos="right"
          className="p-button-lg"
        />
      </Link>
    </div>
  );
}

// Main Page Component
export default async function Page({ params }) {
  const { section } = await params;
  const config = getResourceConfig(section);

  return (
    <div className="w-full bg-white">
      <ResourceHeader config={config} />

      {!config ? null : (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Content Card */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 mb-8 prose prose-sm prose-a:text-orange-600 prose-a:no-underline hover:prose-a:text-orange-700 max-w-none">
            <ResourceContent config={config} />
          </div>

          {/* Useful Links Section */}
          <UsefulLinks links={config.links} />

          {/* Navigation Footer */}
          <NavigationFooter />
        </div>
      )}
    </div>
  );
}
