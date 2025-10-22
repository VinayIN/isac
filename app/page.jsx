import Hero from "./components/hero";

export const metadata = {
  title: "Home",
  description:
    "ISAC is a vibrant community of Indian students at BTU Cottbus-Senftenberg. Explore events, resources, and ways to get involved.",
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* Add more home content here */}
    </main>
  );
}
