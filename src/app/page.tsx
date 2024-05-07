import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax"; 
const Page = () => {
  // Mock data for products
  const products = [
    {
      title: "iMessage Concept (Satire)",
      link: "https://twitter.com/immasiddtweets/status/1782779142104334826",
      thumbnail: "/iMessageConcept.png",
    },
    {
      title: "Skinvincible AI",
      link: "https://beta.skinvincible.in",
      thumbnail: "/skinvinciblepicture.png",
    },
    {
      title: "ChatGPT Windows 10 Trick",
      link: "https://twitter.com/immasiddtweets/status/1669721470006857729",
      thumbnail: "/elon.png",
    },
    {
      title: "6to9Tech",
      link: "https://6to9tech.com",
      thumbnail: "/6to9tech.png",
    },
    {
      title: "iOS Emoji Prediction",
      link: "https://twitter.com/immasiddtweets/status/1779155286240202854",
      thumbnail: "/africa.png",
    },
    {
      title: "iOS Emoji Prediction",
      link: "https://twitter.com/immasiddtweets/status/1779155286240202854",
      thumbnail: "/africa.png",
    },
    {
      title: "iOS Emoji Prediction",
      link: "https://twitter.com/immasiddtweets/status/1779155286240202854",
      thumbnail: "/africa.png",
    },
    {
      title: "iOS Emoji Prediction",
      link: "https://twitter.com/immasiddtweets/status/1779155286240202854",
      thumbnail: "/africa.png",
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
