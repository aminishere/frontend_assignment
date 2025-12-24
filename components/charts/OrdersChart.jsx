import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { ordersChartData } from "@/data/mock";

export default function OrdersChart() {
  return (
    <div className="h-52 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={ordersChartData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9CA3AF" }}
          />

          <YAxis hide />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="last"
            stroke="#E5E7EB"
            strokeWidth={2}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="current"
            stroke="#5A6ACF"
            strokeWidth={2.5}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

