import React from 'react';
import "../styles/PartneredComp.css";

function PartnerCompanies() {
  return (
    <div className="partnered">
      <p>Partnered with 1000+ worldwide including</p>
      <div className="logos">
        <div className="logos-wrapper">
          <img src="https://t3.ftcdn.net/jpg/03/99/98/60/360_F_399986042_9iSLYUNyDv8npaKP31xsIpDVFjfqGLDF.jpg" alt="Company 1" className="logo" />
          <img src="https://api.freelogodesign.org/assets/blog/img/20180911090509731amazon_logo_RGB.jpg" alt="Company 2" className="logo" />
          <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop" alt="Company 3" className="logo" />
          {/* Repeat the logos for continuous scroll effect */}
          <img src="https://www.smeal.psu.edu/startconference/images/deloitte-logo-200.png/@@images/image.png" alt="Company 1" className="logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Logo_2008_1.svg" alt="Company 2" className="logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Accenture_logo.svg" alt="Company 3" className="logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Citi.svg" alt="Company 3" className="logo" />
          <img src="https://logos-world.net/wp-content/uploads/2022/01/PricewaterhouseCoopers-Logo-700x394.jpg" alt="Company 3" className="logo" />
          
        </div>
      </div>
    </div>
  );
}

export default PartnerCompanies;
