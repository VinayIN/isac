export const RESOURCE_SECTIONS = {
  "admission-procedure": {
    slug: "admission-procedure",
    title: "Admission Procedure at Brandenburg Technical University",
    description: "Learn about the admission process and application requirements",
    icon: "pi-graduation-cap",
    cardStyles: {
      bgClass: "bg-blue-50 hover:bg-blue-100 border-l-4 border-blue-500",
      iconClass: "text-blue-500",
    },
    markdownFile: "/markdown/admissionProcedure.md",
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
  accommodation: {
    slug: "accommodation",
    title: "Finding Accommodation",
    description: "Explore housing options and accommodation facilities in Cottbus",
    icon: "pi-home",
    cardStyles: {
      bgClass: "bg-green-50 hover:bg-green-100 border-l-4 border-green-600",
      iconClass: "text-green-600",
    },
    markdownFile: "/markdown/findingAccommodation.md",
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
    slug: "city-registration",
    title: "City Registration",
    description: "Complete your registration with the city authorities",
    icon: "pi-file-o",
    cardStyles: {
      bgClass: "bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-500",
      iconClass: "text-orange-500",
    },
    markdownFile: "/markdown/cityRegistration.md",
    links: [
      {
        label: "Online Booking",
        href: "https://www.cottbus.de/stadtverwaltung/d31/buergerservice/stadtbuero/moeglichkeiten_zur_terminvereinbarung.html",
        description: "Book your registration appointment online",
      },
    ],
  },
  "bank-account": {
    slug: "bank-account",
    title: "Opening Bank Account",
    description: "Set up your bank account for seamless financial management",
    icon: "pi-wallet",
    cardStyles: {
      bgClass: "bg-purple-50 hover:bg-purple-100 border-l-4 border-purple-500",
      iconClass: "text-purple-500",
    },
    markdownFile: "/markdown/bankAccount.md",
    links: [
      {
        label: "Tip: Bank Accounts",
        href: "https://www.study-in-germany.de/en/germany/arrival/bank-account/",
        description: "Comprehensive guide to opening bank accounts in Germany",
      },
    ],
  },
  "reaching-cottbus": {
    slug: "reaching-cottbus",
    title: "Reaching Cottbus",
    description: "Transportation options and travel guides to Cottbus",
    icon: "pi-map",
    cardStyles: {
      bgClass: "bg-red-50 hover:bg-red-100 border-l-4 border-red-500",
      iconClass: "text-red-500",
    },
    markdownFile: "/markdown/reachingCottbus.md",
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
    slug: "emergency-contacts",
    title: "Emergency Contacts",
    description: "Important emergency contact information and resources",
    icon: "pi-phone",
    cardStyles: {
      bgClass: "bg-pink-50 hover:bg-pink-100 border-l-4 border-pink-500",
      iconClass: "text-pink-500",
    },
    markdownFile: "/markdown/emergencyContacts.md",
    links: [],
  },
};

export const RESOURCE_SECTION_LIST = Object.values(RESOURCE_SECTIONS);

export const RESOURCE_SLUGS = Object.keys(RESOURCE_SECTIONS);

export const getResourceSection = (slug) => RESOURCE_SECTIONS[slug];
