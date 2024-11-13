import React from "react";
import "../stylesheets/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <img
          src="http://inatms.s3-website-us-east-1.amazonaws.com/assets/img/ina-logo.png"
          alt="logo"
          className="footer-logo"
        />
        <h6 className="footer-text">
          Location :
          <span className="footer-span">
            {" "}
            302, Third floor, 341, Road, 17, Ayyappa Society Main Rd, Mega
            Hills, Madhapur, Hyderabad, Telangana 500081
          </span>
        </h6>
        <h6 className="footer-text">
          Email :<span className="footer-span"> support@inapayments.com</span>
        </h6>
        <h6 className="footer-text">
          Phone :<span className="footer-span"> +91 82478 98008</span>
        </h6>
      </div>
      <div className="footer-logos">
        <img
          src="http://inatms.s3-website-us-east-1.amazonaws.com/assets/img/pci.png"
          alt="PCI Logo"
          className="footer-logo"
        />
      </div>
      <div className="footer-logos">
        <img
          src="http://inatms.s3-website-us-east-1.amazonaws.com/assets/img/pcidss.png"
          alt="PCI DSS Logo"
          className="footer-logo"
        />
      </div>
    </div>
  );
};

export default Footer;
