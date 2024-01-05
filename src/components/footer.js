import React from "react";
import './footerStyles.scss';
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
    <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"20px"}}/>
                <div>
                    <p>123 Housing society</p>
                    <p>Bangladesh</p>
                </div>
            </div>
            <div className="phone">
                <h4>
                <FaPhone size={20} style={{color:"#fff",marginRight:"20px"}}/>
                01121107895
                </h4>
            </div>
            <div className="email">
                <h4>
                    <FaMailBulk size={20} style={{color:"#fff",marginRight:"20px",marginTop:"20px"}}/>
                    khaledhamdy825@gmail.com
                </h4>
                </div>
        </div>
        <div className="right">
            <h4>About the company</h4>
            <p>Welcome..
            khaled hamdy, frontend developer.
            I have more than 2 years of experience in the field of web development, during which I was able to design  different projects
            </p>
            <div className="social">
            <FaFacebook size={30} style={{color:"#fff",marginTop:"20px",marginRight:"10px"}}/>
            <FaTwitter size={30} style={{color:"#fff",marginTop:"20px",marginRight:"10px"}}/>
            <FaLinkedin size={30} style={{color:"#fff",marginTop:"20px",marginRight:"10px"}}/>
            </div>
        </div>
</div>
    </div>
  )
}

export default Footer
