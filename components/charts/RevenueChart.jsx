import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";
import { dashboardStats } from "@/data/mock";
import Button from "@/components/ui/Button";


const data = dashboardStats.revenueSeries;

export default function RevenueChart() {
  return (
    <div className="rounded-sm border bg-white p-5 w-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-gray-500">Revenue</p>
          <p className="text-2xl font-semibold">IDR 7.852.000</p>
          <p className="text-sm text-green-600">↑ 2.1% vs last week</p>
          <p className="text-xs text-gray-400 mt-1">
            Sales from 1–12 Dec, 2020
          </p>
        </div>
        <Button variant="primary">
          View Report
        </Button>
      </div>

      {/* Chart */}
      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={6}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} />
            <YAxis
              yAxisId="left"
              hide
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              hide
            />
            <Tooltip />
            <Bar
              yAxisId="left"
              dataKey="current"
              fill="#4F6BED"
              radius={[4, 4, 0, 0]}
              barSize={8}
            />
            <Bar
              yAxisId="right"
              dataKey="last"
              fill="#E5E7EB"
              radius={[4, 4, 0, 0]}
              barSize={8}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex gap-4 text-sm text-gray-500 mt-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          Last 6 days
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          Last week
        </div>
      </div>
    </div>
  );
}
