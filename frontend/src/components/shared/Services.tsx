// "use client";
// import { OTHERSERVICES, SERVICES, TOPSERVICES } from "@/services/Options";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React from "react";
// import { Button } from "../ui/button";
// import { useAuthStore } from "@/store/auth.store";

// function Services() {
//   const router = useRouter();
//   const {user} = useAuthStore();
//   return (
//     <div className="md:px-16">
//       {TOPSERVICES.length > 0 && (
//         <div className="p-5">
//           <h1 className="text-2xl md:text-4xl mb-5 font-bold text-center font-serif border-b-4">
//             Services
//           </h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
//             {TOPSERVICES.map((service, idx) => (
//               <div key={idx} className="p-4 border rounded-lg shadow-md">
//                 <Image
//                   src={service.image}
//                   alt={service.name}
//                   width={500}
//                   height={500}
//                   className="w-full object-cover rounded-t-lg h-56"
//                 />
//                 <h2 className="text-xl md:text-2xl font-bold my-4 text-center">
//                   {service.name}
//                 </h2>
//                 <div className="w-full flex items-center justify-center my-4">
//                   <Button
//                     onClick={() => router.push(`/services/${service.path}`)}
//                     className="bg-gray-600 text-white cursor-pointer"
//                   >
//                     Explore More
//                   </Button>
//                 </div>
//               </div>
//             ))}
//             {OTHERSERVICES.map((service, idx) => (
//               <div key={idx} className="p-4 border rounded-lg shadow-md">
//                 <Image
//                   src={service.image}
//                   alt={service.name}
//                   width={500}
//                   height={500}
//                   className="w-full object-cover rounded-t-lg h-56"
//                 />
//                 <h2 className="text-xl md:text-2xl font-bold my-4 text-center">
//                   {service.name}
//                 </h2>
//                 <div className="w-full flex items-center justify-center my-4">
//                   <Button
//                     onClick={() => {
//                       window.open(`${service.path}&subid=${user?.mobile}`, "_blank");
//                     }}
//                     className="bg-gray-600 text-white cursor-pointer"
//                   >
//                     Explore More
//                   </Button>
//                 </div>
//                   <h1 className="text-center font-bold text-sm">Powered by: {service.PoweredBy}</h1>
//               </div>
//             ))}

//             {SERVICES.map((service, idx) => (
//               <div key={idx} className="p-4 border rounded-lg shadow-md">
//                 <Image
//                   src={service.image[0].image}
//                   alt={service.name}
//                   width={500}
//                   height={500}
//                   className="w-full h-56 object-cover rounded-t-lg"
//                 />
//                 <h2 className="text-xl md:text-2xl font-bold my-4 text-center">
//                   {service.name}
//                 </h2>
//                 <div className="w-full flex items-center justify-center my-4">
//                   <Button
//                     onClick={() => router.push(`/services/${service.__id}`)}
//                     className="bg-gray-600 text-white cursor-pointer"
//                   >
//                     Explore More
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Services;



// "use client";
// import { OTHERSERVICES, SERVICES, TOPSERVICES } from "@/services/Options";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React from "react";
// import { Button } from "../ui/button";
// import { useAuthStore } from "@/store/auth.store";

// function Services() {
//   const router = useRouter();
//   const {user} = useAuthStore();
//   return (
//     <div className="md:px-16">
//       {TOPSERVICES.length > 0 && (
//         <div className="p-5">
//           <h1 className="text-2xl md:text-4xl mb-5 font-bold text-center font-serif border-b-4">
//             Services
//           </h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
//             {TOPSERVICES.map((service, idx) => (
//               <div key={idx} className="p-4 border rounded-lg shadow-md">
//                 <Image
//                   src={service.image}
//                   alt={service.name}
//                   width={500}
//                   height={500}
//                   className="w-full object-cover rounded-t-lg h-56"
//                 />
//                 <h2 className="text-xl md:text-2xl font-bold my-4 text-center">
//                   {service.name}
//                 </h2>
//                 <div className="w-full flex items-center justify-center my-4">
//                   <Button
//                     onClick={() => router.push(`/services/${service.path}`)}
//                     className="bg-gray-600 text-white cursor-pointer"
//                   >
//                     Explore More
//                   </Button>
//                 </div>
//               </div>
//             ))}
//             {OTHERSERVICES.map((service, idx) => (
//               <div key={idx} className="p-4 border rounded-lg shadow-md">
//                 <Image
//                   src={service.image}
//                   alt={service.name}
//                   width={500}
//                   height={500}
//                   className="w-full object-cover rounded-t-lg h-56"
//                 />
//                 <h2 className="text-xl md:text-2xl font-bold my-4 text-center">
//                   {service.name}
//                 </h2>
//                 <div className="w-full flex items-center justify-center my-4">
//                   <Button
//                     onClick={() => {
//                       window.open(`${service.path}&subid=${user?.mobile}`, "_blank");
//                     }}
//                     className="bg-gray-600 text-white cursor-pointer"
//                   >
//                     Explore More
//                   </Button>
//                 </div>
//                   <h1 className="text-center font-bold text-sm">Powered by: {service.PoweredBy}</h1>
//               </div>
//             ))}

//             {SERVICES.map((service, idx) => (
//               <div key={idx} className="p-4 border rounded-lg shadow-md">
//                 <Image
//                   src={service.image[0].image}
//                   alt={service.name}
//                   width={500}
//                   height={500}
//                   className="w-full h-56 object-cover rounded-t-lg"
//                 />
//                 <h2 className="text-xl md:text-2xl font-bold my-4 text-center">
//                   {service.name}
//                 </h2>
//                 <div className="w-full flex items-center justify-center my-4">
//                   <Button
//                     onClick={() => router.push(`/services/${service.__id}`)}
//                     className="bg-gray-600 text-white cursor-pointer"
//                   >
//                     Explore More
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Services;



"use client";
import { OTHERSERVICES, SERVICES, TOPSERVICES, TOUR_SERVICES } from "@/services/Options";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { useAuthStore } from "@/store/auth.store";
import Link from "next/link";
import { Card, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Earth, Package, Plus, MapPin, Tent, Car, Award, Shield, Tag } from "lucide-react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import CreateOwnPackageModal from "./CreateOwnPackageModal";

function Services() {
  const router = useRouter();
  const {user} = useAuthStore();

  const mostPopularServices = TOUR_SERVICES.filter(service => 
    service.name === "One Day Tour" || 
    service.name === "Adventure" || 
    service.name === "Camping Hiking" ||
    service.name === "Event Organizer" ||
    service.name === "Car and Bike" ||
    service.name === "Tour Guide Service" ||
    service.name === "Travel Insurance"
  );

  const serviceIcons: any = {
    "One Day Tour": <MapPin className="size-8 text-white" />,
    "Adventure": <Tent className="size-8 text-white" />,
    "Camping Hiking": <Tent className="size-8 text-white" />,
    "Event Organizer": <Award className="size-8 text-white" />,
    "Car and Bike": <Car className="size-8 text-white" />,
    "Tour Guide Service": <Tag className="size-8 text-white" />,
    "Travel Insurance": <Shield className="size-8 text-white" />,
  };
  
  return (
    <div className="md:px-16">
      {/* Most Popular Services Section */}
      <div className="p-5">
        <h1 className="text-2xl md:text-4xl mb-5 font-bold text-center font-serif border-b-4">
          Most Popular Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {mostPopularServices.map((service, idx) => (
            <div key={idx} className="p-4 border rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105">
              <div className="bg-blue-500 rounded-full p-4 mb-4">
                {serviceIcons[service.name]}
              </div>
              <h2 className="text-xl md:text-2xl font-bold my-2">
                {service.name}
              </h2>
              <div className="w-full flex items-center justify-center mt-2">
                <Button
                  onClick={() => router.push(`/services/${service.__id}`)}
                  className="bg-gray-600 text-white cursor-pointer"
                >
                  Explore More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Buttons for navigation */}
      <div className="flex justify-center mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {/* World Tour Packages */}
            <Link href="/world-tour" passHref>
              <Card className="p-8 text-center bg-gray-50 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 cursor-pointer flex flex-col items-center justify-center space-y-4">
                <Earth className="size-12 text-blue-600 mb-2" />
                <CardTitle className="text-xl font-bold font-serif">
                  World Tour Packages
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Explore international destinations
                </CardDescription>
              </Card>
            </Link>

            {/* View All Packages */}
            <Link href="/package" passHref>
              <Card className="p-8 text-center bg-gray-50 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 cursor-pointer flex flex-col items-center justify-center space-y-4">
                <Package className="size-12 text-green-600 mb-2" />
                <CardTitle className="text-xl font-bold font-serif">
                  View All Packages
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Browse all our curated tours
                </CardDescription>
              </Card>
            </Link>

            {/* Create your own Packages */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="p-8 text-center bg-gray-50 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 cursor-pointer flex flex-col items-center justify-center space-y-4">
                  <Plus className="size-12 text-purple-600 mb-2" />
                  <CardTitle className="text-xl font-bold font-serif">
                    Create your own Packages
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Design your dream trip
                  </CardDescription>
                </Card>
              </DialogTrigger>
              {/* <CreateOwnPackageModal /> */}
            </Dialog>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Services;