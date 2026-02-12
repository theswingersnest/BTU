import { useState } from "react";
import { Star } from "lucide-react";

const rarities = [
  { label: "Common", color: "bg-purple-400" },
  { label: "Rare", color: "bg-purple-500" },
  { label: "Epic", color: "bg-purple-600" },
  { label: "Legendary", color: "bg-purple-700" },
];

const eventItems = ["Limited Time", "Seasonal"];

export default function ShopSidebar() {
  const [price, setPrice] = useState(400);
  const [selectedRarities, setSelectedRarities] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);

  const toggleRarity = (rarity) => {
    setSelectedRarities((prev) =>
      prev.includes(rarity)
        ? prev.filter((r) => r !== rarity)
        : [...prev, rarity]
    );
  };

  const toggleEvent = (event) => {
    setSelectedEvents((prev) =>
      prev.includes(event)
        ? prev.filter((e) => e !== event)
        : [...prev, event]
    );
  };

  return (
    <div className="bg-gradient-to-b from-[#1c1448] to-[#250c3f] p-6 rounded-xl w-64 text-white space-y-6">
      
      {/* Price Range */}
      <div>
        <h3 className="text-sm font-semibold text-purple-300 mb-2">PRICE RANGE</h3>
        
        <input
          type="range"
          min="0"
          max="1000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full h-2 mt-2 appearance-none bg-gradient-to-r from-purple-400 to-purple-700 rounded-lg outline-none"
        />
        <div className="flex justify-between mt-1 text-sm">
          <div>
            <span>0</span>
            <Star fill="#facc15" strokeWidth={0} />
          </div>
          <span>{price}</span>
          <div>
          <span>1000</span>
          <Star fill="#facc15" strokeWidth={0} />
          </div>
        </div>
      </div>

      {/* Rarity Filters */}
      <div>
        <h3 className="text-sm font-semibold text-purple-300 mb-3">RARITY</h3>
        <div className="space-y-2 text-sm">
          {rarities.map(({ label, color }) => (
            <label key={label} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedRarities.includes(label)}
                onChange={() => toggleRarity(label)}
                className={`form-checkbox w-4 h-4 ${color} rounded-sm`}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Event Items */}
      <div>
        <h3 className="text-sm font-semibold text-purple-300 mb-3">EVENT ITEMS</h3>
        <div className="space-y-2 text-sm">
          {eventItems.map((label) => (
            <label key={label} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedEvents.includes(label)}
                onChange={() => toggleEvent(label)}
                className="form-checkbox w-4 h-4 accent-white rounded-sm"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
