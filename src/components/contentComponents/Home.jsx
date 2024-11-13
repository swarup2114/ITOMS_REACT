import React, { useState } from 'react';
import "../stylesheets/home.css"; 
import { homeTabData } from "../../jsonFormatData/home";
import { homeCardData } from '../../jsonFormatData/home';
import Footer from './Footer';

const Home = () => {
  const [currentTab, setCurrentTab] = useState("Zero Touch Deployment");

  
  const getCurrentTabData = () => {
    return homeTabData.find(tab => tab.title === currentTab);
    
  };


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
            Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </p>
        </div>
      </div>

    
      <div className="section-title">
        <h1>Terminal Lifecycle Management</h1>
      </div>

    
      <div className="home-btn-container">
        {homeTabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setCurrentTab(tab.title)}
            className={`tab-button ${currentTab === tab.title ? 'active' : ''}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

    
      <div className="tab-content">
        {getCurrentTabData() && (
          <div>
            <h2>{getCurrentTabData().title}</h2>
          <div className='tab-data'>
         <div>
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
      {/* card data container */}
      <div className='home-card-container'>
  {homeCardData.map((item, id) => {
    return (
      <div className='home-card-data' key={id}>
        <h6>{item.title}</h6>
        <p>{item.description}</p>
      </div>
    );
  })}
</div>
<Footer/>
    </div>
  );
};

export default Home;
