'use client';

import React, { useState, useMemo } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Card } from "primereact/card";
import { Tag } from "primereact/tag";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { useFirestore } from "../_hooks/useFirestore";

export default function EventsPage() {
  const announcements = useFirestore("announcements");
  const events = useFirestore("events");
  const [expandedRows, setExpandedRows] = useState([]);
  const [filterYear, setFilterYear] = useState(null);

  // Get unique years for filtering
  const uniqueYears = useMemo(() => {
    if (!events.data) return [];
    return Array.from(new Set(events.data.map((e) => e.Year)))
      .sort()
      .reverse();
  }, [events.data]);

  const dateUtils = {
    parse: (dateString) => {
      if (!dateString) return null;
      const parts = dateString.split("/");
      if (parts.length !== 3) return null;
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    },

    format: (rowData, fieldName) => {
      const value = rowData[fieldName];
      const parsedDate =
        typeof value === "string"
          ? dateUtils.parse(value)
          : value instanceof Date
            ? value
            : null;

      if (!parsedDate) return value;

      return parsedDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    },
  };

  const getTagSeverity = (status) => {
    const s = status?.toLowerCase();
    if (s === "completed") return "success";
    if (s === "upcoming") return "info";
    if (s === "cancelled") return "danger";
    return "warning";
  };

  const getStatusIcon = (status) => {
    const s = status?.toLowerCase();
    if (s === "completed") return "pi-check-circle";
    if (s === "upcoming") return "pi-calendar";
    if (s === "cancelled") return "pi-times-circle";
    return "pi-info-circle";
  };

  const formatDate = (rowData) => dateUtils.format(rowData, "parsedDate");

  const filteredEvents = useMemo(() => {
    if (!events.data) return [];
    if (!filterYear) return events.data;
    return events.data.filter((e) => e.Year === filterYear);
  }, [events.data, filterYear]);

  const headerTemplate = (data) => {
    const eventCount =
      events.data?.filter((e) => e.Year === data.Year).length || 0;
    return (
      <div className="flex items-center justify-between w-full py-2">
        <span className="font-semibold text-lg">
          <i className="pi pi-calendar mr-2 text-blue-600"></i>
          {data.Year}
        </span>
        <Badge value={eventCount} severity="info" />
      </div>
    );
  };

  const statusBodyTemplate = (rowData) => (
    <div className="flex items-center gap-2">
      <i
        className={`pi ${getStatusIcon(rowData.Status)} text-lg`}
        style={{
          color:
            getTagSeverity(rowData.Status) === "success"
              ? "#10b981"
              : getTagSeverity(rowData.Status) === "info"
                ? "#3b82f6"
                : "#ef4444",
        }}
      ></i>
      <Tag
        value={rowData.Status}
        severity={getTagSeverity(rowData.Status)}
        className="font-semibold"
      />
    </div>
  );

  const eventNameBodyTemplate = (rowData) => (
    <div className="flex items-center gap-2">
      <div
        className="w-1 h-6 rounded-full"
        style={{
          background: "#3b82f6",
        }}
      ></div>
      <span className="font-semibold text-gray-900">
        {rowData["Event Name"]}
      </span>
    </div>
  );

  const linkBodyTemplate = (rowData) =>
    rowData.Link ? (
      <a
        href={rowData.Link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition font-semibold text-sm"
      >
        <i className="pi pi-external-link text-xs"></i>
        Details
      </a>
    ) : null;

  return (
    <div className="w-full bg-white">
      {/* Hero Header */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2">
            <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
            <div className="w-2 h-8 bg-green-600 rounded-full"></div>
            <div className="w-2 h-8 bg-red-600 rounded-full"></div>
          </div>
          <span className="text-sm font-bold uppercase tracking-widest text-orange-600">
            Events & Announcements
          </span>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Stay connected with ISAC's vibrant calendar of cultural, academic,
            and social events. Join us for memorable experiences and build
            lasting connections with the Indian student community.
          </p>
          <div className="flex gap-4 mt-6">
            <Button
              label="Jump to Announcements"
              icon="pi pi-bell"
              onClick={() =>
                document
                  .getElementById("announcements")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="p-button-warning"
            />
            <Button
              label="View Events Calendar"
              icon="pi pi-calendar"
              onClick={() =>
                document
                  .getElementById("calendar")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              outlined
            />
          </div>
        </div>
      </div>

      {/* Announcements Section */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        id="announcements"
      >
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-white rounded-full p-3 bg-blue-600">
              <i className="pi pi-bell text-xl"></i>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Announcements
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Important updates and news from ISAC
              </p>
            </div>
          </div>
        </div>

        {announcements.loading ? (
          <Card className="text-center py-12 border border-gray-200">
            <i className="pi pi-spin pi-spinner text-4xl text-blue-500 mb-4"></i>
            <p className="text-gray-600 text-lg">Loading announcements...</p>
          </Card>
        ) : announcements.data && announcements.data.length > 0 ? (
          <div className="space-y-4">
            {announcements.data.map((announcement, idx) => (
              <Card
                key={announcement.id || idx}
                className="border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                      <i className="pi pi-info-circle text-blue-600 text-lg"></i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {announcement.title}
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {announcement.description}
                    </p>
                    {announcement.posted_on && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <i className="pi pi-calendar text-xs"></i>
                        <span>
                          Posted on{" "}
                          {dateUtils.format(
                            {
                              parsedPostedOn: dateUtils.parse(
                                announcement.posted_on,
                              ),
                            },
                            "parsedPostedOn",
                          )}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12 border border-gray-200">
            <i className="pi pi-inbox text-4xl text-gray-400 mb-4"></i>
            <p className="text-gray-600 text-lg">
              No announcements at the moment
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Check back soon for updates!
            </p>
          </Card>
        )}
      </div>

      {/* Events Calendar Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" id="calendar">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-white rounded-full p-3 bg-green-600">
                <i className="pi pi-calendar text-xl"></i>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Events Calendar
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  {events.data?.length || 0} events scheduled
                </p>
              </div>
            </div>
          </div>

          {/* Year Filter */}
          {uniqueYears.length > 0 && (
            <Card
              className="mb-6 p-4"
              style={{
                background: "linear-gradient(to right, #fef3c7, #dbeafe)",
              }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-semibold text-gray-700">
                  Filter by Year:
                </span>
                <Button
                  label="All Years"
                  severity={filterYear === null ? "info" : "secondary"}
                  className="p-button-sm"
                  onClick={() => setFilterYear(null)}
                />
                {uniqueYears.map((year) => (
                  <Button
                    key={year}
                    label={year.toString()}
                    severity={filterYear === year ? "success" : "secondary"}
                    className="p-button-sm"
                    onClick={() => setFilterYear(year)}
                  />
                ))}
              </div>
            </Card>
          )}

          {events.loading ? (
            <Card className="p-8 text-center border border-gray-200">
              <i className="pi pi-spin pi-spinner text-4xl text-green-600 mb-4"></i>
              <p className="text-gray-600 text-lg">Loading events...</p>
            </Card>
          ) : filteredEvents && filteredEvents.length > 0 ? (
            <Card className="border border-gray-200 overflow-hidden">
              <DataTable
                value={filteredEvents.map((event) => ({
                  ...event,
                  parsedDate: dateUtils.parse(event.Date),
                }))}
                rowGroupMode="subheader"
                groupRowsBy="Year"
                rowGroupHeaderTemplate={headerTemplate}
                sortMode="multiple"
                multiSortMeta={[
                  { field: "Year", order: -1 },
                  { field: "parsedDate", order: 1 },
                ]}
                expandableRowGroups
                expandedRows={expandedRows}
                onRowToggle={(e) => setExpandedRows(e.data)}
                stripedRows
                responsiveLayout="scroll"
                className="p-datatable-lg"
                rowClassName={() => "hover:bg-blue-50 transition-colors"}
              >
                <Column
                  field="Event Name"
                  header="Event"
                  className="font-semibold"
                  style={{ minWidth: "200px" }}
                  body={eventNameBodyTemplate}
                />
                <Column
                  field="Status"
                  header="Status"
                  style={{ width: "140px" }}
                  body={statusBodyTemplate}
                />
                <Column
                  field="parsedDate"
                  header="Date"
                  sortable
                  style={{ width: "140px" }}
                  body={formatDate}
                />
                <Column
                  field="Location"
                  header="Location"
                  className="text-gray-700"
                  style={{ minWidth: "150px" }}
                />
                <Column
                  field="Description"
                  header="Description"
                  className="text-gray-600"
                  style={{ minWidth: "250px" }}
                />
                <Column
                  field="Link"
                  header="Details"
                  style={{ width: "110px" }}
                  body={linkBodyTemplate}
                  className="text-center"
                />
              </DataTable>
            </Card>
          ) : (
            <Card className="text-center py-12 border border-gray-200">
              <i className="pi pi-calendar-times text-4xl text-gray-400 mb-4"></i>
              <p className="text-gray-600 text-lg">No events scheduled</p>
              <p className="text-gray-500 text-sm mt-2">Check back soon!</p>
            </Card>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Don't miss any events!
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our WhatsApp community to get real-time notifications about
            all upcoming events, announcements, and opportunities.
          </p>
          <a
            href="https://chat.whatsapp.com/EMtoCcEhDWmHgwGThM3FDK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              label="Join WhatsApp Community"
              icon="pi pi-whatsapp"
              severity="success"
              className="p-button-lg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
