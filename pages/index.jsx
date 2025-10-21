import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import Link from "next/link";
import Head from "next/head";
import HeroCarousel from "../components/hero-carousel";

function Home() {
  return (
    <>
      <Head>
        <title>ISAC - Indian Student Association at BTU Cottbus</title>
        <meta
          name="description"
          content="ISAC is a vibrant community of Indian students at BTU Cottbus-Senftenberg. Join us for cultural events, networking, and student support."
        />
        <meta
          name="keywords"
          content="ISAC, Indian students, BTU Cottbus, student association, community, events"
        />
      </Head>

      <div className="w-full">
        {/* Hero Section with Image Carousel */}
        <section className="hero-carousel-section">
          <HeroCarousel />
          <div className="hero-content">
            <h1 className="hero-title">Welcome to ISAC</h1>
            <p className="hero-subtitle">
              Indian Student Association at BTU Cottbus
            </p>
            <p className="hero-description">
              Building bridges between cultures amongst international students.
              Checkout our events and celebrate with our vibrant community.
            </p>
          </div>
          <div className="hero-buttons">
            <Link href="/events">
              <Button
                label="Explore Events"
                icon="pi pi-calendar"
                className="p-button-lg"
              />
            </Link>
            <Link href="/resources">
              <Button
                label="Student Resources"
                icon="pi pi-book"
                className="p-button-lg"
              />
            </Link>
            <Link href="https://chat.whatsapp.com/EMtoCcEhDWmHgwGThM3FDK">
              <Button
                label="Join WhatsApp Community"
                icon="pi pi-whatsapp"
                className="p-button-lg"
              />
            </Link>
          </div>
        </section>

        {/* About Section with Accordion */}
        <section className="about-section py-12">
          <div className="max-w-4xl mx-auto">
            <Accordion multiple activeIndex={[0]} className="w-full">
              <AccordionTab header="Who are we (ISAC)?">
                <div className="space-y-5">
                  <p className="text-base leading-relaxed">
                    Indian Students Association Cottbus (ISAC) is one of the
                    leading student organizations at Brandenburg University of
                    Technology (BTU Cottbus-Senftenberg). Founded with the
                    mission to unite Indian students and facilitate their
                    integration into university life, ISAC has grown into a
                    vibrant community of diverse individuals.
                  </p>
                  <p className="text-base leading-relaxed">
                    Our partnership with the{" "}
                    <strong className="text-orange-600">
                      Indians in Germany platform
                    </strong>
                    , under the umbrella of the Indian embassy in Berlin,
                    strengthens our initiatives. We are one of 16 recognized
                    Indian student organizations in Germany, reflecting our
                    commitment to excellence and community building.
                  </p>
                  <p className="text-base leading-relaxed">
                    Through ISAC, we conduct events of{" "}
                    <strong className="text-green-700">
                      academic, professional, and cultural
                    </strong>{" "}
                    significance throughout the year. Whether it's celebrating
                    India's independence, hosting professional workshops, or
                    organizing cultural festivals, our mission remains constant:
                    to celebrate Indian heritage while building meaningful
                    connections.
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Official Documentation
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="/docs/Constitution_ISAC_2021.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          icon="pi pi-file-pdf"
                          label="Constitution"
                          iconPos="left"
                          className="p-button-sm"
                          severity="info"
                          outlined
                        />
                      </a>
                      <a
                        href="/docs/Working Guidelines_ISAC_2021.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          icon="pi pi-file-pdf"
                          label="Working Guidelines"
                          iconPos="left"
                          className="p-button-sm"
                          severity="info"
                          outlined
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </AccordionTab>

              <AccordionTab header="How can ISAC help you?">
                <div className="space-y-5">
                  <p className="text-base leading-relaxed">
                    Transitioning to a new country can be overwhelming. Our
                    dedicated team of volunteers is here to make your journey
                    smoother and more enjoyable. With years of experience living
                    in Cottbus, our members provide authentic, peer-to-peer
                    guidance.
                  </p>
                  <div className="bg-orange-50 border-l-4 border-orange-400 p-4 my-4 rounded">
                    <p className="font-semibold text-orange-900 mb-3">
                      Through ISAC, you'll have access to comprehensive support:
                    </p>
                  </div>
                  <ul className="space-y-4 ml-2">
                    <li className="flex gap-4">
                      <span className="shrink-0 text-orange-500 font-bold text-lg">
                        •
                      </span>
                      <div>
                        <Link
                          href="/resources/admission-procedure"
                          className="font-semibold text-orange-600 hover:text-orange-800 transition"
                        >
                          Admission & Enrollment Guidance
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">
                          Navigate the admission process with expert tips
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="shrink-0 text-green-600 font-bold text-lg">
                        •
                      </span>
                      <div>
                        <Link
                          href="/resources/accommodation"
                          className="font-semibold text-green-700 hover:text-green-900 transition"
                        >
                          Accommodation Assistance
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">
                          Find and secure housing in Cottbus
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="shrink-0 text-orange-500 font-bold text-lg">
                        •
                      </span>
                      <div>
                        <Link
                          href="/resources/reaching-cottbus"
                          className="font-semibold text-orange-600 hover:text-orange-800 transition"
                        >
                          Arrival & Transportation
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">
                          Easy guides to reach Cottbus
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="shrink-0 text-green-600 font-bold text-lg">
                        •
                      </span>
                      <div>
                        <Link
                          href="/resources/city-registration"
                          className="font-semibold text-green-700 hover:text-green-900 transition"
                        >
                          City Registration Support
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">
                          Complete local bureaucracy with confidence
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="shrink-0 text-orange-500 font-bold text-lg">
                        •
                      </span>
                      <div>
                        <Link
                          href="/resources/bank-account"
                          className="font-semibold text-orange-600 hover:text-orange-800 transition"
                        >
                          Banking & Finance Help
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">
                          Set up your financial systems
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="shrink-0 text-green-600 font-bold text-lg">
                        •
                      </span>
                      <div>
                        <Link
                          href="/resources/emergency-contacts"
                          className="font-semibold text-green-700 hover:text-green-900 transition"
                        >
                          Emergency Resources
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">
                          Critical contacts and support numbers
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="shrink-0 text-orange-500 font-bold text-lg">
                        •
                      </span>
                      <div>
                        <span className="font-semibold text-gray-900">
                          Cultural & Social Events
                        </span>
                        <p className="text-sm text-gray-600 mt-1">
                          Make memories while celebrating our heritage
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </AccordionTab>

              <AccordionTab header="How can you participate with ISAC?">
                <div className="space-y-5">
                  <p className="text-base leading-relaxed">
                    ISAC thrives because of passionate individuals who want to
                    make a difference. There are several exciting ways to get
                    involved and become part of our growing community:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <Card className="text-center">
                      <div>
                        <div className="text-5xl text-orange-500 mb-4 inline-block">
                          <i className="pi pi-user-plus"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                          ISAC Membership
                        </h4>
                        <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                          Become an official member and help shape ISAC's
                          future! Every year after our major celebrations, we
                          invite new members to join our team.
                        </p>
                        <a
                          href="https://forms.gle/7LRzgvv4CQVsvLr97"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4"
                        >
                          <Button
                            label="Apply Now"
                            icon="pi pi-user-plus"
                            className="p-button-sm w-full"
                            severity="success"
                          />
                        </a>
                      </div>
                    </Card>

                    <Card className="text-center">
                      <div>
                        <div className="text-5xl text-green-600 mb-4 inline-block">
                          <i className="pi pi-check-circle"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                          Volunteer for Events
                        </h4>
                        <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                          Join us for specific events without long-term
                          commitment. Volunteers help with decorations,
                          organization, cooking, and much more.
                        </p>
                        <a
                          href="mailto:ask.isacottbus@gmail.com"
                          className="inline-block mt-4"
                        >
                          <Button
                            label="Volunteer"
                            icon="pi pi-heart"
                            className="p-button-sm w-full"
                            severity="danger"
                          />
                        </a>
                      </div>
                    </Card>

                    <Card className="text-center">
                      <div>
                        <div className="text-5xl text-blue-500 mb-4 inline-block">
                          <i className="pi pi-comments"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                          Share Feedback
                        </h4>
                        <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                          Your voice matters! Have ideas for events or
                          suggestions for improvement? We read and discuss
                          feedback before every event.
                        </p>
                        <a
                          href="https://forms.gle/B9sNgVu5KqdjcZVaA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4"
                        >
                          <Button
                            label="Send Feedback"
                            icon="pi pi-comments"
                            className="p-button-sm w-full"
                            severity="info"
                          />
                        </a>
                      </div>
                    </Card>
                  </div>
                </div>
              </AccordionTab>

              <AccordionTab header="How can you contact ISAC?">
                <div className="space-y-5">
                  <p className="text-base leading-relaxed">
                    We're here to help! While we don't have a physical office,
                    we're easily reachable through multiple channels. Choose the
                    best option for your need:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <Card className="text-center">
                      <div>
                        <div className="text-4xl text-orange-500 mb-4 inline-block">
                          <i className="pi pi-envelope"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Administrative
                        </h4>
                        <p className="text-xs text-gray-600 mb-4">
                          For official matters
                        </p>
                        <a href="mailto:isacottbus@gmail.com">
                          <Button
                            label="isacottbus@gmail.com"
                            className="p-button-sm w-full"
                            severity="success"
                            text
                          />
                        </a>
                      </div>
                    </Card>

                    <Card className="text-center">
                      <div>
                        <div className="text-4xl text-green-600 mb-4 inline-block">
                          <i className="pi pi-question-circle"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Information
                        </h4>
                        <p className="text-xs text-gray-600 mb-4">
                          For help and guidance
                        </p>
                        <a href="mailto:ask.isacottbus@gmail.com">
                          <Button
                            label="ask.isacottbus@gmail.com"
                            className="p-button-sm w-full"
                            severity="warning"
                            text
                          />
                        </a>
                      </div>
                    </Card>

                    <Card className="text-center">
                      <div>
                        <div className="text-4xl text-pink-500 mb-4 inline-block">
                          <i className="pi pi-instagram"></i>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Quick Response
                        </h4>
                        <p className="text-xs text-gray-600 mb-4">
                          For urgent messages
                        </p>
                        <a
                          href="https://www.instagram.com/isac_cottbus"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            label="@isac_cottbus"
                            className="p-button-sm w-full"
                            severity="danger"
                            text
                          />
                        </a>
                      </div>
                    </Card>
                  </div>

                  <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-400 rounded">
                    <div className="flex gap-3">
                      <div className="text-2xl text-red-600">
                        <i className="pi pi-exclamation-triangle"></i>
                      </div>
                      <div>
                        <strong className="text-red-900 block mb-2">
                          Important Security Notice
                        </strong>
                        <p className="text-sm text-red-800">
                          Only trust communications from the email addresses
                          listed above. Any other contact claiming to be from
                          ISAC should be verified or reported immediately.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionTab>
            </Accordion>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
