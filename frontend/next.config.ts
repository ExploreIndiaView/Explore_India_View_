// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images:{
//     domains:["cdn.pixabay.com", "pix8.agoda.net", "cf.bstatic.com", "q-xx.bstatic.com", "images.pexels.com",'images.unsplash.com', 'cdn.pixabay.com']
//   }
// };

// export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cdn.pixabay.com", "pix8.agoda.net", "cf.bstatic.com", "q-xx.bstatic.com", "images.pexels.com", 'images.unsplash.com', 'cdn.pixabay.com']
  },
  webpack: (config, { isServer }) => {
    // Add a rule to handle .geojson files
    config.module.rules.push({
      test: /\.geojson$/,
      type: 'json',
    });

    return config;
  },
};

export default nextConfig;