export default function NutritionCard({ title, description, children }) {
  return (
    <div className="rounded-2xl shadow-md border border-gray-100 p-4 lg:px-6 lg:pt-6 lg:pb-0 flex flex-col gap-4 bg-[#CDF87F52]/30 card_dropShadow backdrop-blur-[160px]">
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="peraText max-w-md">{description}</p>
      <div className="flex-1">{children}</div>
    </div>
  );
}

