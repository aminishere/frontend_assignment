import OrdersChart from "@/components/charts/OrdersChart";
import Button from "@/components/ui/Button";

export default function OrdersCard() {
  return (
    <div className="bg-white p-5">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-sm text-gray-500">Order</p>
          <p className="text-2xl font-semibold">2.568</p>
          <p className="text-sm text-red-600">
            ↓ 2.1% <span className="text-gray-400">vs last week</span>
          </p>
        </div>

        <Button variant="primary" className="px-3 py-1 text-sm">
          View Report
        </Button>
      </div>

    
      <p className="text-xs text-gray-400 mb-4">
        Sales from 1–6 Dec, 2020
      </p>

      {/* Chart */}
      <OrdersChart />

      {/* Legend */}
      <div className="mt-4 flex gap-6 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#5A6ACF]" />
          Last 6 days
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          Last Week
        </div>
      </div>
    </div>
  );
}
