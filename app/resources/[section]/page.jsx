import ResourceContent from "./resource-content";

const RESOURCE_SLUGS = [
  "admission-procedure",
  "accommodation",
  "city-registration",
  "bank-account",
  "emergency-contacts",
  "reaching-cottbus"
];

const RESOURCE_SECTIONS = {
  "admission-procedure": {
    slug: "admission-procedure",
    title: "Admission Procedure at Brandenburg Technical University",
    description: "Learn about the admission process and application requirements",
    file: "admissionProcedure.md"
  },
  accommodation: {
    slug: "accommodation",
    title: "Finding Accommodation",
    description: "Explore housing options and accommodation facilities in Cottbus",
    file: "findingAccommodation.md"
  },
  "city-registration": {
    slug: "city-registration",
    title: "City Registration",
    description: "Information about registering with local authorities in Cottbus",
    file: "cityRegistration.md"
  },
  "bank-account": {
    slug: "bank-account",
    title: "Opening a Bank Account",
    description: "Guide to opening and managing bank accounts in Germany",
    file: "bankAccount.md"
  },
  "emergency-contacts": {
    slug: "emergency-contacts",
    title: "Emergency Contacts",
    description: "Important emergency contact information and resources",
    file: "emergencyContacts.md"
  },
  "reaching-cottbus": {
    slug: "reaching-cottbus",
    title: "Reaching Cottbus",
    description: "How to get to Cottbus from various locations",
    file: "reachingCottbus.md"
  },
};

const getResourceSection = (slug) => RESOURCE_SECTIONS[slug];

export function generateStaticParams() {
  return RESOURCE_SLUGS.map((section) => ({ section }));
}

export function generateMetadata({ params }) {
  const config = getResourceSection(params.section);

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

export default function Page({ params }) {
  const config = getResourceSection(params.section);

  if (!config) {
    return (
      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-8">Resource Not Found</h1>
        <p>The requested resource could not be located.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-text-primary">{config.title}</h1>
        <p className="text-lg text-text-secondary">{config.description}</p>
      </div>
      <div className="bg-white rounded-lg shadow-soft p-8 border border-border">
        <ResourceContent config={config} />
      </div>
    </main>
  );
}
