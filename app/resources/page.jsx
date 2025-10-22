import Link from "next/link";

const resources = [
  {
    slug: "admission-procedure",
    title: "Admission Procedure",
    description: "Learn about the admission process and application requirements at BTU Cottbus-Senftenberg",
    icon: "pi-graduation-cap"
  },
  {
    slug: "accommodation",
    title: "Finding Accommodation",
    description: "Explore housing options and accommodation facilities in Cottbus",
    icon: "pi-home"
  },
  {
    slug: "city-registration",
    title: "City Registration",
    description: "Information about registering with local authorities in Cottbus",
    icon: "pi-map-marker"
  },
  {
    slug: "bank-account",
    title: "Opening a Bank Account",
    description: "Guide to opening and managing bank accounts in Germany",
    icon: "pi-credit-card"
  },
  {
    slug: "emergency-contacts",
    title: "Emergency Contacts",
    description: "Important emergency contact information and resources",
    icon: "pi-phone"
  },
  {
    slug: "reaching-cottbus",
    title: "Reaching Cottbus",
    description: "How to get to Cottbus from various locations",
    icon: "pi-directions"
  }
];

export const metadata = {
  title: "Student Resources",
  description: "Guides and helpful links curated by ISAC for students at BTU Cottbus-Senftenberg.",
};

export default function Page() {
  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-text-primary">Student Resources</h1>
        <p className="text-lg text-text-secondary">
          Comprehensive guides and information to help you navigate student life at BTU Cottbus-Senftenberg.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <Link
            key={resource.slug}
            href={`/resources/${resource.slug}`}
            className="group bg-white rounded-lg shadow-soft border border-border p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-india rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i className={`pi ${resource.icon} text-white text-lg`}></i>
              </div>
              <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
            </div>
            <p className="text-text-secondary leading-relaxed">
              {resource.description}
            </p>
            <div className="mt-4 flex items-center text-primary font-medium">
              <span>Read more</span>
              <i className="pi pi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
