import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax"; 
const Page = () => {
  // Mock data for products
  const products = [
    {
      title: "Skinvincible AI",
      link: "https://beta.skinvincible.in",
      thumbnail: "/image.png",
    },
    {
      title: "Skinvincible AI",
      link: "https://beta.skinvincible.in/",
      thumbnail: "/image.png",
    },
    {
      title: "Skinvincible AI",
      link: "https://beta.skinvincible.in/",
      thumbnail: "/image.png",
    },
    {
      title: "Skinvincible AI",
      link: "https://beta.skinvincible.in/",
      thumbnail: "/image.png",
    },
    {
      title: "Skinvincible AI",
      link: "https://beta.skinvincible.in/",
      thumbnail: "/image.png",
    },
    {
      title: "Skinvincible AI",
      link: "https://beta.skinvincible.in/",
      thumbnail: "/image.png",
    },
    {
      title: "Skinvincible AI",
      link: "https://beta.skinvincible.in/",
      thumbnail: "/image.png",
    },
    {
      title: "Skinvincible AI",
      link: "https://beta.skinvincible.in/",
      thumbnail: "/image.png",
    },
    {
      title: "Skinvincible AI",
      link: "https://beta.skinvincible.in/",
      thumbnail: "/image.png",
    },
    {
      title: "Skinvincible AI",
      link: "https://beta.skinvincible.in/",
      thumbnail: "/image.png",
    },
    {
      title: "Skinvincible AI",
      link: "https://beta.skinvincible.in/",
      thumbnail: "/image.png",
    },
    {
      title: "Skinvincible AI",
      link: "https://beta.skinvincible.in/",
      thumbnail: "/image.png",
    },
    {
      title: "Skinvincible AI",
      link: "https://beta.skinvincible.in/",
      thumbnail: "/image.png",
    },
    {
      title: "Skinvincible AI",
      link: "https://beta.skinvincible.in/",
      thumbnail: "/image.png",
    },
    {
      title: "Skinvincible AI",
      link: "https://beta.skinvincible.in/",
      thumbnail: "/image.png",
    },
    // Add more product objects as needed
  ];

  return (
    <div>

      <HeroParallax products={products} />
    </div>
  );
};

export default Page;
