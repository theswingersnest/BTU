export default function Card({ title, settings = [] }) {
  return (
    <div className="font-poppins rounded-2xl shadow-lg text-white overflow-hidden mb-10">
      <div className="bg-[#9D4EDD4D] p-6">
        <h1>{title}</h1>
      </div>
      <div className="bg-[#3E0F5C] px-6">
        {settings.map((setting, index) => (
          <div key={index}>
            <div className="flex justify-between items-center py-6 gap-4">
              <div>
                <p>{setting.title}</p>
                <p className="text-sm text-white/40">
                  {setting.description}
                </p>
              </div>
              <div>
                {setting.rightComponent}
              </div>
            </div>
            <hr className="border-white/10" />
          </div>
        ))}
      </div>
    </div>
  );
}
