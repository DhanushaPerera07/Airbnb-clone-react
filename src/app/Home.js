import React from 'react';
import "../css/Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
    return (
      <div className="home">
        <Banner />

        {/* Section */}
        <div className="home__section">
          {/*  Cards  */}
          <Card />
          <Card />
          <Card />
        </div>

        {/* Section */}
        <div className="home__section">
          {/*  Cards  */}
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
}

export default Home
