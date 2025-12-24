import React from "react";
import Card from "@/components/ui/Card";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#7C7BE6", "#FFA640", "#37C6E6"];

const defaultData = [
  { name: "Hygiene", value: 85 },
  { name: "Food Taste", value: 85 },
  { name: "Packaging", value: 92 },
];

const CircleLabel = ({ cx, cy, value, name }) => (
  <>
    <text
      x={cx}
      y={cy - 4}
      textAnchor="middle"
      fill="#fff"
      fontSize="20"
      fontWeight="500"
    >
      {value}%
    </text>
    <text
      x={cx}
      y={cy + 16}
      textAnchor="middle"
      fill="#fff"
      fontSize="11"
      fontWeight="400"
    >
      {name}
    </text>
  </>
);

const RatingCircle = ({ value, name, color, size }) => (
  <PieChart width={size} height={size}>
    {/* Filled Circle */}
    <Pie
      data={[{ value }]}
      dataKey="value"
      cx="50%"
      cy="50%"
      innerRadius={size / 2.8}
      outerRadius={size / 2.2}
      startAngle={90}
      endAngle={-270}
      stroke="none"
      label={(props) => CircleLabel({ ...props, value, name })}
      labelLine={false}
    >
      <Cell fill={color} />
    </Pie>

    {/* Outer Solid Border */}
    <Pie
      data={[{ value: 100 }]}
      dataKey="value"
      cx="50%"
      cy="50%"
      innerRadius={size / 2.05}
      outerRadius={size / 1.95}
      startAngle={0}
      endAngle={360}
      fill="none"
      stroke="#fff"
      strokeWidth={2}
    />
  </PieChart>
);

const RatingPieCard = ({ data = defaultData }) => {
  return (
    <Card className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <div className="text-sm font-medium text-gray-700 pt-5">
          Your Rating
        </div>
        <span className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet, consectetur
        </span>
      </div>

      {/* Pie Circles Container */}
      <div className="relative flex-1 flex items-center justify-center">
        <div className="relative w-64 h-64">
          <div className="absolute top-0 left-0">
            <RatingCircle
              value={data[0].value}
              name={data[0].name}
              color={COLORS[0]}
              size={120}
            />
          </div>

          <div className="absolute top-16 right-0">
            <RatingCircle
              value={data[1].value}
              name={data[1].name}
              color={COLORS[1]}
              size={140}
            />
          </div>

          <div className="absolute bottom-0 left-6">
            <RatingCircle
              value={data[2].value}
              name={data[2].name}
              color={COLORS[2]}
              size={120}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RatingPieCard;
