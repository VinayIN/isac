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
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 mb-4">
            <div className="w-2 h-8 bg-orange-400 rounded-full"></div>
            <div className="w-2 h-8 bg-green-500 rounded-full"></div>
            <div className="w-2 h-8 bg-red-500 rounded-full"></div>
          </div>
          <span className="text-sm font-bold uppercase tracking-widest text-orange-400">
            Student Resources
          </span>
          <h1 className="text-4xl font-bold text-white mt-2 mb-4">
            Your Guide to Success
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Comprehensive guides and information to help you navigate student life at BTU Cottbus-Senftenberg. From admission to accommodation, we've got you covered.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Link
              key={resource.slug}
              href={`/resources/${resource.slug}`}
              className="group"
            >
              <div className="h-full bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg hover:border-orange-400 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className={`pi ${resource.icon} text-white text-lg`}></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {resource.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center text-orange-600 font-medium text-sm">
                  <span>Read more</span>
                  <i className="pi pi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Quick Links</h2>
            <p className="text-gray-600">Fast access to frequently used resources and important information</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://www.b-tu.de/en/students/admissions-registrars-office/dates-and-deadlines"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all duration-300 cursor-pointer h-full">
                <div className="flex items-start justify-between mb-2">
                  <i className="pi pi-calendar text-blue-600 text-xl"></i>
                  <i className="pi pi-external-link text-blue-600 text-xs"></i>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">BTU Admission Deadlines</h4>
                <p className="text-xs text-gray-600">Check important application and enrollment dates</p>
              </div>
            </a>

            <a
              href="https://www.b-tu.de/en/international/news/events"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg hover:border-green-400 hover:shadow-md transition-all duration-300 cursor-pointer h-full">
                <div className="flex items-start justify-between mb-2">
                  <i className="pi pi-id-card text-green-600 text-xl"></i>
                  <i className="pi pi-external-link text-green-600 text-xs"></i>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">News and Events</h4>
                <p className="text-xs text-gray-600">Information about all the events organized by BTU are listed here periodically.</p>
              </div>
            </a>

            <a
              href="https://www.b-tu.de/en/welcome-centre/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg hover:border-orange-400 hover:shadow-md transition-all duration-300 cursor-pointer h-full">
                <div className="flex items-start justify-between mb-2">
                  <i className="pi pi-phone text-orange-600 text-xl"></i>
                  <i className="pi pi-external-link text-orange-600 text-xs"></i>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Welcome Center</h4>
                <p className="text-xs text-gray-600">Get in touch with BTU welcome center and support services when you first land in Germany.</p>
              </div>
            </a>

            <a
              href="https://cottbus.de/verwaltung/gb-3/dz-3-1/fb-32-ordnung-und-sicherheit/gewerbeangelegenheiten/verkaufsoffene-sonntage/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg hover:border-red-400 hover:shadow-md transition-all duration-300 cursor-pointer h-full">
                <div className="flex items-start justify-between mb-2">
                  <i className="pi pi-calendar text-red-600 text-xl"></i>
                  <i className="pi pi-external-link text-red-600 text-xs"></i>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Sunday Shopping</h4>
                <p className="text-xs text-gray-600">Check official Cottbus.de site for more on shopping options in Cottbus during holidays.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
