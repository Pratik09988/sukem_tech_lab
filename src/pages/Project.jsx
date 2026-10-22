import React from "react";
import { Link } from "react-router-dom";
import project1 from "../components/assets/project-slider-1.png";
import project2 from "../components/assets/project-slider-2.png";
import project3 from "../components/assets/project-slider-3.png";
import project4 from "../components/assets/project-slider-4.png";
import project5 from "../components/assets/project-slider-5.png";
import project6 from "../components/assets/project-slider-6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faLaptopCode,
    faMobileScreenButton,
    faLayerGroup,
    faGraduationCap,
    faUsers,
    faChartLine,
    faCloud,
    faCode,
    faServer,
    faDatabase
} from "@fortawesome/free-solid-svg-icons";

function Project() {
    const projects = [
        {
            id: "ecommerce",
            image: project1,
            number: "01",
            department: "E-COMMERCE",
            type: "WEB DEVELOPMENT",
            icon: faLaptopCode,
            title: "E-Commerce Platform",
            description: "Modern shopping platform with secure authentication, product management and responsive experience.",
            technologies: ["React", "Node.js", "MongoDB", "Bootstrap"]
        },
        {
            id: "bloodlink",
            image: project2,
            number: "02",
            department: "HEALTHCARE",
            type: "WEB APPLICATION",
            icon: faUsers,
            title: "BloodLink",
            description: "Digital blood donation platform connecting donors, patients and administrators.",
            technologies: ["React", "Node.js", "Express", "MongoDB"]
        },
        {
            id: "music-streaming",
            image: project3,
            number: "03",
            department: "MUSIC",
            type: "MUSIC PLATFORM",
            icon: faLayerGroup,
            title: "Music Streaming App",
            description: "Modern music experience with profiles, playlists, favorites and personalized content.",
            technologies: ["React", "Node.js", "MongoDB"]
        },
        {
            id: "learning-platform",
            image: project4,
            number: "04",
            department: "EDUCATION",
            type: "EDTECH PLATFORM",
            icon: faGraduationCap,
            title: "Learning Platform",
            description: "Interactive digital learning platform for courses, students and online education.",
            technologies: ["React", "JavaScript", "Bootstrap"]
        },
        {
            id: "business-crm",
            image: project5,
            number: "05",
            department: "BUSINESS",
            type: "CRM SOLUTION",
            icon: faChartLine,
            title: "Business CRM",
            description: "Smart CRM solution for managing customers, sales, leads and business operations.",
            technologies: ["React", "Express", "MongoDB"]
        },
        {
            id: "service-booking",
            image: project6,
            number: "06",
            department: "MOBILE",
            type: "MOBILE APPLICATION",
            icon: faMobileScreenButton,
            title: "Service Booking App",
            description: "Easy-to-use mobile application for discovering, booking and managing services.",
            technologies: ["React", "Node.js", "MongoDB"]
        }
    ];

    const projectCategories = [
        {
            icon: faLaptopCode,
            number: "01",
            title: "Web Development",
            text: "Modern websites and web applications built for performance and growth."
        },
        {
            icon: faMobileScreenButton,
            number: "02",
            title: "Mobile Applications",
            text: "User-friendly mobile experiences designed for modern businesses."
        },
        {
            icon: faLayerGroup,
            number: "03",
            title: "Business Solutions",
            text: "CRM, management and custom software solutions for business operations."
        },
        {
            icon: faChartLine,
            number: "04",
            title: "Data & Analytics",
            text: "Technology solutions that turn business data into useful insights."
        }
    ];

    return (
        <main className="project-page">
            <section className="project-hero">
                <div className="container">
                    <div className="project-hero-content">
                        <span className="section-label">OUR PROJECTS</span>
                        <h1>
                            Ideas <span>Into</span> Digital <span>Reality.</span>
                        </h1>
                    </div>
                </div>
            </section>

            <section className="project-category-section py-3">
                <div className="container py-5">
                    <div className="project-section-heading text-center">
                        <span className="section-label">WHAT WE BUILD</span>
                        <h2>Solutions For <span>Every Business.</span></h2>
                    </div>
                    <div className="row g-4 mt-4">
                        {projectCategories.map((category) => (
                            <div className="col-md-6 col-lg-3" key={category.number}>
                                <div className="project-category-card">
                                    <div className="project-category-top">
                                        <div className="project-category-icon">
                                            <FontAwesomeIcon icon={category.icon} />
                                        </div>
                                        <span>{category.number}</span>
                                    </div>
                                    <h3>{category.title}</h3>
                                    <p>{category.text}</p>
                                    <div className="project-category-line"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="projects-list-section py-5">
                <div className="container py-5">
                    <div className="projects-heading">
                        <div>
                            <span className="section-label">FEATURED WORK</span>
                            <h2>Projects We've <span>Built.</span></h2>
                        </div>
                    </div>
                    <div className="row g-4 mt-4">
                        {projects.map((project) => (
                            <div className="col-md-6 col-lg-4" key={project.id}>
                                <div className="project-detail-card">
                                    <div className="project-detail-image">
                                        <img src={project.image} alt={project.title} />
                                        <div className="project-detail-overlay">
                                            <span>{project.number}</span>
                                            <small>{project.department}</small>
                                        </div>
                                    </div>
                                    <div className="project-detail-content">
                                        <div className="project-detail-top">
                                            <div className="project-detail-icon">
                                                <FontAwesomeIcon icon={project.icon} />
                                            </div>
                                            <span>{project.type}</span>
                                        </div>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className="project-technologies">
                                            {project.technologies.map((technology) => (
                                                <span key={technology}>{technology}</span>
                                            ))}
                                        </div>
                                        <Link to={`/projects/${project.id}`} className="view-project-link text-decoration-none">
                                            View Project <FontAwesomeIcon icon={faArrowRight} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="project-tech-section py-5">
                <div className="container py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-5">
                            <span className="section-label">OUR TECHNOLOGY</span>
                            <h2>Built With <span>Modern Technology.</span></h2>
                            <p>We select technologies based on project requirements, performance, scalability and long-term maintainability.</p>
                        </div>
                        <div className="col-lg-7">
                            <div className="project-tech-grid">
                                <div className="project-tech-item">
                                    <FontAwesomeIcon icon={faCode} />
                                    <div>
                                        <strong>Frontend</strong>
                                        <span>React · JavaScript · Bootstrap</span>
                                    </div>
                                </div>
                                <div className="project-tech-item">
                                    <FontAwesomeIcon icon={faServer} />
                                    <div>
                                        <strong>Backend</strong>
                                        <span>Node.js · Express · PHP</span>
                                    </div>
                                </div>
                                <div className="project-tech-item">
                                    <FontAwesomeIcon icon={faDatabase} />
                                    <div>
                                        <strong>Database</strong>
                                        <span>MongoDB · MySQL · Firebase</span>
                                    </div>
                                </div>
                                <div className="project-tech-item">
                                    <FontAwesomeIcon icon={faCloud} />
                                    <div>
                                        <strong>Cloud & Tools</strong>
                                        <span>AWS · GitHub · Docker · REST API</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-cta-section py-5">
                <div className="container py-5">
                    <div className="project-cta-box">
                        <div>
                            <span className="project-cta-label">HAVE A PROJECT IN MIND?</span>
                            <h2>Let's Build Something <span>Great.</span></h2>
                            <p>Have an idea? Let's turn it into a powerful digital product.</p>
                        </div>
                        <Link to="/contact" className="project-cta-btn">
                            Start Your Project <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Project;