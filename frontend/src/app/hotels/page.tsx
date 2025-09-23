// "use client";
// import { Landing } from "@/components/shared/Landing";
// import { HOTELSDATA } from "@/services/Options";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";

// function page() {
//   const router = useRouter();
//   return (
//     <>
//       <Landing IMAGES={HOTELSDATA.images} />
//       <div className="p-4">
//         <h1 className="text-3xl font-bold text-center font-serif my-5">
//           Hotels
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {HOTELSDATA.hotels.map((hotel, index) => (
//             <div
//               key={index}
//               className="p-4 border rounded-lg shadow-md pb-5 cursor-pointer hover:shadow-lg transition-all hover:scale-105 duration-300 "
//               onClick={() => {
//                 router.push(`/hotels/${hotel.city}`);
//               }}
//             >
//               <Image
//                 src={hotel.hotels[0].image}
//                 alt={hotel.city}
//                 width={500}
//                 height={500}
//                 className="w-full h-48 md:h-72 object-cover"
//               />
//               <h2 className="text-2xl font-bold font-serif text-center mt-5">
//                 {hotel.city}
//               </h2>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default page;



// src/app/hotels/page.tsx
"use client";
import { Landing } from "@/components/shared/Landing";
import { HOTEL_PAGE_IMAGES, ALL_HOTELS } from "@/services/Options";
import { HotelSearchBar } from "./_components/HotelSearchBar";
import { RecommendedHotels } from "./_components/RecommendedHotels";
import { HotelCard } from "./_components/HotelCard";

function HotelsPage() {
  return (
    <div className="relative mt-20">
      <div className="absolute inset-0 bg-white z-0" />
      
      {/* Landing Section */}
      {/* <Landing IMAGES={HOTEL_PAGE_IMAGES} /> */}
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Search Bar Section */}
        <HotelSearchBar />
        
        {/* Recommended Hotels */}
        <RecommendedHotels />
        
        {/* All Hotels List */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">2,847 hotels found</h3>
          <p className="text-gray-500 mb-6">Best prices guaranteed</p>
          
          <div className="flex flex-col">
            {ALL_HOTELS.map((hotel, index) => (
              <HotelCard key={index} hotel={hotel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelsPage;