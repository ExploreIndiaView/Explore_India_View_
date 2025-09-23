// // // // src/app/packages/[packageId]/page.tsx
// // // "use client";
// // // import React, { useEffect, useState } from "react";
// // // import { useParams } from "next/navigation";
// // // import { PACKAGES, LAST_MINUTE_DEALS } from "@/services/Options";
// // // import { PACKAGETYPE } from "@/services/types";
// // // import { Star, CheckCircle, XCircle, Tag, MapPin } from "lucide-react";
// // // import Image from "next/image";
// // // import { Button } from "@/components/ui/button";
// // // import {
// // //   Accordion,
// // //   AccordionContent,
// // //   AccordionItem,
// // //   AccordionTrigger,
// // // } from "@/components/ui/accordion";
// // // import { Card, CardContent } from "@/components/ui/card";
// // // import {
// // //   Carousel,
// // //   CarouselContent,
// // //   CarouselItem,
// // //   CarouselPrevious,
// // //   CarouselNext,
// // // } from "@/components/ui/carousel";
// // // import Autoplay from "embla-carousel-autoplay";

// // // const LastMinuteDealCard = ({ deal }: { deal: any }) => (
// // //   <Card className="p-4 flex items-center space-x-4 bg-gray-50 rounded-lg shadow-md">
// // //     <Image
// // //       src={deal.image}
// // //       alt={deal.title}
// // //       width={80}
// // //       height={80}
// // //       className="rounded-md object-cover"
// // //     />
// // //     <div>
// // //       <h4 className="font-bold">{deal.title}</h4>
// // //       <p className="text-sm text-gray-600">{deal.description}</p>
// // //       <div className="flex items-center space-x-1 mt-1">
// // //         <Star className="size-4 text-yellow-400 fill-current" />
// // //         <span className="text-sm text-gray-500">{deal.reviews}</span>
// // //       </div>
// // //     </div>
// // //   </Card>
// // // );

// // // function PackageDetail() {
// // //   const { packageId } = useParams();
// // //   const [Package, setPackage] = useState<PACKAGETYPE | null>(null);

// // //   useEffect(() => {
// // //     const foundPackage = PACKAGES.find((pack) => pack.__id === packageId);
// // //     if (foundPackage) {
// // //       setPackage(foundPackage);
// // //     }
// // //   }, [packageId]);

// // //   if (!Package) {
// // //     return <div className="text-center py-16">Package not found.</div>;
// // //   }

// // //   return (
// // //     <div className="mt-20">
// // //       {/* Landing Section with Carousel */}
// // //       <div className="w-full h-[500px] relative">
// // //         <Carousel plugins={[Autoplay({ delay: 3000 })]} className="w-full h-full">
// // //           <CarouselContent className="h-full">
// // //             {Package.highlightsImages?.map((img, idx) => (
// // //               <CarouselItem key={idx} className="h-full">
// // //                 <div className="w-full h-full relative">
// // //                   <Image
// // //                     src={img.image}
// // //                     alt={img.content}
// // //                     layout="fill"
// // //                     objectFit="cover"
// // //                   />
// // //                   <div className="absolute inset-0 bg-black/40" />
// // //                   <div className="relative z-10 flex flex-col items-start justify-end p-16 h-full text-white">
// // //                     <h1 className="text-5xl md:text-6xl font-bold font-serif mb-2">
// // //                       {Package.name}
// // //                     </h1>
// // //                     <p className="text-lg">{img.content}</p>
// // //                   </div>
// // //                 </div>
// // //               </CarouselItem>
// // //             ))}
// // //           </CarouselContent>
// // //           <CarouselPrevious className="absolute left-4 z-20" />
// // //           <CarouselNext className="absolute right-4 z-20" />
// // //         </Carousel>
// // //       </div>

// // //       <div className="container mx-auto p-4 md:p-8">
// // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // //           {/* Main Content Column */}
// // //           <div className="lg:col-span-2">
// // //             {/* Overview Section */}
// // //             {Package.Overview && Package.Overview.length > 0 && (
// // //               <div className="mb-8">
// // //                 <h2 className="text-3xl font-bold mb-4">Overview</h2>
// // //                 {Package.Overview.map((text, index) => (
// // //                   <p key={index} className="text-gray-600 mb-4">
// // //                     {text}
// // //                   </p>
// // //                 ))}
// // //               </div>
// // //             )}

// // //             {/* Highlights Section */}
// // //             {Package.Highlights && Package.Highlights.length > 0 && (
// // //               <div className="mb-8">
// // //                 <h2 className="text-3xl font-bold mb-4">Highlights</h2>
// // //                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                   {Package.Highlights.map((highlight, index) => (
// // //                     <li
// // //                       key={index}
// // //                       className="flex items-center text-gray-700"
// // //                     >
// // //                       <Star className="size-5 text-teal-500 mr-2" />
// // //                       {highlight}
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             )}

// // //             {/* Included / Excluded Section */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
// // //               {Package.Inclusion && Package.Inclusion.length > 0 && (
// // //                 <div className="p-6 bg-green-50 rounded-lg">
// // //                   <h3 className="text-xl font-bold mb-4 text-green-700">
// // //                     Included
// // //                   </h3>
// // //                   <ul className="space-y-2">
// // //                     {Package.Inclusion.map((item, index) => (
// // //                       <li
// // //                         key={index}
// // //                         className="flex items-center text-green-600 text-sm"
// // //                       >
// // //                         <CheckCircle className="size-4 mr-2" />
// // //                         {item}
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //               )}
// // //               {Package.Exclusion && Package.Exclusion.length > 0 && (
// // //                 <div className="p-6 bg-red-50 rounded-lg">
// // //                   <h3 className="text-xl font-bold mb-4 text-red-700">
// // //                     Excluded
// // //                   </h3>
// // //                   <ul className="space-y-2">
// // //                     {Package.Exclusion.map((item, index) => (
// // //                       <li
// // //                         key={index}
// // //                         className="flex items-center text-red-600 text-sm"
// // //                       >
// // //                         <XCircle className="size-4 mr-2" />
// // //                         {item}
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //               )}
// // //             </div>

// // //             {/* Itinerary Accordion */}
// // //             {Package.Itinerary && Package.Itinerary.length > 0 && (
// // //               <div className="mb-8">
// // //                 <h2 className="text-3xl font-bold mb-4">Tour Plan</h2>
// // //                 <Accordion type="single" collapsible className="w-full">
// // //                   {Package.Itinerary.map((day, index) => (
// // //                     <AccordionItem
// // //                       key={index}
// // //                       value={`item-${index}`}
// // //                       className="border-b"
// // //                     >
// // //                       <AccordionTrigger className="text-lg font-semibold text-gray-800">
// // //                         <MapPin className="size-5 text-blue-500 mr-2" />
// // //                         Day {index + 1}: {day.name}
// // //                       </AccordionTrigger>
// // //                       {/* Using children OR dangerouslySetInnerHTML - here you can choose either */}
// // //                       {/* Example with children - safer than dangerouslySetInnerHTML */}
// // //                       <AccordionContent className="p-4 text-gray-600">
// // //                         <span>{day.description}</span>
// // //                       </AccordionContent>
// // //                       {/* Or if you need raw HTML uncomment below and comment above */}
// // //                       {/* <AccordionContent className="p-4 text-gray-600" dangerouslySetInnerHTML={{ __html: day.description || "" }} /> */}
// // //                     </AccordionItem>
// // //                   ))}
// // //                 </Accordion>
// // //               </div>
// // //             )}

// // //             {/* FAQs Section */}
// // //             {Package.FAQs && Package.FAQs.length > 0 && (
// // //               <div className="mb-8">
// // //                 <h2 className="text-3xl font-bold mb-4">FAQs</h2>
// // //                 <Accordion type="single" collapsible className="w-full">
// // //                   {Package.FAQs.map((faq, index) => (
// // //                     <AccordionItem
// // //                       key={index}
// // //                       value={`faq-${index}`}
// // //                       className="border-b"
// // //                     >
// // //                       <AccordionTrigger className="text-lg font-semibold text-gray-800">
// // //                         {faq.name}
// // //                       </AccordionTrigger>
// // //                       <AccordionContent className="p-4 text-gray-600">
// // //                         <span>{faq.description}</span>
// // //                       </AccordionContent>
// // //                       {/* Or if you need raw HTML uncomment below and comment above */}
// // //                       {/* <AccordionContent className="p-4 text-gray-600" dangerouslySetInnerHTML={{ __html: faq.description || "" }} /> */}
// // //                     </AccordionItem>
// // //                   ))}
// // //                 </Accordion>
// // //               </div>
// // //             )}
// // //           </div>

// // //           {/* Sidebar Column */}
// // //           <div className="lg:col-span-1">
// // //             {/* Booking Card */}
// // //             <div className="sticky top-20">
// // //               <Card className="p-6 shadow-xl rounded-lg">
// // //                 <CardContent className="flex flex-col space-y-4">
// // //                   <h3 className="text-2xl font-bold mb-4">Book This Tour</h3>
// // //                   {/* Your booking form elements go here */}
// // //                   <div className="flex flex-col space-y-2">
// // //                     <label className="font-semibold">From</label>
// // //                     <input type="date" className="p-2 border rounded-md" />
// // //                   </div>
// // //                   <div className="flex flex-col space-y-2">
// // //                     <label className="font-semibold">Guests</label>
// // //                     <input
// // //                       type="number"
// // //                       placeholder="e.g., 2 adults"
// // //                       className="p-2 border rounded-md"
// // //                     />
// // //                   </div>
// // //                   <Button className="w-full">Book Now</Button>
// // //                 </CardContent>
// // //               </Card>

// // //               {/* Last Minute Deals */}
// // //               <div className="mt-8">
// // //                 <h3 className="text-xl font-bold mb-4">Last Minute Deals</h3>
// // //                 <Carousel
// // //                   plugins={[Autoplay({ delay: 4000 })]}
// // //                   className="w-full"
// // //                   orientation="vertical"
// // //                 >
// // //                   <CarouselContent className="h-[300px]">
// // //                     {LAST_MINUTE_DEALS.map((deal, index) => (
// // //                       <CarouselItem key={index} className="basis-1/3">
// // //                         <LastMinuteDealCard deal={deal} />
// // //                       </CarouselItem>
// // //                     ))}
// // //                   </CarouselContent>
// // //                 </Carousel>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       {/* <Footer /> */}
// // //     </div>
// // //   );
// // // }

// // // export default PackageDetail;




// // // src/app/packages/[packageId]/page.tsx
// // "use client";
// // import React, { useEffect, useState } from "react";
// // import { useParams } from "next/navigation";
// // import { PACKAGES, LAST_MINUTE_DEALS } from "@/services/Options";
// // import { PACKAGETYPE } from "@/services/types";
// // import { Star, CheckCircle, XCircle, Tag, MapPin, Clock, Users, BadgeInfo } from "lucide-react";
// // import Image from "next/image";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Accordion,
// //   AccordionContent,
// //   AccordionItem,
// //   AccordionTrigger,
// // } from "@/components/ui/accordion";
// // import { Card, CardContent } from "@/components/ui/card";
// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// //   CarouselPrevious,
// //   CarouselNext,
// // } from "@/components/ui/carousel";
// // import Autoplay from "embla-carousel-autoplay";

// // const LastMinuteDealCard = ({ deal }: { deal: any }) => (
// //   <Card className="p-4 flex items-center space-x-4 bg-gray-50 rounded-lg shadow-md">
// //     <Image
// //       src={deal.image}
// //       alt={deal.title}
// //       width={80}
// //       height={80}
// //       className="rounded-md object-cover"
// //     />
// //     <div>
// //       <h4 className="font-bold">{deal.title}</h4>
// //       <p className="text-sm text-gray-600">{deal.description}</p>
// //       <div className="flex items-center space-x-1 mt-1">
// //         <Star className="size-4 text-yellow-400 fill-current" />
// //         <span className="text-sm text-gray-500">{deal.reviews}</span>
// //       </div>
// //     </div>
// //   </Card>
// // );

// // function PackageDetail() {
// //   const { packageId } = useParams();
// //   const [Package, setPackage] = useState<PACKAGETYPE | null>(null);

// //   useEffect(() => {
// //     const foundPackage = PACKAGES.find((pack) => pack.__id === packageId);
// //     if (foundPackage) {
// //       setPackage(foundPackage);
// //     }
// //   }, [packageId]);

// //   if (!Package) {
// //     return <div className="text-center py-16">Package not found.</div>;
// //   }

// //   return (
// //     <div className="mt-20">
// //       <div className="container mx-auto p-4 md:p-8">
// //         {/* Tour Title and Subtitle Section */}
// //         <div className="mb-4">
// //           <h1 className="text-4xl md:text-5xl font-bold font-serif mb-2">
// //             {Package.name}
// //           </h1>
// //           <p className="text-lg text-gray-600">{Package.subTitle}</p>
// //         </div>

// //         {/* Image Carousel Section (Horizontal) */}
// //         <div className="w-full relative mb-8">
// //           <Carousel
// //             plugins={[Autoplay({ delay: 3000, loop: true })]}
// //             className="w-full"
// //           >
// //             <CarouselContent className="-ml-1">
// //               {Package.highlightsImages?.map((img, idx) => (
// //                 <CarouselItem key={idx} className="pl-1 md:basis-1/2 lg:basis-1/3">
// //                   <div className="p-1">
// //                     <div className="relative h-[300px] w-full">
// //                       <Image
// //                         src={img.image}
// //                         alt={img.content}
// //                         layout="fill"
// //                         objectFit="cover"
// //                         className="rounded-lg shadow-md"
// //                       />
// //                     </div>
// //                   </div>
// //                 </CarouselItem>
// //               ))}
// //             </CarouselContent>
// //             <CarouselPrevious className="absolute left-4 z-20" />
// //             <CarouselNext className="absolute right-4 z-20" />
// //           </Carousel>
// //         </div>

// //         {/* Information Bar */}
// //         <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between flex-wrap mb-8">
// //           <div className="flex items-center space-x-4">
// //             <Button>Book it Now</Button>
// //             <div className="flex items-center text-gray-600">
// //               <Clock className="size-5 mr-2" />
// //               <span>{Package.duration}</span>
// //             </div>
// //             <div className="flex items-center text-gray-600">
// //               <Users className="size-5 mr-2" />
// //               <span>Max People: {Package.maxPeople}</span>
// //             </div>
// //             <div className="flex items-center text-gray-600">
// //               <BadgeInfo className="size-5 mr-2" />
// //               <span>Min Age: {Package.minAge}</span>
// //             </div>
// //             <div className="flex items-center text-gray-600">
// //               <Tag className="size-5 mr-2" />
// //               <span>Tour Type: {Package.tourType}</span>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //           {/* Main Content Column */}
// //           <div className="lg:col-span-2">
// //             {/* Overview Section */}
// //             {Package.Overview && Package.Overview.length > 0 && (
// //               <div className="mb-8">
// //                 <h2 className="text-3xl font-bold mb-4">Overview</h2>
// //                 {Package.Overview.map((text, index) => (
// //                   <p key={index} className="text-gray-600 mb-4">
// //                     {text}
// //                   </p>
// //                 ))}
// //               </div>
// //             )}

// //             {/* Highlights Section */}
// //             {Package.Highlights && Package.Highlights.length > 0 && (
// //               <div className="mb-8">
// //                 <h2 className="text-3xl font-bold mb-4">Highlights</h2>
// //                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                   {Package.Highlights.map((highlight, index) => (
// //                     <li
// //                       key={index}
// //                       className="flex items-center text-gray-700"
// //                     >
// //                       <Star className="size-5 text-teal-500 mr-2" />
// //                       {highlight}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             )}

// //             {/* Included / Excluded Section */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
// //               {Package.Inclusion && Package.Inclusion.length > 0 && (
// //                 <div className="p-6 bg-green-50 rounded-lg">
// //                   <h3 className="text-xl font-bold mb-4 text-green-700">
// //                     Included
// //                   </h3>
// //                   <ul className="space-y-2">
// //                     {Package.Inclusion.map((item, index) => (
// //                       <li
// //                         key={index}
// //                         className="flex items-center text-green-600 text-sm"
// //                       >
// //                         <CheckCircle className="size-4 mr-2" />
// //                         {item}
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               )}
// //               {Package.Exclusion && Package.Exclusion.length > 0 && (
// //                 <div className="p-6 bg-red-50 rounded-lg">
// //                   <h3 className="text-xl font-bold mb-4 text-red-700">
// //                     Excluded
// //                   </h3>
// //                   <ul className="space-y-2">
// //                     {Package.Exclusion.map((item, index) => (
// //                       <li
// //                         key={index}
// //                         className="flex items-center text-red-600 text-sm"
// //                       >
// //                         <XCircle className="size-4 mr-2" />
// //                         {item}
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               )}
// //             </div>

// //             {/* Itinerary Accordion */}
// //             {Package.Itinerary && Package.Itinerary.length > 0 && (
// //               <div className="mb-8">
// //                 <h2 className="text-3xl font-bold mb-4">Tour Plan</h2>
// //                 <Accordion type="single" collapsible className="w-full">
// //                   {Package.Itinerary.map((day, index) => (
// //                     <AccordionItem
// //                       key={index}
// //                       value={`item-${index}`}
// //                       className="border-b"
// //                     >
// //                       <AccordionTrigger className="text-lg font-semibold text-gray-800">
// //                         <MapPin className="size-5 text-blue-500 mr-2" />
// //                         Day {index + 1}: {day.name}
// //                       </AccordionTrigger>
// //                       <AccordionContent className="p-4 text-gray-600">
// //                         <span>{day.description}</span>
// //                       </AccordionContent>
// //                     </AccordionItem>
// //                   ))}
// //                 </Accordion>
// //               </div>
// //             )}

// //             {/* FAQs Section */}
// //             {Package.FAQs && Package.FAQs.length > 0 && (
// //               <div className="mb-8">
// //                 <h2 className="text-3xl font-bold mb-4">FAQs</h2>
// //                 <Accordion type="single" collapsible className="w-full">
// //                   {Package.FAQs.map((faq, index) => (
// //                     <AccordionItem
// //                       key={index}
// //                       value={`faq-${index}`}
// //                       className="border-b"
// //                     >
// //                       <AccordionTrigger className="text-lg font-semibold text-gray-800">
// //                         {faq.name}
// //                       </AccordionTrigger>
// //                       <AccordionContent className="p-4 text-gray-600">
// //                         <span>{faq.description}</span>
// //                       </AccordionContent>
// //                     </AccordionItem>
// //                   ))}
// //                 </Accordion>
// //               </div>
// //             )}
// //           </div>

// //           {/* Sidebar Column */}
// //           <div className="lg:col-span-1">
// //             {/* Booking Card */}
// //             <div className="sticky top-20">
// //               <Card className="p-6 shadow-xl rounded-lg">
// //                 <CardContent className="flex flex-col space-y-4">
// //                   <h3 className="text-2xl font-bold mb-4">Book This Tour</h3>
// //                   <div className="flex flex-col space-y-2">
// //                     <label className="font-semibold">From</label>
// //                     <input type="date" className="p-2 border rounded-md" />
// //                   </div>
// //                   <div className="flex flex-col space-y-2">
// //                     <label className="font-semibold">Guests</label>
// //                     <input
// //                       type="number"
// //                       placeholder="e.g., 2 adults"
// //                       className="p-2 border rounded-md"
// //                     />
// //                   </div>
// //                   <Button className="w-full">Book Now</Button>
// //                 </CardContent>
// //               </Card>

// //               {/* Last Minute Deals */}
// //               <div className="mt-8">
// //                 <h3 className="text-xl font-bold mb-4">Last Minute Deals</h3>
// //                 <Carousel
// //                   plugins={[Autoplay({ delay: 4000 })]}
// //                   className="w-full"
// //                   orientation="vertical"
// //                 >
// //                   <CarouselContent className="h-[300px]">
// //                     {LAST_MINUTE_DEALS.map((deal, index) => (
// //                       <CarouselItem key={index} className="basis-1/3">
// //                         <LastMinuteDealCard deal={deal} />
// //                       </CarouselItem>
// //                     ))}
// //                   </CarouselContent>
// //                 </Carousel>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default PackageDetail;





// // src/app/packages/[packageId]/page.tsx
// "use client";
// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { PACKAGES, LAST_MINUTE_DEALS } from "@/services/Options";
// import { PACKAGETYPE } from "@/services/types";
// import { Star, CheckCircle, XCircle, Tag, MapPin, Clock, Users, BadgeInfo } from "lucide-react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import dynamic from 'next/dynamic';
// import PlaceCard from "@/components/shared/PlaceCard";

// // Dynamic import for the map to prevent SSR issues
// const RajasthanMap = dynamic(() => import('@/components/shared/Maps'), {
//   ssr: false,
// });

// const LastMinuteDealCard = ({ deal }: { deal: any }) => (
//   <Card className="p-4 flex items-center space-x-4 bg-gray-50 rounded-lg shadow-md">
//     <Image
//       src={deal.image}
//       alt={deal.title}
//       width={80}
//       height={80}
//       className="rounded-md object-cover"
//     />
//     <div>
//       <h4 className="font-bold">{deal.title}</h4>
//       <p className="text-sm text-gray-600">{deal.description}</p>
//       <div className="flex items-center space-x-1 mt-1">
//         <Star className="size-4 text-yellow-400 fill-current" />
//         <span className="text-sm text-gray-500">{deal.reviews}</span>
//       </div>
//     </div>
//   </Card>
// );

// function PackageDetail() {
//   const { packageId } = useParams();
//   const [Package, setPackage] = useState<PACKAGETYPE | null>(null);
//   const otherPackages = PACKAGES.filter(p => p.__id !== packageId);

//   useEffect(() => {
//     const foundPackage = PACKAGES.find((pack) => pack.__id === packageId);
//     if (foundPackage) {
//       setPackage(foundPackage);
//     }
//   }, [packageId]);

//   if (!Package) {
//     return <div className="text-center py-16">Package not found.</div>;
//   }

//   return (
//     <div className="mt-20">
//       <div className="container mx-auto p-4 md:p-8">
//         {/* Tour Title and Subtitle Section */}
//         <div className="mb-4">
//           <h1 className="text-4xl md:text-5xl font-bold font-serif mb-2">
//             {Package.name}
//           </h1>
//           <p className="text-lg text-gray-600">{Package.subTitle}</p>
//         </div>

//         {/* Image Carousel Section (Horizontal) */}
//         <div className="w-full relative mb-8">
//           <Carousel
//             plugins={[Autoplay({ delay: 3000, loop: true })]}
//             className="w-full"
//           >
//             <CarouselContent className="-ml-1">
//               {Package.highlightsImages?.map((img, idx) => (
//                 <CarouselItem key={idx} className="pl-1 md:basis-1/2 lg:basis-1/3">
//                   <div className="p-1">
//                     <div className="relative h-[300px] w-full">
//                       <Image
//                         src={img.image}
//                         alt={img.content}
//                         layout="fill"
//                         objectFit="cover"
//                         className="rounded-lg shadow-md"
//                       />
//                     </div>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselPrevious className="absolute left-4 z-20" />
//             <CarouselNext className="absolute right-4 z-20" />
//           </Carousel>
//         </div>

//         {/* Information Bar */}
//         <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between flex-wrap mb-8">
//           <div className="flex items-center space-x-4">
//             <Button>Book it Now</Button>
//             <div className="flex items-center text-gray-600">
//               <Clock className="size-5 mr-2" />
//               <span>{Package.duration}</span>
//             </div>
//             <div className="flex items-center text-gray-600">
//               <Users className="size-5 mr-2" />
//               <span>Max People: {Package.maxPeople}</span>
//             </div>
//             <div className="flex items-center text-gray-600">
//               <BadgeInfo className="size-5 mr-2" />
//               <span>Min Age: {Package.minAge}</span>
//             </div>
//             <div className="flex items-center text-gray-600">
//               <Tag className="size-5 mr-2" />
//               <span>Tour Type: {Package.tourType}</span>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content Column */}
//           <div className="lg:col-span-2">
//             {/* Overview Section */}
//             {Package.Overview && Package.Overview.length > 0 && (
//               <div className="mb-8">
//                 <h2 className="text-3xl font-bold mb-4">Overview</h2>
//                 {Package.Overview.map((text, index) => (
//                   <p key={index} className="text-gray-600 mb-4">
//                     {text}
//                   </p>
//                 ))}
//               </div>
//             )}

//             {/* Highlights Section */}
//             {Package.Highlights && Package.Highlights.length > 0 && (
//               <div className="mb-8">
//                 <h2 className="text-3xl font-bold mb-4">Highlights</h2>
//                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {Package.Highlights.map((highlight, index) => (
//                     <li
//                       key={index}
//                       className="flex items-center text-gray-700"
//                     >
//                       <Star className="size-5 text-teal-500 mr-2" />
//                       {highlight}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* Included / Excluded Section */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//               {Package.Inclusion && Package.Inclusion.length > 0 && (
//                 <div className="p-6 bg-green-50 rounded-lg">
//                   <h3 className="text-xl font-bold mb-4 text-green-700">
//                     Included
//                   </h3>
//                   <ul className="space-y-2">
//                     {Package.Inclusion.map((item, index) => (
//                       <li
//                         key={index}
//                         className="flex items-center text-green-600 text-sm"
//                       >
//                         <CheckCircle className="size-4 mr-2" />
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//               {Package.Exclusion && Package.Exclusion.length > 0 && (
//                 <div className="p-6 bg-red-50 rounded-lg">
//                   <h3 className="text-xl font-bold mb-4 text-red-700">
//                     Excluded
//                   </h3>
//                   <ul className="space-y-2">
//                     {Package.Exclusion.map((item, index) => (
//                       <li
//                         key={index}
//                         className="flex items-center text-red-600 text-sm"
//                       >
//                         <XCircle className="size-4 mr-2" />
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>

//             {/* Itinerary Accordion */}
//             {Package.Itinerary && Package.Itinerary.length > 0 && (
//               <div className="mb-8">
//                 <h2 className="text-3xl font-bold mb-4">Tour Plan</h2>
//                 <Accordion type="single" collapsible className="w-full">
//                   {Package.Itinerary.map((day, index) => (
//                     <AccordionItem
//                       key={index}
//                       value={`item-${index}`}
//                       className="border-b"
//                     >
//                       <AccordionTrigger className="text-lg font-semibold text-gray-800">
//                         <MapPin className="size-5 text-blue-500 mr-2" />
//                         Day {index + 1}: {day.name}
//                       </AccordionTrigger>
//                       <AccordionContent className="p-4 text-gray-600">
//                         <span>{day.description}</span>
//                       </AccordionContent>
//                     </AccordionItem>
//                   ))}
//                 </Accordion>
//               </div>
//             )}

//             {/* FAQs Section */}
//             {Package.FAQs && Package.FAQs.length > 0 && (
//               <div className="mb-8">
//                 <h2 className="text-3xl font-bold mb-4">FAQs</h2>
//                 <Accordion type="single" collapsible className="w-full">
//                   {Package.FAQs.map((faq, index) => (
//                     <AccordionItem
//                       key={index}
//                       value={`faq-${index}`}
//                       className="border-b"
//                     >
//                       <AccordionTrigger className="text-lg font-semibold text-gray-800">
//                         {faq.name}
//                       </AccordionTrigger>
//                       <AccordionContent className="p-4 text-gray-600">
//                         <span>{faq.description}</span>
//                       </AccordionContent>
//                     </AccordionItem>
//                   ))}
//                 </Accordion>
//               </div>
//             )}
//           </div>

//           {/* Sidebar Column */}
//           <div className="lg:col-span-1">
//             {/* Booking Card */}
//             <div className="sticky top-20">
//               <Card className="p-6 shadow-xl rounded-lg">
//                 <CardContent className="flex flex-col space-y-4">
//                   <h3 className="text-2xl font-bold mb-4">Book This Tour</h3>
//                   <div className="flex flex-col space-y-2">
//                     <label className="font-semibold">From</label>
//                     <input type="date" className="p-2 border rounded-md" />
//                   </div>
//                   <div className="flex flex-col space-y-2">
//                     <label className="font-semibold">Guests</label>
//                     <input
//                       type="number"
//                       placeholder="e.g., 2 adults"
//                       className="p-2 border rounded-md"
//                     />
//                   </div>
//                   <Button className="w-full">Book Now</Button>
//                 </CardContent>
//               </Card>

//               {/* Last Minute Deals */}
//               <div className="mt-8">
//                 <h3 className="text-xl font-bold mb-4">Last Minute Deals</h3>
//                 <Carousel
//                   plugins={[Autoplay({ delay: 4000 })]}
//                   className="w-full"
//                   orientation="vertical"
//                 >
//                   <CarouselContent className="h-[300px]">
//                     {LAST_MINUTE_DEALS.map((deal, index) => (
//                       <CarouselItem key={index} className="basis-1/3">
//                         <LastMinuteDealCard deal={deal} />
//                       </CarouselItem>
//                     ))}
//                   </CarouselContent>
//                 </Carousel>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Rajasthan Map */}
//       <div className="container mx-auto p-4 md:p-8">
//         <h2 className="text-3xl font-bold mb-4">Tour Location</h2>
//         <div className="flex justify-center">
//             <RajasthanMap />
//         </div>
//       </div>
      
//       {/* Other Packages Carousel */}
//       <div className="container mx-auto p-4 md:p-8">
//         <h2 className="text-3xl font-bold mb-4">Other Packages You Might Like</h2>
//         <Carousel
//           plugins={[Autoplay({ delay: 3000, loop: true })]}
//           className="w-full"
//         >
//           <CarouselContent className="p-7">
//             {otherPackages.map((pack, index) => (
//               <CarouselItem
//                 key={index}
//                 className="pl-1 md:basis-1/2 lg:basis-1/3"
//               >
//                 <PlaceCard
//                   pack={pack}
//                   lineclamp={true}
//                 />
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious className="absolute left-4 z-20" />
//           <CarouselNext className="absolute right-4 z-20" />
//         </Carousel>
//       </div>

//     </div>
//   );
// }

// export default PackageDetail;



// src/app/packages/[packageId]/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PACKAGES, LAST_MINUTE_DEALS } from "@/services/Options";
import { PACKAGETYPE } from "@/services/types";
import { Star, CheckCircle, XCircle, Tag, MapPin, Clock, Users, BadgeInfo } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import dynamic from 'next/dynamic';
import PlaceCard from "@/components/shared/PlaceCard";

// Dynamic import for the map to prevent SSR issues
const IndiaMap = dynamic(() => import('@/components/shared/Maps'), {
  ssr: false,
});

const LastMinuteDealCard = ({ deal }: { deal: any }) => (
  <Card className="p-4 flex items-center space-x-4 bg-gray-50 rounded-lg shadow-md">
    <Image
      src={deal.image}
      alt={deal.title}
      width={80}
      height={80}
      className="rounded-md object-cover"
    />
    <div>
      <h4 className="font-bold">{deal.title}</h4>
      <p className="text-sm text-gray-600">{deal.description}</p>
      <div className="flex items-center space-x-1 mt-1">
        <Star className="size-4 text-yellow-400 fill-current" />
        <span className="text-sm text-gray-500">{deal.reviews}</span>
      </div>
    </div>
  </Card>
);

function PackageDetail() {
  const { packageId } = useParams();
  const [Package, setPackage] = useState<PACKAGETYPE | null>(null);
  const [isMounted, setIsMounted] = useState(false); // New state to control map rendering
  const otherPackages = PACKAGES.filter(p => p.__id !== packageId);

  useEffect(() => {
    // Set isMounted to true after the component has mounted on the client
    setIsMounted(true);

    const foundPackage = PACKAGES.find((pack) => pack.__id === packageId);
    if (foundPackage) {
      setPackage(foundPackage);
    }
  }, [packageId]);

  if (!Package) {
    return <div className="text-center py-16">Package not found.</div>;
  }

  return (
    <div className="mt-20">
      <div className="container mx-auto p-4 md:p-8">
        {/* Tour Title and Subtitle Section */}
        <div className="mb-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-2">
            {Package.name}
          </h1>
          <p className="text-lg text-gray-600">{Package.subTitle}</p>
        </div>

        {/* Image Carousel Section (Horizontal) */}
        <div className="w-full relative mb-8">
          <Carousel
            plugins={[Autoplay({ delay: 3000, loop: true })]}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {Package.highlightsImages?.map((img, idx) => (
                <CarouselItem key={idx} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="relative h-[300px] w-full">
                      <Image
                        src={img.image}
                        alt={img.content}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 z-20" />
            <CarouselNext className="absolute right-4 z-20" />
          </Carousel>
        </div>

        {/* Information Bar */}
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between flex-wrap mb-8">
          <div className="flex items-center space-x-4">
            <Button>Book it Now</Button>
            <div className="flex items-center text-gray-600">
              <Clock className="size-5 mr-2" />
              <span>{Package.duration}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="size-5 mr-2" />
              <span>Max People: {Package.maxPeople}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <BadgeInfo className="size-5 mr-2" />
              <span>Min Age: {Package.minAge}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Tag className="size-5 mr-2" />
              <span>Tour Type: {Package.tourType}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            {/* Overview Section */}
            {Package.Overview && Package.Overview.length > 0 && (
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Overview</h2>
                {Package.Overview.map((text, index) => (
                  <p key={index} className="text-gray-600 mb-4">
                    {text}
                  </p>
                ))}
              </div>
            )}

            {/* Highlights Section */}
            {Package.Highlights && Package.Highlights.length > 0 && (
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Highlights</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Package.Highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-700"
                    >
                      <Star className="size-5 text-teal-500 mr-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Included / Excluded Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {Package.Inclusion && Package.Inclusion.length > 0 && (
                <div className="p-6 bg-green-50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-green-700">
                    Included
                  </h3>
                  <ul className="space-y-2">
                    {Package.Inclusion.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-green-600 text-sm"
                      >
                        <CheckCircle className="size-4 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {Package.Exclusion && Package.Exclusion.length > 0 && (
                <div className="p-6 bg-red-50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-red-700">
                    Excluded
                  </h3>
                  <ul className="space-y-2">
                    {Package.Exclusion.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-red-600 text-sm"
                      >
                        <XCircle className="size-4 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Itinerary Accordion */}
            {Package.Itinerary && Package.Itinerary.length > 0 && (
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Tour Plan</h2>
                <Accordion type="single" collapsible className="w-full">
                  {Package.Itinerary.map((day, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-b"
                    >
                      <AccordionTrigger className="text-lg font-semibold text-gray-800">
                        <MapPin className="size-5 text-blue-500 mr-2" />
                        Day {index + 1}: {day.name}
                      </AccordionTrigger>
                      <AccordionContent className="p-4 text-gray-600">
                        <span>{day.description}</span>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}

            {/* FAQs Section */}
            {Package.FAQs && Package.FAQs.length > 0 && (
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">FAQs</h2>
                <Accordion type="single" collapsible className="w-full">
                  {Package.FAQs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="border-b"
                    >
                      <AccordionTrigger className="text-lg font-semibold text-gray-800">
                        {faq.name}
                      </AccordionTrigger>
                      <AccordionContent className="p-4 text-gray-600">
                        <span>{faq.description}</span>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-1">
            {/* Booking Card */}
            <div className="sticky top-20">
              <Card className="p-6 shadow-xl rounded-lg">
                <CardContent className="flex flex-col space-y-4">
                  <h3 className="text-2xl font-bold mb-4">Book This Tour</h3>
                  <div className="flex flex-col space-y-2">
                    <label className="font-semibold">From</label>
                    <input type="date" className="p-2 border rounded-md" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="font-semibold">Guests</label>
                    <input
                      type="number"
                      placeholder="e.g., 2 adults"
                      className="p-2 border rounded-md"
                    />
                  </div>
                  <Button className="w-full">Book Now</Button>
                </CardContent>
              </Card>

              {/* Last Minute Deals */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Last Minute Deals</h3>
                <Carousel
                  plugins={[Autoplay({ delay: 4000 })]}
                  className="w-full"
                  orientation="vertical"
                >
                  <CarouselContent className="h-[300px]">
                    {LAST_MINUTE_DEALS.map((deal, index) => (
                      <CarouselItem key={index} className="basis-1/3">
                        <LastMinuteDealCard deal={deal} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section
      <div className="container mx-auto p-4 md:p-8">
        <h2 className="text-3xl font-bold mb-4">Tour Location</h2>
        <div className="flex justify-center">
            {isMounted && <IndiaMap />}
        </div>
      </div> */}
      
      {/* Other Packages Carousel */}
      <div className="container mx-auto p-4 md:p-8">
        <h2 className="text-3xl font-bold mb-4">Other Packages You Might Like</h2>
        <Carousel
          plugins={[Autoplay({ delay: 3000, loop: true })]}
          className="w-full"
        >
          <CarouselContent className="p-7">
            {otherPackages.map((pack, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <PlaceCard
                  pack={pack}
                  lineclamp={true}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 z-20" />
          <CarouselNext className="absolute right-4 z-20" />
        </Carousel>
      </div>
    </div>
  );
}

export default PackageDetail;