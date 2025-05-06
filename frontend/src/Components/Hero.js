import React from "react";
import "./Hero.css";
import heroImage from "../Assets/HeroImage.jpg";

function Hero({ title, subtitle }) {
  const scrollToContent = () => {
    const contentSection = document.getElementById("main-content");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero-container"
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-label="Hero Section"
    >
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
      </div>
      <button
        className="scroll-down"
        onClick={scrollToContent}
        aria-label="Scroll to content"
      >
        ↓
      </button>
    </section>
  );
}

export default Hero;
