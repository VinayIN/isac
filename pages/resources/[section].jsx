import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ScrollTop } from 'primereact/scrolltop';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import Head from 'next/head';
import { useMarkdown } from '../../hooks/markdown';

const sectionConfig = {
  'admission-procedure': {
    title: 'Admission Procedure at Brandenburg Technical University',
    description: 'Learn about the admission process and application requirements',
    markdownFile: '/markdown/admissionProcedure.md',
    links: [
      {
        label: 'BTU official page',
        href: 'https://www.b-tu.de/en/prospective-international-students',
        description: 'Official BTU information for international students',
      },
      {
        label: 'Check deadlines here',
        href: 'https://www.b-tu.de/en/students/admissions-registrars-office/dates-and-deadlines',
        description: 'Important application deadlines',
      },
      {
        label: 'International Events',
        href: 'https://www.b-tu.de/en/international/news/events',
        description: 'Connect with international community events',
      },
      {
        label: 'Welcome Point',
        href: 'https://www.b-tu.de/en/welcome-centre/',
        description: 'Get support from the welcome center',
      },
    ],
  },
  'accommodation': {
    title: 'Finding Accommodation',
    description: 'Explore housing options and accommodation facilities in Cottbus',
    markdownFile: '/markdown/findingAccommodation.md',
    links: [
      {
        label: 'Studentenwerk Frankfurt (Oder)',
        href: 'https://studentenwerk-frankfurt.net/wohnen-in-cottbus/',
        description: 'Official student housing service',
      },
      {
        label: 'Guesthouse der Uni-Service GmbH',
        href: 'https://www.gaestehaus-uni.de/en/home',
        description: 'University guest house accommodations',
      },
      {
        label: 'T-1 Campus',
        href: 'http://www.t1-cottbus.de/',
        description: 'Student housing complex',
      },
      {
        label: 'Wg-gesucht',
        href: 'https://www.wg-gesucht.de/wg-zimmer-in-Cottbus.22.0.1.0.html',
        description: 'Roommate and apartment search platform',
      },
    ],
  },
  'city-registration': {
    title: 'City Registration',
    description: 'Complete your registration with the city authorities',
    markdownFile: '/markdown/cityRegistration.md',
    links: [
      {
        label: 'Online Booking',
        href: 'https://www.cottbus.de/stadtverwaltung/d31/buergerservice/stadtbuero/moeglichkeiten_zur_terminvereinbarung.html',
        description: 'Book your registration appointment online',
      },
    ],
  },
  'bank-account': {
    title: 'Opening Bank Account',
    description: 'Set up your bank account for seamless financial management',
    markdownFile: '/markdown/bankAccount.md',
    links: [
      {
        label: 'Tip: Bank Accounts',
        href: 'https://www.study-in-germany.de/en/germany/arrival/bank-account/',
        description: 'Comprehensive guide to opening bank accounts in Germany',
      },
    ],
  },
  'reaching-cottbus': {
    title: 'Reaching Cottbus',
    description: 'Transportation options and travel guides to Cottbus',
    markdownFile: '/markdown/reachingCottbus.md',
    links: [
      {
        label: 'VBB (Verkehrsverbund Berlin-Brandenburg)',
        href: 'https://www.vbb.de/en',
        description: 'Regional public transport network',
      },
      {
        label: 'DB Navigator (Deutsche Bahn)',
        href: 'https://int.bahn.de/en/',
        description: 'National railway information',
      },
    ],
  },
  'emergency-contacts': {
    title: 'Emergency Contacts',
    description: 'Important emergency contact information and resources',
    markdownFile: '/markdown/emergencyContacts.md',
    links: [],
  },
};

export default function ResourceDetail({ section }) {
  const config = sectionConfig[section];
  const content = useMarkdown(config.markdownFile);

  if (!config) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Resource Not Found</h1>
            <p className="text-gray-600 mb-6">The resource you're looking for doesn't exist.</p>
            <Link href="/resources">
              <Button label="Back to Resources" icon="pi pi-arrow-left" />
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{config.title} - ISAC Resources</title>
        <meta name="description" content={config.description} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/resources" className="text-orange-400 hover:text-orange-300 flex items-center gap-2 mb-4 w-fit">
              <i className="pi pi-arrow-left text-sm"></i>
              <span>Back to Resources</span>
            </Link>
            <h1 className="text-4xl font-bold mb-2">{config.title}</h1>
            <p className="text-gray-300">{config.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Content Card */}
          <Card className="mb-8">
            <div className="prose prose-sm max-w-none mb-6 overflow-y-auto max-h-96">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
            <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up" />
          </Card>

          {/* Related Links */}
          {config.links.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Useful Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {config.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <div className="p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all duration-300 cursor-pointer h-full">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{link.label}</h4>
                          <p className="text-sm text-gray-600">{link.description}</p>
                        </div>
                        <i className="pi pi-external-link text-orange-500 ml-2 mt-1 text-xs"></i>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
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
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      section: params.section,
    },
  };
}

export async function getStaticPaths() {
  const paths = Object.keys(sectionConfig).map((section) => ({
    params: { section },
  }));

  return {
    paths,
    fallback: false,
  };
}
