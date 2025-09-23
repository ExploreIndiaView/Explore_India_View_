// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import { BLOGS } from "../../services/Options";

// function Blogs() {
//   return (
//     <div className="w-full max-w-7xl mx-auto py-8 " id="blogs">
//       <h2 className="text-3xl font-bold text-center mb-8">Travel Blogs</h2>
//       <Carousel
//         opts={{
//           align: "start",
//         }}
//         plugins={[
//           Autoplay({
//             delay: 3000,
//           }),
//         ]}
//         className="w-full px-5"
//       >
//         <CarouselContent className="flex py-4">
//           {BLOGS.map((blog, idx) => (
//             <CarouselItem key={idx} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2">
//               <div className="bg-white rounded-lg shadow-md p-5 h-full flex flex-col justify-between font-medium">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">
//                     {blog.BlogTitle}
//                   </h3>
//                   <p className="text-purple-600 font-medium mb-1">
//                     {blog.MetaTitle}
//                   </p>
//                   <p className="text-gray-600 text-sm mb-2">
//                     {blog.MetaDescription}
//                   </p>
//                   <p className="text-gray-500 text-xs">{blog.ContentSummary}</p>
//                 </div>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>
//     </div>
//   );
// }

// export default Blogs;


// src/components/shared/Blogs.tsx
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { BLOGS } from "../../services/Options";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Categories from the new design
const blogCategories = ["All", "Destination Guides", "Cultural Insights", "Travel Tips", "Food & Cuisine", "Adventure", "Budget Travel"];

function Blogs() {
  // Assuming the first 3 blogs are "Featured"
  const featuredBlogs = BLOGS.slice(0, 3);
  const latestBlogs = BLOGS.slice(3);

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-5" id="blogs">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Travel Stories & Insights</h2>
        <p className="text-gray-600">Discover inspiring travel stories, expert tips and cultural insights to enrich your Indian adventures</p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {blogCategories.map(category => (
          <Button key={category} variant="outline" className="rounded-full">
            {category}
          </Button>
        ))}
      </div>

      {/* Featured Stories */}
      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4">Featured Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBlogs.map((blog, idx) => (
            <Card key={idx} className="p-0 overflow-hidden rounded-lg shadow-md">
              <Image
                src={`/images/blog${idx + 1}.jpg`} // Assuming you have corresponding images
                alt={blog.BlogTitle}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h4 className="font-bold text-lg mb-2 line-clamp-2">{blog.BlogTitle}</h4>
                <p className="text-sm text-gray-500 line-clamp-3">{blog.ContentSummary}</p>
                <Button variant="link" className="p-0 mt-2">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Latest Posts */}
      <div>
        <h3 className="text-xl font-bold mb-4">Latest Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestBlogs.map((blog, idx) => (
            <Card key={idx} className="p-0 overflow-hidden rounded-lg shadow-md">
              <Image
                src={`/images/blog${idx + 4}.jpg`} // Assuming you have corresponding images
                alt={blog.BlogTitle}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h4 className="font-bold text-lg mb-2 line-clamp-2">{blog.BlogTitle}</h4>
                <p className="text-sm text-gray-500 line-clamp-3">{blog.ContentSummary}</p>
                <Button variant="link" className="p-0 mt-2">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;