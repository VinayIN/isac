"use client";

import { useMarkdown } from "../../lib/markdown";
import ReactMarkdown from "react-markdown";

export default function ResourceContent({ config }) {
  const markdown = useMarkdown(`/markdown/${config.file}`);

  if (!markdown) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    );
  }

  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}