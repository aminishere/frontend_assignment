"use client";

import MostOrderedFood from "@/components/cards/MostOrderedFood";
import RevenueChart from "@/components/charts/RevenueChart";
import OrderTimeDonut from "@/components/charts/OrderTimeDonut";
import RatingPieCard from "@/components/cards/RatingPieCard";


import { mostOrderedFood } from "@/data/mock";
import OrdersCard from "@/components/cards/OrdersCard";


export default function Page() {
  return (
    <div className="grid grid-cols-12 gap-0.1 bg-white rounded-lg p-6 min-h-screen">
      <h3 className="col-span-12 text-2xl font-semibold text-gray-800">
        Dashboard
      </h3>
      {/* Row 1 */}
      <div className="col-span-8 pb-4 border-b border-gray-200">
        <RevenueChart />
      </div>

      <div className="col-span-4 pb-4 border-b border-gray-200">
        <OrderTimeDonut />
      </div>

      {/* Row 2 */}
      
      <div className="col-span-4 border-r border-gray-200">
        <RatingPieCard />
      </div>

      <div className="col-span-4 border-r border-gray-200">
        <MostOrderedFood items={mostOrderedFood} />
      </div>

      <div className="col-span-4">
      <OrdersCard />
      </div>

  

    </div>
  );
}
