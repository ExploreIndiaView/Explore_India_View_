// "use client";
// import React from "react";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";

// import Image from "next/image";
// import { CarouselImage } from "@/services/types";


// export function Landing({IMAGES} : {IMAGES: CarouselImage[]}) {
//   return (
//     <Carousel
//       plugins={[
//         Autoplay({
//           delay: 3000,
//         }),
//       ]}
//       className="w-full md:h-[550px] rounded-2xl overflow-hidden"
//     >
//       <CarouselContent className="">
//         {IMAGES.map((image, idx) => (
//           <CarouselItem key={idx}>
//             <div className="w-full relative">
//               <Card className="p-0">
//                 <CardContent className="flex aspect-video items-center justify-center p-0 relative">
//                   <div className="absolute top-1/3 text-white font-serif sm:text-2xl md:text-4xl lg:text-5xl text-center font-bold gap-2">
//                     <p className="">Explore, Discover, Travel</p>
//                     <p className="mt-3">{image.content}</p>
//                     {/* <Link href={"/"}>
//                       <Button size={'lg'} className="md:text-xl mt-2 md:mt-5">Discover More</Button>
//                     </Link> */}
//                   </div>
//                   <Image
//                     src={image.image}
//                     alt={image.content}
//                     layout="responsive"
//                     width={600}
//                     height={400}
//                     className="object-cover aspect-video "
//                   />
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//     </Carousel>
//   );
// }



// // src/components/shared/Landing.tsx
// "use client";
// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";
// import { CarouselImage } from "@/services/types";
// import { Button } from "@/components/ui/button";

// export function Landing({IMAGES} : {IMAGES: CarouselImage[]}) {
//   return (
//     <Carousel
//       plugins={[
//         Autoplay({
//           delay: 3000,
//         }),
//       ]}
//       className="w-full h-screen"
//     >
//       <CarouselContent className="">
//         {IMAGES.map((image, idx) => (
//           <CarouselItem key={idx}>
//             <div className="w-full relative h-screen">
//               <Card className="p-0 h-full">
//                 <CardContent className="flex items-center justify-center p-0 relative h-full">
//                   {/* Image with a dark overlay */}
//                   <div className="absolute inset-0 bg-black/40 z-10" />
                  
//                   {/* Text content with a higher z-index to appear on top of the overlay */}
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-serif sm:text-2xl md:text-4xl lg:text-5xl text-center font-bold gap-2 z-20">
//                     <p className="">We Find The Best Tours For You</p>
//                     <p className="mt-3 text-sm md:text-lg lg:text-xl font-normal max-w-2xl mx-auto">
//                       {image.content} {/* CORRECTED: Now displays dynamic content */}
//                     </p>
//                     <div className="flex items-center justify-center mt-5 space-x-4">
//                       <Button size={'lg'} className="bg-teal-500 hover:bg-teal-600 text-white">
//                         Explore Packages
//                       </Button>
//                       <Button size={'lg'} variant="outline" className="text-white border-white">
//                         Book Now
//                       </Button>
//                     </div>
//                   </div>
                  
//                   {/* The image itself */}
//                   <Image
//                     src={image.image}
//                     alt={image.content}
//                     layout="fill"
//                     objectFit="cover"
//                     className="aspect-video"
//                   />
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//     </Carousel>
//   );
// }
// src/components/shared/Landing.tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export function Landing() {
  return (
    <div className="relative w-full h-screen">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/video/Video.mp4" // ✅ Use public folder path
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-20">
        <p className="font-serif font-bold sm:text-2xl md:text-4xl lg:text-5xl">
          We Find The Best Tours For You
        </p>
        <p className="mt-3 text-sm md:text-lg lg:text-xl font-normal max-w-2xl mx-auto">
          We offer experiences that make every trip worthwhile. Discover the royal heritage of India.
        </p>
        <div className="flex items-center justify-center mt-5 space-x-4">
          <Button
            size="lg"
            className="bg-teal-500 hover:bg-teal-600 text-white"
          >
            Explore Packages
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/10"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
