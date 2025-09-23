// src/app/hotels/_components/HotelCard.tsx
import { AllHotel } from "@/services/types";
import Image from "next/image";
import { Star, Wifi, Droplet, Dumbbell, Utensils, Home, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const amenityIcons: any = {
  wifi: <Wifi className="size-4 text-gray-500" />,
  pool: <Droplet className="size-4 text-gray-500" />,
  gym: <Dumbbell className="size-4 text-gray-500" />,
  restaurant: <Utensils className="size-4 text-gray-500" />,
  heritage: <Home className="size-4 text-gray-500" />,
  beach: <Sun className="size-4 text-gray-500" />,
};

export function HotelCard({ hotel }: { hotel: AllHotel }) {
  return (
    <div className="flex border rounded-lg shadow-md p-4 space-x-4 mb-4">
      <Image src={hotel.image} alt={hotel.name} width={200} height={150} className="rounded-lg object-cover" />
      
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-bold text-lg">{hotel.name}</h4>
          <p className="text-sm text-gray-500">{hotel.location}</p>
          <p className="text-xs text-gray-400 mb-2">{hotel.distance}</p>
          
          <div className="flex space-x-2 my-2">
            {Object.entries(hotel.amenities).map(([amenity, has]) => (
              has && (
                <div key={amenity} className="flex items-center text-xs">
                  {amenityIcons[amenity]}
                  <span className="ml-1 capitalize">{amenity}</span>
                </div>
              )
            ))}
          </div>
        </div>
        
        <p className="text-sm text-green-600 font-semibold">{hotel.cancellation}</p>
      </div>
      
      <div className="flex flex-col items-end justify-between text-right">
        <div>
          <p className="text-sm flex items-center mb-1">
            <span className="font-bold mr-1">{hotel.rating}</span>
            <Star className="size-4 text-yellow-400" />
            <span className="text-xs text-gray-500 ml-1">({hotel.reviews})</span>
          </p>
          <p className="text-gray-400 text-xs">per night, incl. taxes</p>
          <p className="text-xl font-bold mt-1">₹{hotel.price}</p>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="outline">View Details</Button>
          <Button>Book Now</Button>
        </div>
      </div>
    </div>
  );
}