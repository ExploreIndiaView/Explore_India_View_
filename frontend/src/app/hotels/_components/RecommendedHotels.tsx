// src/app/hotels/_components/RecommendedHotels.tsx
"use client";
import { RECOMMENDED_HOTELS } from "@/services/Options";
import { RecommendedHotel } from "@/services/types";
import Image from "next/image";
import { Star, Wifi, Droplet, Dumbbell, Utensils, Home, Sun, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const amenityIcons: any = {
  wifi: <Wifi className="size-4 text-gray-500" />,
  pool: <Droplet className="size-4 text-gray-500" />,
  gym: <Dumbbell className="size-4 text-gray-500" />,
  restaurant: <Utensils className="size-4 text-gray-500" />,
  heritage: <Home className="size-4 text-gray-500" />,
  beach: <Sun className="size-4 text-gray-500" />,
};

export function RecommendedHotels() {
  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold mb-4">Recommended for You</h3>
      <p className="text-gray-500 mb-6">Handpicked hotels based on your preferences</p>
      
      <div className="flex space-x-4 overflow-x-auto p-4 hide-scrollbar">
        {RECOMMENDED_HOTELS.map((hotel: RecommendedHotel, index: number) => (
          <div key={index} className="flex-none w-80 relative rounded-lg overflow-hidden shadow-lg">
            <Image src={hotel.image} alt={hotel.name} width={320} height={200} className="object-cover h-48 w-full" />
            <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              {hotel.discount} OFF
            </div>
            <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              {hotel.type}
            </div>
            
            <div className="p-4 bg-white">
              <h4 className="font-bold text-lg">{hotel.name}</h4>
              <p className="text-sm text-gray-500 flex items-center mb-2">
                <Star className="size-4 text-yellow-400 mr-1" />
                {hotel.rating} ({hotel.reviews} reviews)
              </p>
              
              <div className="flex space-x-2 mb-2">
                {Object.entries(hotel.amenities).map(([amenity, has]) => (
                  has && amenityIcons[amenity]
                ))}
              </div>
              
              <p className="text-xl font-bold">
                ₹{hotel.price} <span className="text-sm text-gray-400 line-through">₹{hotel.originalPrice}</span>
              </p>
              <p className="text-xs text-gray-500">per night, incl. taxes</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}