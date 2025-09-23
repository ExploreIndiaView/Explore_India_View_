// "use client";
// import { PACKAGES, POPULAR_REGIONS } from "@/services/Options";
// import { Button } from "../ui/button";
// import PlaceCard from "./PlaceCard";
// import { useRouter } from "next/navigation";
// import CreateOwnPackageModal from "./CreateOwnPackageModal";
// import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";
// import { MapPin } from "lucide-react";
// import Link from "next/link";
// import { Card, CardContent } from "../ui/card";

// function Packages() {
//   const router = useRouter();

//   return (
//     <div className="md:px-16">
//       {PACKAGES.length > 0 && (
//         <div className="p-5">
//           <h1 className="text-2xl md:text-4xl mb-5 font-bold text-center font-serif border-b-4">
//             Featured Tour Packages
//           </h1>
//           <div className="text-center mb-10 text-gray-600">
//               Discover our most popular destinations with carefully curated experiences that showcase India's incredible diversity.
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {PACKAGES.slice(0,3).map((pack, index) => (
//               <PlaceCard
//                 pack={pack}
//                 key={index}
//               />
//             ))}
//           </div>
//           <div className="flex justify-center">
//             <Button
//               onClick={() => {
//                 router.push("/package");
//               }}
//               size={"lg"}
//               className="mt-5 bg-gray-600 text-white cursor-pointer"
//             >
//               View All Packages
//             </Button>
//           </div>
//         </div>
//       )}

//       {POPULAR_REGIONS.length > 0 && (
//         <div className="p-5 mt-10">
//           <h1 className="text-2xl md:text-4xl mb-5 font-bold text-center font-serif border-b-4">
//             Explore Popular Regions
//           </h1>
//           <div className="text-center mb-10 text-gray-600">
//               From royal Rajasthan to the mystical Northeast, discover India's diverse regions with our expertly crafted regional tours
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//             {POPULAR_REGIONS.map((region, index) => (
//               <Card key={index} className="flex flex-col md:flex-row p-0 overflow-hidden rounded-xl shadow-lg">
//                 <Image
//                   src={region.image}
//                   alt={region.name}
//                   width={300}
//                   height={200}
//                   className="w-full md:w-1/2 object-cover"
//                 />
//                 <CardContent className="flex flex-col justify-center p-4 w-full md:w-1/2">
//                   <h3 className="text-xl font-bold font-serif mb-2">{region.name}</h3>
//                   <p className="text-sm text-gray-600 mb-2">
//                     Experience {region.experiences.join(", ")}
//                   </p>
//                   <p className="text-md font-bold mb-4">Starting from ₹{region.price}</p>
//                   <Link href={`/package`}>
//                     <Button className="w-full">
//                       Explore ->
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Packages;



"use client";
import { PACKAGES, POPULAR_REGIONS } from "@/services/Options";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import CreateOwnPackageModal from "./CreateOwnPackageModal";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { MapPin, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

function Packages() {
  const router = useRouter();

  return (
    <div className="md:px-16">
      <div className="p-5">
        {/* Main Header matching the image */}
        <h1 className="text-2xl md:text-4xl mb-5 font-bold text-center font-serif border-b-4">
          Explore World Tours
        </h1>
        <div className="text-center mb-10 text-gray-600">
          Discover our most popular destinations with carefully curated experiences that showcase India's incredible diversity.
        </div>

        {/* Package UI as per the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGES.slice(0, 3).map((pack, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105">
              <div className="relative">
                <Image
                  src={pack.image}
                  alt={pack.name}
                  width={500}
                  height={300}
                  className="w-full object-cover rounded-t-lg h-48"
                />
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  Trending
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold font-serif text-center mb-2">{pack.name}</h3>
                <ul className="list-none space-y-1 text-sm text-gray-700 mb-4">
                  {pack.Highlights && pack.Highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start">
                      <CheckCircle className="size-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link href={`/packages/${pack.__id}`} passHref>
                  <Button className="w-full">
                    View More
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* The new three-div section */}
        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
            {/* World Tour Packages */}
            <Link href="/world-tour" passHref>
              <Card className="p-6 text-center shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col justify-center items-center">
                <CardTitle className="text-lg md:text-xl font-bold mb-2">
                  World Tour Packages
                </CardTitle>
                <CardDescription>
                  Explore international destinations
                </CardDescription>
              </Card>
            </Link>

            {/* View All Packages */}
            <Link href="/package" passHref>
              <Card className="p-6 text-center shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col justify-center items-center">
                <CardTitle className="text-lg md:text-xl font-bold mb-2">
                  View All Packages
                </CardTitle>
                <CardDescription>
                  Browse all our curated tours
                </CardDescription>
              </Card>
            </Link>

            {/* Create your own Packages */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="p-6 text-center shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col justify-center items-center">
                  <CardTitle className="text-lg md:text-xl font-bold mb-2">
                    Create your own Packages
                  </CardTitle>
                  <CardDescription>
                    Design your dream trip
                  </CardDescription>
                </Card>
              </DialogTrigger>
              {/* <CreateOwnPackageModal /> */}
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;