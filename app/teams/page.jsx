'use client';

import { useState, useEffect, useMemo } from "react";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { useFirestore } from "../_hooks/useFirestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from "../_lib/init";

const ProfileCard = ({ name, title, href }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full">
      <div className="relative w-full aspect-square bg-gray-100 overflow-hidden flex-shrink-0">
        <Image
          alt={name}
          src={href}
          preview
          width="100%"
          height="100%"
          className="w-full h-full !object-cover"
          imageClassName="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23e5e7eb" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="40" fill="%239ca3af" text-anchor="middle" dy=".3em" font-family="system-ui"%3ENo Image%3C/text%3E%3C/svg%3E';
          }}
        />
      </div>
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
            {name}
          </h3>
          <p className="text-sm text-gray-600 font-medium line-clamp-2">{title}</p>
        </div>
      </div>
    </div>
  );
};

const TEAM_CONFIGS = [
  {
    key: "admin",
    label: "Administrative Team",
    description: "Leading our organization with vision and dedication",
  },
  {
    key: "socialmedia",
    label: "Social Media & Technology",
    description: "Connecting our community through digital platforms",
  },
  {
    key: "finance",
    label: "Finance Team",
    description: "Managing resources and ensuring financial transparency",
  },
  {
    key: "events",
    label: "Events Team",
    description: "Creating memorable cultural experiences",
  },
  {
    key: "advisory",
    label: "Advisory Board",
    description: "Providing guidance and strategic direction",
  },
];

// Helper to process team data with images
const processTeamData = async (data, teamKey, setTeams, setMessages) => {
  if (data.loading) return;

  if (!data.data || data.data.length === 0) {
    setTeams((prev) => ({ ...prev, [teamKey]: [] }));
    return;
  }

  try {
    const storage = getStorage(app);
    const teamWithUrls = await Promise.all(
      data.data.map(async (member) => {
        try {
          const imageRef = ref(storage, member.href);
          const url = await getDownloadURL(imageRef);
          return { ...member, href: url };
        } catch (err) {
          console.error(`Error loading image for ${member.name}:`, err);
          return member;
        }
      }),
    );
    setTeams((prev) => ({ ...prev, [teamKey]: teamWithUrls }));
  } catch (err) {
    console.error(`Error fetching ${teamKey}:`, err);
    setTeams((prev) => ({ ...prev, [teamKey]: data.data }));
    setMessages((prev) => ({
      ...prev,
      [teamKey]: {
        severity: "error",
        summary: "Error loading images",
        detail: `Could not load images for ${teamKey} team`,
      },
    }));
  }
};

const currentYear = new Date().getFullYear();

export default function TeamsPage() {
  const [selectedYear, setSelectedYear] = useState(`${currentYear}`);
  const [selectedTeam, setSelectedTeam] = useState("admin");
  const [years, setYears] = useState([]);
  const [teams, setTeams] = useState({});
  const [messages, setMessages] = useState({});

  const yearsCollection = useFirestore("teams");

  // Fetch data for each team using useFirestore hook
  const adminData = useFirestore(`teams/${selectedYear}/admin`);
  const socialMediaData = useFirestore(`teams/${selectedYear}/socialmedia`);
  const financeData = useFirestore(`teams/${selectedYear}/finance`);
  const eventsData = useFirestore(`teams/${selectedYear}/events`);
  const advisoryData = useFirestore(`teams/${selectedYear}/advisory`);

  // Initialize year selection from available years
  useEffect(() => {
    if (!yearsCollection.loading && yearsCollection.data) {
      const availableYears = yearsCollection.data.map((doc) => doc.id);
      setYears(availableYears);

      if (availableYears.length > 0) {
        if (!availableYears.includes(selectedYear)) {
          const sortedYears = [...availableYears].sort((a, b) => b - a);
          setSelectedYear(`${sortedYears[0]}`);
        }
      }
    }
  }, [yearsCollection.data, yearsCollection.loading, selectedYear]);

  // Process each team's data separately to avoid infinite loops
  useEffect(() => {
    processTeamData(adminData, "admin", setTeams, setMessages);
  }, [adminData.data, adminData.loading]);

  useEffect(() => {
    processTeamData(socialMediaData, "socialmedia", setTeams, setMessages);
  }, [socialMediaData.data, socialMediaData.loading]);

  useEffect(() => {
    processTeamData(financeData, "finance", setTeams, setMessages);
  }, [financeData.data, financeData.loading]);

  useEffect(() => {
    processTeamData(eventsData, "events", setTeams, setMessages);
  }, [eventsData.data, eventsData.loading]);

  useEffect(() => {
    processTeamData(advisoryData, "advisory", setTeams, setMessages);
  }, [advisoryData.data, advisoryData.loading]);

  const teamData = useMemo(
    () =>
      TEAM_CONFIGS.map((config) => ({
        ...config,
        members: teams[config.key] || [],
        messages: messages[config.key] ? [messages[config.key]] : [],
      })),
    [teams, messages],
  );

  const currentTeam = teamData.find((t) => t.key === selectedTeam);

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 mb-4">
            <div className="w-2 h-8 bg-orange-400 rounded-full"></div>
            <div className="w-2 h-8 bg-green-500 rounded-full"></div>
            <div className="w-2 h-8 bg-red-500 rounded-full"></div>
          </div>
          <span className="text-sm font-bold uppercase tracking-widest text-orange-600 block mb-2">
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
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 border-b border-orange-200">
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
