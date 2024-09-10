/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // We Use This When We Need To Serve Static Files From External Hosts And Use <Imaage/> With it
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jvmxmeeoczghkdshjhig.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabins-images/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  // We Uncomment The Next Line To Make A full Static Web App , But We Need For That The entire app is static,Without Dynamic routes
  
  // output: "export",
};

export default nextConfig;
