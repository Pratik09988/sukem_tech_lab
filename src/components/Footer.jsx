
import React from "react";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faLocationDot
} from "@fortawesome/free-solid-svg-icons";

import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <a href="#home" className="footer-logo">
                        <img src={logo} alt="Su-KEm Tech Lab" />
                    </a>

                    <p className="footer-description">
                        Su-KEm Tech Lab provides innovative IT solutions
                        to help businesses grow, improve productivity
                        and build a strong digital presence.
                    </p>


                    <Link to="/contact" className="footer-button">
                        Get Started <span>↗</span>
                    </Link>
                </div>

                <div className="footer-column">
                    <h3>Our Services</h3>
                    <Link to="/service">Web Development</Link>
                    <Link to="/service">App Development</Link>
                    <Link to="/service">UI/UX Design</Link>
                    <Link to="/service">Software Development</Link>
                    <Link to="/service">Cloud & Data Solutions</Link>
                    <Link to="/service">CRM Solutions</Link>
                </div>


                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/service">Services</Link>
                    <Link to="/OurTeam">Our Team</Link>
                    <Link to="/project">Projects</Link>
                    <Link to="/career">Careers</Link>
                    <Link to="/contact">Contact</Link>
                </div>


                <div className="footer-column footer-contact">
                    <h3>Contact Us</h3>

                    <div className="contact-item">
                        <span className="contact-icon email-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <div>
                            <h4>Email Us</h4>
                            <a href="mailto:your-email@example.com">
                                SuKemSupport@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="contact-icon phone-icon">
                            <FontAwesomeIcon icon={faPhone} />
                        </span>
                        <div>
                            <h4>Call Us</h4>
                            <a href="tel:+910000000000">+91 9876543211</a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="contact-icon address-icon">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                        <div>
                            <h4>Address</h4>
                            <p>123, Shreeji Complex, Near Crystal Mall, Kalawad Road, Rajkot, Gujarat – 360005.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © 2026 Su-KEm Tech Lab - All Rights Reserved.
                </p>

                <div className="footer-socials">
                    <a href="https://www.facebook.com/" aria-label="Facebook" className="facebook">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>

                    <a href="https://www.instagram.com/" aria-label="Instagram" className="instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>

                    <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="linkedin">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>

                    <a href="https://www.youtube.com/" aria-label="YouTube" className="youtube">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;