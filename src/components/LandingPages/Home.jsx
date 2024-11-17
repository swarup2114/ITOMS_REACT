import React, { useState, useEffect } from "react";
import "../stylesheets/home.css";
import { homeTabData } from "../../Data/homeData";
import Footer from "./Footer";

const Home = () => {
  // Initialize state for the current tab index (using the tab index instead of the title)
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  // Function to get current tab data based on the index
  const getCurrentTabData = () => {
    return homeTabData[currentTabIndex];
  };

  // Set interval to update the current tab every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the tab index, and loop back to the start when it exceeds the number of tabs
      setCurrentTabIndex((prevIndex) => (prevIndex + 1) % homeTabData.length);
    }, 5000); // 5000 milliseconds (5 seconds)

    // Clean up the interval when the component is unmounted
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
          <h1>Manage your business strategy in one placeholder</h1>
          <p>
            Our passion to work hard and deliver excellent results. It could
            solve the needs of your customers and develop innovation. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </p>
        </div>
      </div>

      <div className="section-title">
        <div>Terminal Lifecycle Management</div>
      </div>

      <div className="home-btn-container">
        {homeTabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setCurrentTabIndex(index)} // Update tab when clicked
            className={`tab-button ${
              currentTabIndex === index ? "active" : ""
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {getCurrentTabData() && (
          <div>
            <div className="tab-data">
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

      {/* Card data container */}
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
