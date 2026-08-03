import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Star Ship International",
    short_name: "Star Ship",
    description:
      "Customs clearing & forwarding, logistics, and trade consultancy in Bangladesh since 1997.",
    start_url: "/en",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a2a5e",
    icons: [
      { src: "/brand/logo.png", sizes: "512x512", type: "image/png" },
      {
        src: "/brand/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
