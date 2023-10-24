import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetAllSolutions from "../APIS/GetAllSolutions";

const Footer = () => {
  const [show,setShow] = useState("0")
  useEffect(()=>{
    setShow(90)
  })
  return (
    <div>
      <footer className="container-inner">
        <div className="footer-section row">
          <div className="footer-navbar col-lg-4">
            <div className="footer-logo">
              <Link to="/">
                <img src="/images/acme-logo.jpg" alt="ACME LOGO" />
              </Link>
            </div>
            <div className="footer-nav ">
              <div className="nav-list01">
                <ul  className="footer-scroll-shadows scroll-shadows row"
                 >
                  <li className="col-md-6">
                    <Link  to="/">Home</Link>
                  </li>
                 
                        
                    {GetAllSolutions().map((item) => {
                      return (
                      
                        <li className="col-md-6" >
                          <Link className="" onClick={() => window.location.href=`/la/${item.id}`} to={`/la/${item.id}`}>
                            {item.title}
                          </Link>
                        </li>
                       
                 
                      );
                    })}
                    
                  
                    
                  <li className="col-md-6">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                
                  {/* <li><Link to="/earthing-system">Earthing System</Link></li>
              <li><Link to="/spd">SPDs and Fuses</Link></li> */}
                </ul>
              </div>
              {/* <div className="nav-list02">
                <ul>
                  <li>
                    <Link to="/weld">Weld Accessories</Link>
                  </li>
                  <li>
                    <Link to="/la">Lightning Arrester</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="footer-add col-lg-4">
            <div className="discription">
              <h4>Follow Us On</h4>
              <div className="social-icons">
                <Link href="#">
                  <i className="bi bi-facebook" />
                </Link>
                <Link href="#">
                  <i className="bi bi-twitter" />
                </Link>
                <Link href="#">
                  <i className="bi bi-instagram" />
                </Link>
                <Link href="#">
                  <i className="bi bi-youtube" />
                </Link>
              </div>
            </div>
            <div className="add">
              <address>
                <i className="bi bi-geo-alt-fill" />
                G-4-B, Indraprastha Residency, Swage Farm, Bhagawan Marg, Jaipur
                , Rajasthan, India.
              </address>
              <div>
                <Link href="tel:+8690972754">
                  <i className="bi bi-telephone-fill" />
                  <span>+91 86909 72754</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-map col-lg-4">
            {/* <iframe src="https://goo.gl/maps/trdFBAroPodrJ9fj9" frameborder="0"></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5984.295637036291!2d75.78347602833696!3d26.894497161892474!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db470729b0e25%3A0x6edc54a6a19c4736!2sAshima%20Electrotech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1682935928204!5m2!1sen!2sin"
              width={250}
              height={250}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="footer-section02 d-flax align-item-center justify-between">
          <div className="rights">
            <h5>@2010-2023 Ashima Electrotech, All Rights Reserved.</h5>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
