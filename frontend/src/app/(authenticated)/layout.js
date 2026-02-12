import RootHeader from "@/components/RootHeader.js";

export default function AuthenticatedLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0A0F1C]">
      <RootHeader />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
} 