'use client';

import { useState, useEffect, useMemo } from "react";
import { Image } from "primereact/image";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Badge } from "primereact/badge";
import { useFirestore } from "../_hooks/useFirestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from "../_lib/init";

const ProfileCard = ({ name, title, href }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden border border-gray-200">
      <div className="relative h-56 bg-gray-100 overflow-hidden">
        <Image
          alt={name}
          src={href}
          width={220}
          height={220}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
          {name}
        </h3>
        <p className="text-sm text-gray-600 font-medium">{title}</p>
      </div>
    </div>
  );
};

const currentYear = new Date().getFullYear();

export default function TeamsPage() {
  const [selectedYear, setSelectedYear] = useState(`${currentYear}`);
  const [selectedTeam, setSelectedTeam] = useState("admin");
  const [years, setYears] = useState([]);
  const [teams, setTeams] = useState({
    admin: [],
    socialmedia: [],
    finance: [],
    events: [],
    advisory: [],
  });

  const yearsCollection = useFirestore("teams");

  const [adminMessages, setAdminMessages] = useState([]);
  const [socialMediaMessages, setSocialMediaMessages] = useState([]);
  const [financeMessages, setFinanceMessages] = useState([]);
  const [eventsMessages, setEventsMessages] = useState([]);
  const [advisoryMessages, setAdvisoryMessages] = useState([]);

  useEffect(() => {
    if (!yearsCollection.loading && yearsCollection.data) {
      const availableYears = yearsCollection.data.map((doc) => doc.id);
      setYears(availableYears);

      if (availableYears.length > 0) {
        if (!availableYears.includes(selectedYear)) {
          const sortedYears = [...availableYears].sort((a, b) => b - a);
          setSelectedYear(sortedYears[0]);
        }
      }
    }
  }, [yearsCollection.data, yearsCollection.loading, selectedYear]);

  const adminData = useFirestore(`teams/${selectedYear}/admin`);
  const socialMediaData = useFirestore(`teams/${selectedYear}/socialmedia`);
  const financeData = useFirestore(`teams/${selectedYear}/finance`);
  const eventsData = useFirestore(`teams/${selectedYear}/events`);
  const advisoryData = useFirestore(`teams/${selectedYear}/advisory`);

  useEffect(() => {
    const fetchImageUrls = async (data, teamKey) => {
      if (data.loading) return;

      const addMessage = (severity, summary, detail, sticky = true) => {
        const message = { severity, summary, detail, sticky };
        switch (teamKey) {
          case "admin":
            setAdminMessages((prev) => [...prev, message]);
            break;
          case "socialmedia":
            setSocialMediaMessages((prev) => [...prev, message]);
            break;
          case "finance":
            setFinanceMessages((prev) => [...prev, message]);
            break;
          case "events":
            setEventsMessages((prev) => [...prev, message]);
            break;
          case "advisory":
            setAdvisoryMessages((prev) => [...prev, message]);
            break;
          default:
            break;
        }
      };

      if (!data.data || data.data.length === 0) {
        setTeams((prev) => ({ ...prev, [teamKey]: [] }));
        return;
      }

      try {
        const storage = getStorage(app);
        const teamWithUrls = await Promise.all(
          data.data.map(async (member) => {
            const imageRef = ref(storage, member.href);
            const url = await getDownloadURL(imageRef);
            return { ...member, href: url };
          }),
        );
        setTeams((prev) => ({ ...prev, [teamKey]: teamWithUrls }));
      } catch (err) {
        console.error(`Error fetching ${teamKey} image URLs:`, err);
        setTeams((prev) => ({ ...prev, [teamKey]: data.data }));
        addMessage(
          "error",
          "Error loading images",
          `Could not load images for ${teamKey} team`,
        );
      }
    };

    // Clear all messages when year changes
    setAdminMessages([]);
    setSocialMediaMessages([]);
    setFinanceMessages([]);
    setEventsMessages([]);
    setAdvisoryMessages([]);

    fetchImageUrls(adminData, "admin");
    fetchImageUrls(socialMediaData, "socialmedia");
    fetchImageUrls(financeData, "finance");
    fetchImageUrls(eventsData, "events");
    fetchImageUrls(advisoryData, "advisory");
  }, [selectedYear]);

  const teamData = [
    {
      key: "admin",
      label: "Administrative Team",
      description: "Leading our organization with vision and dedication",
      members: teams.admin,
      messages: adminMessages,
    },
    {
      key: "socialmedia",
      label: "Social Media & Technology",
      description: "Connecting our community through digital platforms",
      members: teams.socialmedia,
      messages: socialMediaMessages,
    },
    {
      key: "finance",
      label: "Finance Team",
      description: "Managing resources and ensuring financial transparency",
      members: teams.finance,
      messages: financeMessages,
    },
    {
      key: "events",
      label: "Events Team",
      description: "Creating memorable cultural experiences",
      members: teams.events,
      messages: eventsMessages,
    },
    {
      key: "advisory",
      label: "Advisory Board",
      description: "Providing guidance and strategic direction",
      members: teams.advisory,
      messages: advisoryMessages,
    },
  ];

  const currentTeam = teamData.find((t) => t.key === selectedTeam);

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2">
            <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
            <div className="w-2 h-8 bg-green-600 rounded-full"></div>
            <div className="w-2 h-8 bg-red-600 rounded-full"></div>
          </div>
          <span className="text-sm font-bold uppercase tracking-widest text-orange-600">
            Meet Our Team
          </span>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            ISAC is one of the leading student organizations at BTU
            Cottbus-Senftenberg and one of 16 recognized Indian student
            associations in Germany. Our dedicated teams work together to
            celebrate cultural diversity.
          </p>
        </div>
      </div>

      {/* Year Selector Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Select Team Year
            </h2>
            <p className="text-gray-600 mt-1">
              Choose a year to view the team composition
            </p>
          </div>
          <div className="w-full sm:w-48">
            <Dropdown
              value={selectedYear}
              options={years}
              onChange={(e) => setSelectedYear(e.value)}
              placeholder="Select Year"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Team Selector Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3">
          {teamData.map((team) => (
            <Button
              key={team.key}
              label={team.label}
              onClick={() => setSelectedTeam(team.key)}
              className={`p-button-sm ${
                selectedTeam === team.key ? "p-button" : "p-button-outlined"
              }`}
              severity={selectedTeam === team.key ? "info" : "secondary"}
            />
          ))}
        </div>
      </div>

      {/* Team Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Team Header */}
          <div className="bg-blue-50 p-8 border-b border-blue-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {currentTeam?.label}
            </h2>
            <p className="text-lg text-gray-600">
              {currentTeam?.description}
            </p>
          </div>

          {/* Team Members */}
          <div className="p-8">
            {currentTeam?.members && currentTeam.members.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                  {currentTeam.members.map((member) => (
                    <ProfileCard key={member.id} {...member} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <i className="pi pi-inbox text-5xl text-gray-300 mb-4 block"></i>
                <p className="text-gray-500 text-lg">
                  No team members found for {selectedYear}
                </p>
              </div>
            )}

            {/* Messages */}
            {currentTeam?.messages && currentTeam.messages.length > 0 && (
              <div className="mt-8 space-y-3">
                {currentTeam.messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg ${
                      msg.severity === "error"
                        ? "bg-red-50 text-red-800 border border-red-200"
                        : "bg-blue-50 text-blue-800 border border-blue-200"
                    }`}
                  >
                    <p className="font-semibold">{msg.summary}</p>
                    <p className="text-sm">{msg.detail}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
