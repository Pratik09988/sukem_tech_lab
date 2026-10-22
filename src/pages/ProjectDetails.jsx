import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
    faArrowLeft,
    faArrowRight,
    faCode,
    faLock,
    faBoxOpen,
    faMobileScreenButton,
    faCartShopping,
    faImage,
    faComments,
    faShieldHalved,
    faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import project11 from "../components/assets/project-slider-1.png";
import project12 from "../components/assets/project-slider-1.1.png";
import project13 from "../components/assets/project-slider-1.2.png";
import project14 from "../components/assets/project-slider-1.3.png";
import project21 from "../components/assets/project-slider-2.png";
import project22 from "../components/assets/project-slider-2.1.png";
import project23 from "../components/assets/project-slider-2.2.png";
import project24 from "../components/assets/project-slider-2.3.png";
import project31 from "../components/assets/project-slider-3.png";
import project32 from "../components/assets/project-slider-3.1.png";
import project33 from "../components/assets/project-slider-3.2.png";
import project34 from "../components/assets/project-slider-3.3.png";
import project41 from "../components/assets/project-slider-4.png";
import project42 from "../components/assets/project-slider-4.1.png";
import project43 from "../components/assets/project-slider-4.2.png";
import project44 from "../components/assets/project-slider-4.3.png";
import project51 from "../components/assets/project-slider-5.png";
import project52 from "../components/assets/project-slider-5.1.png";
import project53 from "../components/assets/project-slider-5.2.png";
import project54 from "../components/assets/project-slider-5.3.png";
import project61 from "../components/assets/project-slider-6.png";
import project62 from "../components/assets/project-slider-6.1.png";
import project63 from "../components/assets/project-slider-6.2.png";
import project64 from "../components/assets/project-slider-6.3.png";

const projects = {
    ecommerce: {
        title: "E-Commerce Platform",
        category: "E-COMMERCE",
        images: [project11, project12, project13, project14],
        description: "Modern shopping platform with secure authentication, product management and responsive experience.",
        technologies: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "CSS"],
        features: [
            { icon: faLock, title: "Secure Authentication", text: "Safe and reliable user login" },
            { icon: faBoxOpen, title: "Product Management", text: "Easy product handling" },
            { icon: faMobileScreenButton, title: "Responsive Design", text: "Works on all devices" },
            { icon: faCartShopping, title: "Shopping Cart", text: "Simple and fast checkout" },
        ],
    },
    bloodlink: {
        title: "BloodLink",
        category: "HEALTHCARE",
        images: [project21, project22, project23, project24],
        description: "Digital blood donation platform connecting donors, patients and administrators.",
        technologies: ["React", "JavaScript", "CSS", "Node.js", "MongoDB"],
        features: [
            { icon: faLock, title: "User Authentication", text: "Secure login and registration" },
            { icon: faBoxOpen, title: "Blood Requests", text: "Create and manage requests" },
            { icon: faMobileScreenButton, title: "Responsive Design", text: "Accessible across devices" },
            { icon: faShieldHalved, title: "Donor Connection", text: "Connect patients with donors" },
        ],
    },
    "music-streaming": {
        title: "Music Streaming App",
        category: "MUSIC",
        images: [project31, project32, project33, project34],
        description: "Modern music experience with profiles, playlists, favorites and personalized content.",
        technologies: ["React", "JavaScript", "CSS", "Express.js", "Node.js"],
        features: [
            { icon: faLock, title: "User Accounts", text: "Personalized user experience" },
            { icon: faBoxOpen, title: "Music Library", text: "Explore songs and artists" },
            { icon: faMobileScreenButton, title: "Responsive Design", text: "Enjoy music on any screen" },
            { icon: faLayerGroup, title: "Organized Playlists", text: "Keep music easy to find" },
        ],
    },
    "learning-platform": {
        title: "Learning Platform",
        category: "EDUCATION",
        images: [project41,project42,project43,project44],
        description: "Interactive digital learning platform for courses, students and online education.",
        technologies: ["React", "JavaScript", "CSS", "MongoDB", "Express.js", "Node.js"],
        features: [
            { icon: faLock, title: "User Access", text: "A simple account experience" },
            { icon: faBoxOpen, title: "Course Management", text: "Organized learning content" },
            { icon: faMobileScreenButton, title: "Responsive Design", text: "Learn on any device" },
            { icon: faLayerGroup, title: "Easy Navigation", text: "Find courses with ease" },
        ],
    },
    "business-crm": {
        title: "Business CRM",
        category: "BUSINESS",
        images: [project51, project52, project53, project54],
        description: "Smart CRM solution for managing customers, sales, leads and business operations.",
        technologies: ["React", "MongoDB", "Express.js", "Node.js", "JavaScript", "CSS"],
        features: [
            { icon: faLock, title: "Secure Access", text: "Protected account access" },
            { icon: faBoxOpen, title: "Customer Management", text: "Organize customer records" },
            { icon: faMobileScreenButton, title: "Responsive Design", text: "Works across screen sizes" },
            { icon: faLayerGroup, title: "Workflow Management", text: "Keep tasks organized" },
        ],
    },
    "service-booking": {
        title: "Service Booking App",
        category: "MOBILE",
        images: [project61, project62, project63, project64],
        description: "Easy-to-use mobile application for discovering, booking and managing services.",
        technologies: ["MongoDB", "Express.js", "Node.js", "React", "JavaScript", "CSS"],
        features: [
            { icon: faLock, title: "Secure User Access", text: "Reliable account access" },
            { icon: faBoxOpen, title: "Service Listings", text: "Browse available services" },
            { icon: faMobileScreenButton, title: "Responsive Design", text: "Book from any device" },
            { icon: faLayerGroup, title: "Easy Booking", text: "Simple appointment flow" },
        ],
    },
};

function ProjectDetails() {
    const { id } = useParams();
    const project = projects[id];
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (!selectedImage) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") setSelectedImage(null);
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [selectedImage]);

    if (!project) {
        return (
            <main className="project-details not-found">
                <div className="project-details-container">
                    <h1>Project Not Found</h1>
                    <p>Please check the project link and try again.</p>
                    <Link to="/" className="project-back-link">
                        <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="project-details">
            <div className="project-details-container">
                <div className="project-details-layout">
                    <section className="project-about">
                        <div className="project-section-label">
                            <span className="project-label-line"></span>
                            About the Project
                        </div>
                        <h1>{project.title}</h1>
                        <h2>Built for a better {project.category.toLowerCase()} experience.</h2>
                        <p className="project-description">{project.description}</p>
                        <div className="project-features">
                            {project.features.map((feature) => (
                                <div className="project-feature" key={feature.title}>
                                    <div className="project-feature-icon">
                                        <FontAwesomeIcon icon={feature.icon} />
                                    </div>
                                    <div>
                                        <h3>{feature.title}</h3>
                                        <p>{feature.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <aside className="project-sidebar">
                        <h3 className="project-card-heading">
                            <FontAwesomeIcon icon={faCode} /> Technologies Used
                        </h3>
                        <div className="project-tech-list">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="project-tech-tag">
                                    {tech === "React" ? "⚛️" : tech === "JavaScript" ? "🟨" : tech === "CSS" ? "🎨" : tech === "Node.js" ? "🟢" : tech === "Express.js" ? "🚀" : "🍃"} {tech}
                                </span>
                            ))}
                        </div>
                        <div className="project-sidebar-divider"></div>
                        <h3 className="project-card-heading">
                            <FontAwesomeIcon icon={faImage} /> Project Gallery
                        </h3>
                        <div className="project-gallery">
                            {project.images.map((image, index) => (
                                <div className="project-gallery-item" key={image}>
                                    <img
                                        src={image}
                                        alt={`${project.title} preview ${index + 1}`}
                                        onClick={() => setSelectedImage(image)}
                                    />
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>

                <section className="project-contact-banner">
                    <div className="project-contact-icon">
                        <FontAwesomeIcon icon={faComments} />
                    </div>
                    <div className="project-contact-text">
                        <h3>Want to work on a similar project?</h3>
                        <p>Let's turn your idea into a real product.</p>
                    </div>
                    <Link to="/contact" className="project-contact-link">
                        Contact Us <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </section>
            </div>

            {selectedImage && (
                <div
                    className="project-image-modal"
                    onClick={() => setSelectedImage(null)}
                    role="presentation"
                >
                    <button
                        type="button"
                        className="project-image-close"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close image"
                    >
                        &times;
                    </button>
                    <img
                        src={selectedImage}
                        alt={`${project.title} full preview`}
                        onClick={(event) => event.stopPropagation()}
                    />
                </div>
            )}
        </main>
    );
}

export default ProjectDetails;