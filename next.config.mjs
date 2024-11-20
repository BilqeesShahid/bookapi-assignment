/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com", // For "Rich Dad Poor Dad"
        port: "",
        pathname: "/**", // Match all paths
      },
      {
        protocol: "https",
        hostname: "duabookpalace.com", // For "Atomic Habits"
        port: "",
        pathname: "/cdn/shop/products/**", // Match specific path
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com", // For multiple books
        port: "",
        pathname: "/images/**", // Match specific path structure
      },
      {
        protocol: "https",
        hostname: "book-shelf.pk", // For "$100 Million Dollar Lead"
        port: "",
        pathname: "/cdn/shop/files/**", // Match specific path structure
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com", // For "Diary of a CEO"
        port: "",
        pathname: "/images**", // Match general path
      },
      {
        protocol: "https",
        hostname: "miro.medium.com", // For "The 48 Laws of Power"
        port: "",
        pathname: "/v2/**", // Match specific path structure
      },
      {
        protocol: "https",
        hostname: "readings.com.pk", // For "The Subtle Art of Not Giving a F*ck"
        port: "",
        pathname: "/images/**", // Match all paths under "/images/"
      },
    ],
  },
};

export default nextConfig;
