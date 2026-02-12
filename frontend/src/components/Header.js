// components/Header.js
export default function Header() {
  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-[#1B1339] px-6 py-4 flex justify-between items-center text-white shadow-md flex-1">
      <h1 className="text-xl font-semibold">Profile & Avatar</h1>
      <div className="space-x-4">
        {["Profile", "Achievements", "Inventory", "Settings"].map((tab) => (
          <button
            key={tab}
            className="px-4 py-2 rounded-md hover:bg-[#3B2063] transition text-sm bg-[#3B2063]/60"
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
