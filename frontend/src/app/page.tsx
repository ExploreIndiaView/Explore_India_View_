// "use client";
// import AboutUs from "@/components/shared/AboutUs";
// import Disclaimer from "@/components/shared/Disclaimer";
// import { Landing } from "@/components/shared/Landing";
// import Packages from "@/components/shared/Packages";
// import Services from "@/components/shared/Services";
// import { CAROUSELIMAGE } from "@/services/Options";
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import InquirySection from "@/components/shared/InquirySection";
// import Blogs from "@/components/shared/Blogs";
// import OffersCarousel from "@/components/shared/OfferSection";

// function page() {
//   useEffect(() => {
//     AOS.init({
//       duration: 800, // animation duration in ms
//       offset: 120, // offset (in px) from the original trigger point
//     });
//   }, []);
//   return (
//     <div data-aos="fade-up">
//       <Landing IMAGES={CAROUSELIMAGE} />
//       <Disclaimer />
//       <Packages />
//       <Services />
//       <Blogs />
//       <AboutUs />
//       <OffersCarousel />
//       <InquirySection expand={true} />
//     </div>
//   );
// }

// export default page;



// src/app/page.tsx
"use client";
import AboutUs from "@/components/shared/AboutUs";
import { Landing } from "@/components/shared/Landing";
import Packages from "@/components/shared/Packages";
import Services from "@/components/shared/Services";
import { CAROUSELIMAGE } from "@/services/Options";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import InquirySection from "@/components/shared/InquirySection";
import Blogs from "@/components/shared/Blogs";
import OffersAndDeals from "@/components/shared/OffersAndDeals";
import Testimonials from "@/components/shared/Testimonials";
import { HomeSearchBar } from "@/components/shared/HomeSearchBar";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

function page() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
    });
  }, []);
  return (
    <div className="relative">
      <Header />
      <Landing />
      <HomeSearchBar />
      <Packages />
      <Services />
      <OffersAndDeals /> 
      <Testimonials />  
      {/* <Blogs /> */}
      <AboutUs />
      <InquirySection expand={true} />
    </div>
  );
}

export default page;