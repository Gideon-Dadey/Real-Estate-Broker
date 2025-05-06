import React from "react";
import "./About.css";
import TeamMemberCard from "../Components/TeamMemberCard";
import akpiPhoto from "../Assets/akpi.jpg";

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Abizi Properties</h1>
        <p>
          At Abizi Properties, we bring buyers, sellers, and renters together through a seamless, modern real estate experience. Whether you're searching for your dream home or listing a property, we're here to simplify the journey with trust and innovation.
        </p>
      </header>

      <section className="about-grid">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To revolutionize the property marketplace through a user-focused platform, offering transparency, speed, and confidence in every transaction.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>
          <ul className="features-list">
            <li>🏠 Verified Property Listings</li>
            <li>📱 Mobile-Friendly & Intuitive Interface</li>
            <li>🤝 Direct Broker & Agent Access</li>
            <li>🔒 Secure, Transparent Deals</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <ul className="features-list">
            <li>🌅 Integrity & Transparency</li>
            <li>🚀 Innovation & Simplicity</li>
            <li>💬 Open Communication</li>
            <li>🌍 Community Focused</li>
          </ul>
        </div>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <TeamMemberCard
            photo={akpiPhoto}
            name="Gideon Dadey"
            role="Founder & CEO"
          />
          {/* Add more team members here if needed */}
        </div>
        <div className="team-description">
          <p>
            Our team blends deep knowledge of real estate with cutting-edge technology to deliver a reliable and delightful experience. We're committed to putting people first and building a better, smarter real estate future.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
