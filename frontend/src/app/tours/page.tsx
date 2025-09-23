// // // src/app/tours/page.tsx
// // import React from 'react';
// // import Image from 'next/image';
// // import { Button } from '@/components/ui/button';
// // import Blogs from '@/components/shared/Blogs';
// // import Footer from '@/components/shared/Footer';
// // import Header from '@/components/shared/Header';
// // import { TOUR_SERVICES, WHY_CHOOSE_US_ITEMS } from '@/services/Options';
// // import Link from 'next/link';
// // import { Star, DollarSign, Headphones, Tag } from 'lucide-react';
// // import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// // // Icons for the tour services. We will use a mapping for this.
// // const serviceIcons: any = {
// //   "Flight": <Star className="size-6 text-white" />,
// //   "Hotel": <DollarSign className="size-6 text-white" />,
// //   "Car": <Headphones className="size-6 text-white" />,
// //   "Map": <Tag className="size-6 text-white" />,
// //   "Support": <Star className="size-6 text-white" />,
// //   "Event": <DollarSign className="size-6 text-white" />,
// // };

// // function ToursPage() {
// //   return (
// //     <>
// //       {/* Header is fixed, so content starts below it */}
// //       <Header />
      
// //       {/* Landing Section */}
// //       <div className="relative w-full h-screen">
// //         <Image
// //           src="/images/udaipur-tour-landing.jpg" // Add this image to your public folder
// //           alt="Udaipur Palace"
// //           layout="fill"
// //           objectFit="cover"
// //           className="z-0"
// //         />
// //         <div className="absolute inset-0 bg-black/30 z-10" />
// //         <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
// //           <div className="bg-white/70 p-8 rounded-lg shadow-xl text-center text-black max-w-xl">
// //             <h1 className="text-4xl font-bold mb-2">UDAIPUR</h1>
// //             <p className="text-sm">
// //               Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Our Travel Services Section */}
// //       <div className="container mx-auto py-16">
// //         <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Our Travel Services</h2>
// //         <p className="text-center text-gray-600 mb-10">
// //           Comprehensive travel solutions designed to make your Indian adventure seamless and unforgettable
// //         </p>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {TOUR_SERVICES.map((service, index) => (
// //             <Card key={index} className="p-6 relative">
// //               <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">{service.tag}</span>
// //               <div className="flex items-center space-x-4 mb-4">
// //                 <div className="bg-blue-500 rounded-full p-3">
// //                   {serviceIcons[service.icon]}
// //                 </div>
// //                 <h3 className="text-xl font-bold">{service.name}</h3>
// //               </div>
// //               <p className="text-gray-600 text-sm mb-4">{service.description}</p>
// //               <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
// //                 {service.highlights.map((highlight, hIndex) => (
// //                   <li key={hIndex}>{highlight}</li>
// //                 ))}
// //               </ul>
// //               <Button className="w-full">Learn More</Button>
// //             </Card>
// //           ))}
// //         </div>
// //       </div>
      
// //       {/* Why Choose Us Section */}
// //       <div className="bg-gray-100 py-16">
// //         <div className="container mx-auto text-center">
// //           <h2 className="text-4xl font-bold mb-10">Why Choose Explore India View?</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {WHY_CHOOSE_US_ITEMS.map((item, index) => (
// //               <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
// //                 <div className="bg-white rounded-full p-4 mb-4">
// //                   {/* Icon can be added here using a mapping */}
// //                   <Star className="size-12 text-teal-500" />
// //                 </div>
// //                 <h3 className="text-xl font-bold mb-2">{item.name}</h3>
// //                 <p className="text-sm text-gray-600">{item.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
      
// //       {/* Ready to Start Your Journey CTA */}
// //       <div className="bg-teal-500 text-white p-16 text-center">
// //         <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
// //         <p className="text-lg mb-6 max-w-3xl mx-auto">
// //           Contact our travel experts for personalized assistance and exclusive deals
// //         </p>
// //         <div className="flex justify-center space-x-4">
// //           <Button variant="outline" className="text-teal-500 bg-white">Get Free Consultation</Button>
// //           <Button className="bg-white text-teal-500 hover:bg-gray-100">View All Packages</Button>
// //         </div>
// //       </div>
      
// //       {/* Travel Stories & Insights (Blogs) */}
// //       {/* <Blogs /> */}
      
// //       {/* Stay Updated with Our Latest Stories */}
// //       <div className="bg-gray-100 p-16 text-center">
// //         <h2 className="text-2xl font-bold mb-4">Stay Updated with Our Latest Stories</h2>
// //         <p className="text-gray-600 mb-6">
// //           Subscribe to our newsletter and never miss inspiring travel stories, expert tips, and exclusive destination guides
// //         </p>
// //         <div className="flex justify-center space-x-2">
// //           <input type="email" placeholder="Your email address" className="p-2 border rounded-md" />
// //           <Button className="bg-blue-500 hover:bg-blue-600 text-white">Subscribe</Button>
// //         </div>
// //       </div>
      
// //       {/* Ready for Your Next Adventure? CTA */}
// //       <div className="bg-blue-500 text-white p-16 text-center">
// //         <h2 className="text-4xl font-bold mb-4">Ready for Your Next Adventure?</h2>
// //         <p className="text-lg mb-6 max-w-3xl mx-auto">
// //           Let us create the perfect Indian journey for you. From planning to execution, we handle everything.
// //         </p>
// //         <div className="flex justify-center space-x-4">
// //           <Button variant="outline" className="text-blue-500 bg-white">Start Planning</Button>
// //           <Button className="bg-white text-blue-500 hover:bg-gray-100">Contact Our Experts</Button>
// //         </div>
// //       </div>
      
// //       {/* Terms & Disclaimers Section */}
// //       <div className="container mx-auto py-16 text-center">
// //         <h2 className="text-3xl font-bold mb-10">Terms & Disclaimers</h2>
// //         <p className="text-gray-600 mb-6">
// //           Please read these important terms and disclaimers before using our services
// //         </p>
// //         {/* You can add more detailed content here as per the screenshot */}
// //       </div>

// // \    </>
// //   );
// // }

// // export default ToursPage;


// // src/app/tours/page.tsx
// import React from 'react';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { Star, DollarSign, Headphones, Tag, SlidersHorizontal, Award, Plane, Hotel } from 'lucide-react';
// import Link from 'next/link';
// import { TOUR_SERVICES, WHY_CHOOSE_US_ITEMS } from '@/services/Options';

// // Mapping for the icons
// const serviceCardIcons: any = {
//   "Star": <Star className="size-6 text-white" />,
//   "DollarSign": <DollarSign className="size-6 text-white" />,
//   "Headphones": <Headphones className="size-6 text-white" />,
//   "Tag": <Tag className="size-6 text-white" />,
//   "SlidersHorizontal": <SlidersHorizontal className="size-6 text-white" />,
//   "Award": <Award className="size-6 text-white" />,
//   "Plane": <Plane className="size-6 text-white" />,
//   "Hotel": <Hotel className="size-6 text-white" />,
// };

// function ToursPage() {
//   return (
//     <div className="mt-20">
//       {/* Our Travel Services Section */}
//       <div className="container mx-auto py-16">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Our Travel Services</h2>
//         <p className="text-center text-gray-600 mb-10">
//           Comprehensive travel solutions designed to make your Indian adventure seamless and unforgettable.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {TOUR_SERVICES.map((service, index) => (
//             <Card key={index} className="p-6 relative">
//               <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">{service.tag}</span>
//               <div className="flex items-center space-x-4 mb-4">
//                 <div className="bg-blue-500 rounded-full p-3">
//                   {serviceCardIcons[service.icon]}
//                 </div>
//                 <h3 className="text-xl font-bold">{service.name}</h3>
//               </div>
//               <p className="text-gray-600 text-sm mb-4">{service.description}</p>
//               <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
//                 {service.highlights.map((highlight, hIndex) => (
//                   <li key={hIndex}>{highlight}</li>
//                 ))}
//               </ul>
//               <Button asChild className="w-full">
//                 <Link href={`/services/${service.__id}`}>Learn More</Link>
//               </Button>
//             </Card>
//           ))}
//         </div>
//       </div>
      
//       {/* Why Choose Us Section */}
//       <div className="bg-gray-100 py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-10">Why Choose Explore India View?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {WHY_CHOOSE_US_ITEMS.map((item, index) => (
//               <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
//                 <div className="bg-white rounded-full p-4 mb-4">
//                   <Star className="size-12 text-teal-500" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{item.name}</h3>
//                 <p className="text-sm text-gray-600">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ToursPage;



// src/app/tours/page.tsx
import React from 'react';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { WHY_CHOOSE_US_ITEMS } from '@/services/Options';
import ServicesGrid from '@/components/shared/ServicesGrid'; // Import the new component

function ToursPage() {
  return (
    <div className="mt-20">
      {/* Our Travel Services Section - Now using the new component */}
      <ServicesGrid />

      {/* Why Choose Us Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Why Choose Explore India View?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_CHOOSE_US_ITEMS.map((item, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                <div className="bg-white rounded-full p-4 mb-4">
                  <Star className="size-12 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToursPage;