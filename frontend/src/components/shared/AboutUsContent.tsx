// // src/components/shared/AboutUsContent.tsx
// import Image from "next/image";
// import React from "react";
// import { Button } from "../ui/button";
// import Link from "next/link";
// import { DollarSign, Headphones, MapPlusIcon, Trophy, Heart, Leaf, Users, Star, Building } from "lucide-react";


// function AboutUsContent() {
//   return (
//     <>
//       <div className="relative w-full">
//         <Image
//           src={
//             "https://cdn.pixabay.com/photo/2018/01/23/12/07/water-palace-3101314_640.jpg"
//           }
//           alt="AboutUs"
//           height={500}
//           width={500}
//           className="rounded-t-sm shadow-lg w-full lg:h-[600px]"
//         />
//         <h1 className="text-4xl md:text-6xl mt-5 font-bold font-serif absolute top-1/2 right-0 left-0 text-white text-center">
//           About Explore India View
//         </h1>
//         <p className="text-center font-medium text-lg mt-2 text-white p-5">
//             Your trusted partner for authentic, personalized, and unforgettable journeys across incredible India
//         </p>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Who We Are</h2>
//         <p className="text-center text-lg font-medium text-gray-600 max-w-4xl mx-auto">
//           Explore India View is your gateway to discovering the incredible diversity, rich heritage, and breathtaking landscapes of India. We specialize in crafting personalized travel experiences that showcase the authentic beauty of our incredible nation, from the snow-capped Himalayas to the tropical backwaters of Kerala.
//         </p>
//         <p className="text-center text-lg font-medium text-gray-600 mt-4 max-w-4xl mx-auto">
//           Our mission is simple: to make your India travel dreams come true with seamless planning, expert guidance, and unforgettable memories that last a lifetime.
//         </p>
//       </div>

//       <div className="bg-gray-100 p-8">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Story</h2>
//         <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
//           <div className="md:w-1/2">
//             <p className="text-lg font-medium text-gray-700 mb-4">
//               Born from a deep love for India's diverse landscapes and rich cultural tapestry, Explore India View began as a mission to share the wonders of our homeland with travelers from around the world.
//             </p>
//             <p className="text-lg font-medium text-gray-700 mb-4">
//               Our founder, Arjun Sharma, after years of working in luxury hospitality across India, noticed that many travelers were missing out on the authentic experiences that make India truly special. Armed with insider knowledge and a network of local experts, he set out to create a platform that would bridge this gap.
//             </p>
//             <p className="text-lg font-medium text-gray-700">
//               Today, we're proud to have helped thousands of travelers discover hidden gems, experience local cultures, and create memories that last a lifetime. Our journey as a travel company is a testament to our belief that travel has the power to transform lives and build bridges between cultures.
//             </p>
//           </div>
//           <div className="md:w-1/2">
//             <Image
//               src={"/images/taj_mahal_about.jpg"}
//               alt="Taj Mahal"
//               width={600}
//               height={400}
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Values</h2>
//         <p className="text-center text-lg font-medium text-gray-600 max-w-4xl mx-auto mb-10">
//           The principles that guide every decision we make and every experience we create
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
//             <Heart className="size-12 text-blue-500 mb-3" />
//             <h3 className="text-xl font-bold text-gray-800 mb-2">Customer First</h3>
//             <p className="text-sm text-gray-600">Your satisfaction and memorable experiences are at the heart of everything we do.</p>
//           </div>
//           <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
//             <Leaf className="size-12 text-blue-500 mb-3" />
//             <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainable Travel</h3>
//             <p className="text-sm text-gray-600">We promote responsible tourism that preserves local culture, history, and cultural heritage.</p>
//           </div>
//           <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
//             <Users className="size-12 text-blue-500 mb-3" />
//             <h3 className="text-xl font-bold text-gray-800 mb-2">Local Communities</h3>
//             <p className="text-sm text-gray-600">Supporting local businesses, guides, and artisans to create authentic, meaningful connections.</p>
//           </div>
//           <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
//             <Trophy className="size-12 text-blue-500 mb-3" />
//             <h3 className="text-xl font-bold text-gray-800 mb-2">Trust & Transparency</h3>
//             <p className="text-sm text-gray-600">Honest pricing, clear communication, and reliable service you can count on.</p>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Meet Our Team</h2>
//         <p className="text-center text-lg font-medium text-gray-600 max-w-4xl mx-auto mb-10">
//           The passionate experts behind your extraordinary travel experiences
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
//             <Image
//               src={"/images/arjun_sharma.jpg"}
//               alt="Arjun Sharma"
//               width={100}
//               height={100}
//               className="rounded-full mb-4"
//             />
//             <h3 className="text-xl font-bold text-gray-800">Arjun Sharma</h3>
//             <p className="text-sm text-blue-500 font-medium">Founder & CEO</p>
//             <p className="text-sm text-gray-600 mt-2">With 15+ years in India's travel industry, Arjun's passion for showcasing India's beauty drives our mission.</p>
//           </div>
//           <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
//             <Image
//               src={"/images/priya_patel.jpg"}
//               alt="Priya Patel"
//               width={100}
//               height={100}
//               className="rounded-full mb-4"
//             />
//             <h3 className="text-xl font-bold text-gray-800">Priya Patel</h3>
//             <p className="text-sm text-blue-500 font-medium">Head of Operations</p>
//             <p className="text-sm text-gray-600 mt-2">Priya ensures every journey is flawlessly executed with a meticulous attention to detail.</p>
//           </div>
//           <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
//             <Image
//               src={"/images/vikram_singh.jpg"}
//               alt="Vikram Singh"
//               width={100}
//               height={100}
//               className="rounded-full mb-4"
//             />
//             <h3 className="text-xl font-bold text-gray-800">Vikram Singh</h3>
//             <p className="text-sm text-blue-500 font-medium">Cultural Expert</p>
//             <p className="text-sm text-gray-600 mt-2">Heritage specialist and local guide coordinator, bringing authentic cultural experiences to every tour.</p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-100 p-8">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Achievements</h2>
//         <p className="text-center text-lg font-medium text-gray-600 max-w-4xl mx-auto mb-10">
//           Numbers that reflect our commitment to excellence and customer satisfaction
//         </p>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
//             <div className="flex flex-col items-center">
//                 <span className="text-4xl font-bold text-blue-500">50,000+</span>
//                 <p className="text-sm text-gray-600">Happy Travelers</p>
//             </div>
//             <div className="flex flex-col items-center">
//                 <span className="text-4xl font-bold text-blue-500">500+</span>
//                 <p className="text-sm text-gray-600">Unique Destinations</p>
//             </div>
//             <div className="flex flex-col items-center">
//                 <span className="text-4xl font-bold text-blue-500">4.9/5</span>
//                 <p className="text-sm text-gray-600">Customer Rating</p>
//             </div>
//             <div className="flex flex-col items-center">
//                 <span className="text-4xl font-bold text-blue-500">10+</span>
//                 <p className="text-sm text-gray-600">Years Experience</p>
//             </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Industry Recognition</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
//             <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
//                 <Trophy className="size-12 text-green-500 mb-3" />
//                 <h3 className="text-lg font-bold text-gray-800">TripAdvisor Certificate of Excellence</h3>
//             </div>
//             <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
//                 <Building className="size-12 text-green-500 mb-3" />
//                 <h3 className="text-lg font-bold text-gray-800">India Tourism Board Partner</h3>
//             </div>
//             <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
//                 <Star className="size-12 text-green-500 mb-3" />
//                 <h3 className="text-lg font-bold text-gray-800">Sustainable Tourism Certified</h3>
//             </div>
//         </div>
//       </div>

//       <div className="p-5 ">
//         <h1 className="text-lg md:text-xl mt-5 font-bold font-serif text-center">
//           For a customized tour itinerary and package please email us at: <br />
//           <strong className="text-blue-500 underline ">
//             exploreindiaview@gmail.com
//           </strong>
//         </h1>
//         <p className="text-center mt-4">OR</p>
//         <h1 className="text-lg md:text-xl mt-5 font-bold font-serif text-center">
//           WhatsApp at +91 8426090454 , +91 9588041628 , +91 8209598333
//         </h1>
//         <p className="text-center mt-4 text-sm">
//             To request deletion of your account or data, email us at <Link href="mailto:info@exploreindiaview.com" className="text-blue-500 underline">info@exploreindiaview.com</Link> with your registered email ID.
//         </p>
//       </div>
//     </>
//   );
// }

// export default AboutUsContent;


// src/components/shared/AboutUsContent.tsx
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Heart, Leaf, Users, Trophy, Award, Building, Star, Mail, Phone, MapPin } from "lucide-react";

function AboutUsContent() {
  return (
    <>
      {/* About Section Landing */}
      <div className="relative w-full h-[500px]">
        <Image
          src="https://cdn.pixabay.com/photo/2018/01/23/12/07/water-palace-3101314_640.jpg"
          alt="AboutUs Landing"
          layout="fill"
          objectFit="cover"
          className="rounded-t-sm"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">
            About Explore India View
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-2xl">
            Your trusted partner for authentic, personalized, and unforgettable journeys across incredible India
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Who We Are</h2>
        <p className="text-center text-lg font-medium text-gray-600 max-w-4xl mx-auto">
          As is quite evident from the name itself – at Incredible Tour To India, our foremost endeavor is to offer an Incredible Indian Holiday experience to one and all. We are listed among the expert Tour Operators In Jaipur, Rajasthan. We provide:- India Tours, Rajasthan Tours. We are a Reliable tour Operator in India and an expert for Rajasthan tours. We also provide hotel booking, car rental, flight tickets and India tour Packages with flexible tour itineraries. We offer to all travelers experiences beyond anything that they have ever known before. With us, you will find that a limited budget is no reason not to go on a vacation.<br /><br /> We design all kinds of Budget India Tours for travelers who have limited funds, yet have the inclination to travel & see the wonderful sights across the country. With a country like India, where there is no dearth of wonderful holiday spots and places of interest, we will help you experience the kind of holiday you always dreamed off.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="bg-gray-100 p-8">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-lg font-medium text-gray-700 mb-4">
              Born from a deep love for India's diverse landscapes and rich cultural tapestry, Explore India View began as a dream to share the magic of our homeland with travelers from around the world.
            </p>
            <p className="text-lg font-medium text-gray-700">
              Our founder, Arjun Sharma, after years of working in luxury hospitality across India, realized that many travelers were missing out on the authentic experiences that make India truly special. Armed with insider knowledge and a network of local experts, he set out to create a platform that would bridge this gap. Today, we're proud to have helped thousands of travelers discover hidden gems, experience local cultures, and create memories that last a lifetime. Every journey we craft is a testament to our belief that travel has the power to transform lives and build bridges between cultures.
            </p>
          </div>
          <div className="md:w-1/2 ml-8">
            <Image
              src="https://cdn.pixabay.com/photo/2018/01/23/12/07/water-palace-3101314_640.jpg"
              alt="Taj Mahal"
              width={700}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Mission & Vision</h2>
        <p className="text-lg font-medium text-gray-600 mb-6 max-w-4xl mx-auto">
          We aspire to become the top travel company in the Indian Tour & Travel Circuit and to extend our reach to newer markets.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
          <div className="flex items-center space-x-4">
            <Trophy className="size-12 text-teal-500" />
            <p className="text-md text-gray-700">To make traveling a positive experience for one and all.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Award className="size-12 text-teal-500" />
            <p className="text-md text-gray-700">To be the best travel services provider synonymous with top quality and reliable service.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Star className="size-12 text-teal-500" />
            <p className="text-md text-gray-700">To exceed client expectations with 100% customer satisfaction.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Users className="size-12 text-teal-500" />
            <p className="text-md text-gray-700">To foster a work culture where teamwork and creativity are encouraged.</p>
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="bg-gray-100 p-8">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Meet Our Team</h2>
          <p className="text-center text-lg font-medium text-gray-600 max-w-4xl mx-auto mb-10">
            The passionate experts behind your extraordinary travel experiences
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <Image
                src="/images/arjun_sharma.jpg"
                alt="Arjun Sharma"
                width={100}
                height={100}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Arjun Sharma</h3>
              <p className="text-sm text-blue-500 font-medium">Founder & CEO</p>
              <p className="text-sm text-gray-600 mt-2">With 15+ years in India's travel industry, Arjun's passion for showcasing India's beauty drives our mission.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <Image
                src="/images/priya_patel.jpg"
                alt="Priya Patel"
                width={100}
                height={100}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Priya Patel</h3>
              <p className="text-sm text-blue-500 font-medium">Head of Operations</p>
              <p className="text-sm text-gray-600 mt-2">Priya ensures every journey is flawlessly executed with a meticulous attention to detail.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <Image
                src="/images/vikram_singh.jpg"
                alt="Vikram Singh"
                width={100}
                height={100}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Vikram Singh</h3>
              <p className="text-sm text-blue-500 font-medium">Cultural Expert</p>
              <p className="text-sm text-gray-600 mt-2">Heritage specialist and local guide coordinator, bringing authentic cultural experiences to every tour.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <Image
                src="/images/priya_patel.jpg"
                alt="Priya Patel"
                width={100}
                height={100}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Priya Patel</h3>
              <p className="text-sm text-blue-500 font-medium">Head of Operations</p>
              <p className="text-sm text-gray-600 mt-2">Priya ensures every journey is flawlessly executed with a meticulous attention to detail.</p>
            </div>

          </div>
        </div>
      </div>

      {/* Our Achievements Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Achievements</h2>
        <p className="text-lg font-medium text-gray-600 mb-10">
          Numbers that reflect our commitment to excellence and customer satisfaction
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-blue-500">50,000+</span>
            <p className="text-sm text-gray-600">Happy Travelers</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-blue-500">500+</span>
            <p className="text-sm text-gray-600">Unique Destinations</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-blue-500">4.9/5</span>
            <p className="text-sm text-gray-600">Customer Rating</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-blue-500">10+</span>
            <p className="text-sm text-gray-600">Years Experience</p>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Industry Recognition</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Award className="size-12 text-teal-500 mb-2" />
              <p className="text-sm font-semibold text-gray-700 text-center">TripAdvisor Certificate of Excellence</p>
            </div>
            <div className="flex flex-col items-center">
              <Building className="size-12 text-teal-500 mb-2" />
              <p className="text-sm font-semibold text-gray-700 text-center">India Tourism Board Partner</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="size-12 text-teal-500 mb-2" />
              <p className="text-sm font-semibold text-gray-700 text-center">Sustainable Tourism Certified</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="p-5 container mx-auto text-center">
        <h1 className="text-lg md:text-xl mt-5 font-bold font-serif text-center">
          For a customized tour itinerary and package please email us at:
        </h1>
        <div className="flex items-center justify-center space-x-2 mt-2">
          <Mail className="size-5" />
          <strong className="text-blue-500 underline text-lg">exploreindiaview@gmail.com</strong>
        </div>

        <p className="text-center mt-4 text-xl font-bold">OR</p>

        <h1 className="text-lg md:text-xl mt-5 font-bold font-serif text-center">
          WhatsApp at
        </h1>
        <div className="flex items-center justify-center space-x-4 mt-2">
          <div className="flex items-center space-x-2">
            <Phone className="size-5" />
            <strong className="text-lg">+91 8426090454</strong>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="size-5" />
            <strong className="text-lg">+91 9588041628</strong>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="size-5" />
            <strong className="text-lg">+91 8209598333</strong>
          </div>
        </div>

        <p className="text-center mt-8 text-sm">
          To request deletion of your account or data, email us at <Link href="mailto:info@exploreindiaview.com" className="text-blue-500 underline">info@exploreindiaview.com</Link> with your registered email ID.
        </p>
      </div>

    </>
  );
}

export default AboutUsContent;