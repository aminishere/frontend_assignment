"use client";

import MostOrderedFood from "@/components/cards/MostOrderedFood";
import RevenueChart from "@/components/charts/RevenueChart";
import OrderTimeDonut from "@/components/charts/OrderTimeDonut";
import RatingPieCard from "@/components/cards/RatingPieCard";

import { mostOrderedFood } from "@/data/mock";


export default function Page() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <h3 className="col-span-12 text-2xl font-semibold text-gray-800">
        Dashboard
      </h3>
      {/* Row 1 */}
      <div className="col-span-8">
        <RevenueChart />
      </div>

      <div className="col-span-4">
        <OrderTimeDonut />
      </div>

      {/* Row 2 */}
      
      <div className="col-span-4">
        <RatingPieCard />
      </div>

      <div className="col-span-4">
        <MostOrderedFood items={mostOrderedFood} />
      </div>

      <div className="col-span-4">
  
        noo
      </div>

  

    </div>
  );
}
