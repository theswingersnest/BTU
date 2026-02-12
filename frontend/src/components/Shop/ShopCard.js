import { Star } from 'lucide-react';

export default function ShopCard({ 
  title = "Cyber Warrior", 
  rarity = "LEGENDARY", 
  rarityColor = "bg-purple-400", 
  price = 100,
  btnColor="bg-gradient-to-r from-purple-500 to-blue-500",
  btnTitle = "Buy Now",
}) {
  return (
    <div className="bg-[#1e0e38] border border-[#A855F74D] text-white p-6 rounded-xl shadow-xl flex flex-col items-center space-y-4">
      <div className="bg-[#A855F733] p-4 rounded-lg border border-[#A855F766]">
        <span className="text-3xl">🤖</span>
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className={`text-xs font-semibold px-4 py-2 rounded-full w-full text-center uppercase ${rarityColor}`}>
        {rarity}
      </div>
      <div className="flex items-center gap-2">
        <Star className="text-yellow-400 w-5 h-5" fill="#facc15" />
        <span className="text-lg font-semibold">{price}</span>
      </div>
      <button className={`w-full text-center text-white px-6 py-2 rounded-lg font-semibold ${btnColor}`}>
        {btnTitle}
      </button>
    </div>
  );
}