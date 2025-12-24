import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const data = [
  { name: 'Afternoon', value: 40, time: '1pm - 4pm' },
  { name: 'Evening', value: 32, time: '4pm - 8pm' },
  { name: 'Morning', value: 28, time: '8am - 12pm' },
];

const COLORS = ['#4C4BD6', '#8884D8', '#B0B0F0'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value, time } = payload[0].payload;
    return (
      <div className="bg-gray-800 text-white p-2 rounded text-xs">
        <div className="font-semibold">{name}</div>
        <div className="text-gray-300">{time}</div>
        <div className="font-bold mt-1">{value.toLocaleString()} orders</div>
      </div>
    );
  }
  return null;
};

const OrderTimeDonut = () => {
  return (
    <Card className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-semibold text-gray-700 pt-5">Order Time</p>
          <p className="text-xs text-gray-400">From 1-6 Dec, 2020</p>
        </div>
        <Button variant="primary">
          View Report
        </Button>
      </div>

      {/* Chart */}
      <div className="h-48 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={3}
              label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex justify-between gap-2 text-xs text-gray-600 mt-4 pt-4 border-t border-gray-100">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[index] }} />
            <span>{entry.name}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-400 mt-2">From 1-6 Dec, 2020</div>
    </Card>
  );
};

export default OrderTimeDonut;
