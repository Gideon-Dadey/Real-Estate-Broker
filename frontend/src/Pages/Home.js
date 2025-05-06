import React from "react";
import Hero from "../Components/Hero";
import Contents from "./Contents"; 

function Home() {
  return (
    <>
      <Hero
        title="Welcome to Abizi Properties"
        subtitle="Find your dream property today"
      />
      <div id="main-content">
        <Contents />
      </div>
    </>
  );
}

export default Home;
