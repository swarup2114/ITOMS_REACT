import React, { useState, useEffect } from "react";
import "../stylesheets/home.css";
import { homeTabData } from "../../Data/homeData";
import Footer from "./Footer";

const Home = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const getCurrentTabData = () => {
    return homeTabData[currentTabIndex];
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTabIndex((prevIndex) => (prevIndex + 1) % homeTabData.length);
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home-container">
      <div className="home-banner">
        <img
          src="https://www.pngarts.com/files/3/Technology-Free-PNG-Image.png"
          alt="Technology Banner"
          className="home-banner-image"
        />
        <div className="home-text">
          <h1>The TOMS platform Was Developed To Streamline Terminal Lifecycle Management.</h1>
          <p>Minimize Manpower, Enhance Management Efficiency, And Lower Operating Costs.</p>
        </div>
      </div>

      <div className="section-title">
        <div>Terminal Lifecycle Management</div>
      </div>

      <div className="home-btn-container">
        {homeTabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setCurrentTabIndex(index)}
            className={`tab-button ${currentTabIndex === index ? "active" : ""}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={`tab-content ${getCurrentTabData() ? "active" : ""}`}>
        {getCurrentTabData() && (
          <div>
            <div className={`tab-data ${getCurrentTabData() ? "active" : ""}`}>
              <div>
                <h2>{getCurrentTabData().title}</h2>
                <p>{getCurrentTabData().description}</p>
              </div>
              <div>
                <img
                  src={getCurrentTabData().image}
                  alt={getCurrentTabData().title}
                  className="tab-image"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="home-card-container">
        {getCurrentTabData().cards.map((item, id) => (
          <div className="home-card-data" key={id}>
            <img src={item.img} alt="dummy" height={100} width={100} />
            <h6>{item.title}</h6>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
