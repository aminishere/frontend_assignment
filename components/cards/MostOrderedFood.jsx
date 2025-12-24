import Card from "@/components/ui/Card";

export default function MostOrderedFood({ items }) {
  return (
    <Card className="h-full flex flex-col">
      <div className="mb-4">
        <div className="text-sm font-semibold text-gray-700 pt-5">
          Most Ordered Food
        </div>
        <span className="text-sm text-gray-400">
          Adipiscing elit, sed do eiusmod tempor
        </span>
      </div>

      <ul className="flex-1 flex flex-col justify-evenly">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between py-3 text-sm border-b border-gray-200 last:border-b-0"
          >
            {/* left: pfp + name */}
            <div className="flex items-center gap-3">
              <img
                src={`https://i.pravatar.cc/40?img=${index + 10}`}
                alt={item.name}
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-gray-700 text-sm">{item.name}</span>
            </div>

            {/* right: IDR + value */}
            <div className="flex items-baseline gap-1 text-gray-400">
              <span className="text-xs">IDR</span>
              <span className="font-medium text-gray-600">
                {item.count.toFixed(3)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
