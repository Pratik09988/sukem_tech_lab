import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import slider1 from "../components/assets/home-slider-1.png";
import slider2 from "../components/assets/home-slider-2.png";
import slider3 from "../components/assets/home-slider-3.png";
import client1 from "../components/assets/client-slider-1.jpg";
import client2 from "../components/assets/client-slider-2.jpg";
import client3 from "../components/assets/client-slider-3.jpg";
import client4 from "../components/assets/client-slider-4.jpg";
import client5 from "../components/assets/client-slider-5.jpg";
import client6 from "../components/assets/client-slider-6.png";
import client7 from "../components/assets/client-slider-7.png";
import project1 from "../components/assets/project-slider-1.png";
import project2 from "../components/assets/project-slider-2.png";
import project3 from "../components/assets/project-slider-3.png";
import project4 from "../components/assets/project-slider-4.png";
import project5 from "../components/assets/project-slider-5.png";
import project6 from "../components/assets/project-slider-6.png";
import Review1 from "../components/assets/Review-slider-1.png";
import Review2 from "../components/assets/Review-slider-2.png";
import Review3 from "../components/assets/Review-slider-3.png";
import Review4 from "../components/assets/Review-slider-4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faPenRuler,
    faBrain,
    faPaperPlane,
    faCircleCheck,
    faUpload,
    faServer,
    faArrowRight,
    faCloud,
    faChartLine,
    faDatabase,
    faCode,
    faMobileScreenButton,
    faLaptopCode,
    faCheck,
    faUsers,
    faLightbulb,
    faRocket,
    faClock,
    faHeadset,
    faStar,
    faAward,
    faShieldHalved,
    faGear,
    faLayerGroup,
    faPhone,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";

function Home() {
    const slides = [slider1, slider2, slider3];

    const formRef = useRef(null);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [clientIndex, setClientIndex] = useState(0);
    const [clientTransition, setClientTransition] = useState(true);
    const [projectIndex, setProjectIndex] = useState(0);
    const [projectTransition, setProjectTransition] = useState(true);
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [testimonialTransition, setTestimonialTransition] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        projectPdf: null,
        message: ""
    });

    const clientLogos = [
        client1,
        client2,
        client3,
        client4,
        client5,
        client6,
        client7
    ];

    const projects = [
        {
            id: "ecommerce",
            image: project1,
            number: "01",
            department: "E-COMMERCE",
            type: "WEB DEVELOPMENT",
            title: "E-Commerce Platform",
            description:
                "Modern shopping platform with secure authentication, product management and responsive experience.",
        },
        {
            id: "bloodlink",
            image: project2,
            number: "02",
            department: "HEALTHCARE",
            type: "WEB APPLICATION",
            title: "BloodLink",
            description:
                "Digital blood donation platform connecting donors, patients and administrators.",
        },
        {
            id: "music-streaming",
            image: project3,
            number: "03",
            department: "MUSIC",
            type: "MUSIC PLATFORM",
            title: "Music Streaming App",
            description:
                "Modern music experience with profiles, playlists, favorites and personalized content.",
        },
        {
            id: "learning-platform",
            image: project4,
            number: "04",
            department: "EDUCATION",
            type: "EDTECH PLATFORM",
            title: "Learning Platform",
            description:
                "Interactive digital learning platform for courses, students and online education.",
        },
        {
            id: "business-crm",
            image: project5,
            number: "05",
            department: "BUSINESS",
            type: "CRM SOLUTION",
            title: "Business CRM",
            description:
                "Smart CRM solution for managing customers, sales, leads and business operations.",
        },
        {
            id: "service-booking",
            image: project6,
            number: "06",
            department: "MOBILE",
            type: "MOBILE APPLICATION",
            title: "Service Booking App",
            description:
                "Easy-to-use mobile application for discovering, booking and managing services.",
        },
    ];

    const testimonialImages = [
        Review1,
        Review2,
        Review3,
        Review4
    ];

    const contactDetails = [
        {
            label: "Email Address",
            value: "info@sukemtechlab.com",
            description: "Send us your project enquiry",
            icon: faEnvelope,
            link: "mailto:info@sukemtechlab.com"
        },
        {
            label: "Phone Number",
            value: "+910987654321",
            description: "Contact us for your requirements",
            icon: faPhone,
            link: "tel:+910987654321"
        },
        {
            label: "Our Location",
            value: "Gujarat, India",
            description: "Serving clients with digital solutions",
            icon: faArrowRight,
            link: null
        },
        {
            label: "Working Hours",
            value: "Mon – Sat",
            description: "Reach out during business hours.",
            icon: faClock,
            link: null
        }
    ];

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2000);

        return () => clearInterval(sliderInterval);
    }, [slides.length]);

    useEffect(() => {
        const clientInterval = setInterval(() => {
            setClientIndex((prev) => prev + 1);
        }, 2000);

        return () => clearInterval(clientInterval);
    }, []);

    useEffect(() => {
        if (clientIndex !== clientLogos.length) {
            return;
        }

        const resetTimer = setTimeout(() => {
            setClientTransition(false);
            setClientIndex(0);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setClientTransition(true);
                });
            });
        }, 700);

        return () => clearTimeout(resetTimer);
    }, [clientIndex, clientLogos.length]);

    useEffect(() => {
        const projectInterval = setInterval(() => {
            setProjectIndex((prev) => prev + 1);
        }, 2000);

        return () => clearInterval(projectInterval);
    }, []);

    useEffect(() => {
        if (projectIndex !== projects.length) {
            return;
        }

        const resetTimer = setTimeout(() => {
            setProjectTransition(false);
            setProjectIndex(0);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setProjectTransition(true);
                });
            });
        }, 700);

        return () => clearTimeout(resetTimer);
    }, [projectIndex, projects.length]);

    useEffect(() => {
        const testimonialInterval = setInterval(() => {
            setTestimonialIndex((prev) => prev + 1);
        }, 2500);

        return () => clearInterval(testimonialInterval);
    }, []);

    useEffect(() => {
        if (testimonialIndex !== testimonialImages.length) {
            return;
        }

        const resetTimer = setTimeout(() => {
            setTestimonialTransition(false);
            setTestimonialIndex(0);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setTestimonialTransition(true);
                });
            });
        }, 700);

        return () => clearTimeout(resetTimer);
    }, [testimonialIndex, testimonialImages.length]);

    const nextTestimonial = () => {
        setTestimonialTransition(true);

        setTestimonialIndex((prev) => {
            if (prev >= testimonialImages.length) {
                return 1;
            }

            return prev + 1;
        });
    };

    const prevTestimonial = () => {
        setTestimonialTransition(true);

        setTestimonialIndex((prev) => {
            if (prev <= 0) {
                return testimonialImages.length - 1;
            }

            return prev - 1;
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        setSubmitStatus("");
        setSubmitted(false);
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0] || null;

        if (file && file.type !== "application/pdf") {
            e.target.value = "";

            setFormData((prev) => ({
                ...prev,
                projectPdf: null
            }));

            setSubmitStatus("error");
            setSubmitted(false);
            return;
        }

        if (file && file.size > 5 * 1024 * 1024) {
            e.target.value = "";

            setFormData((prev) => ({
                ...prev,
                projectPdf: null
            }));

            setSubmitStatus("file-error");
            setSubmitted(false);
            return;
        }

        setFormData((prev) => ({
            ...prev,
            projectPdf: file
        }));

        setSubmitStatus("");
        setSubmitted(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isSending) return;

        setIsSending(true);
        setSubmitted(false);
        setSubmitStatus("");

        const form = formRef.current;
        const pdfInput = form.querySelector('input[type="file"]');

        try {
            if (pdfInput) {
                pdfInput.disabled = true;
            }

            await emailjs.sendForm(
                "service_di75fjh",
                "template_xy9upwc",
                form,
                {
                    publicKey: "apPzhlA5W-t0BuQIN"
                }
            );

            setSubmitted(true);
            setSubmitStatus("success");

            setFormData({
                name: "",
                email: "",
                phone: "",
                service: "",
                projectPdf: null,
                message: ""
            });

            form.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            setSubmitStatus("error");
        } finally {
            if (pdfInput) {
                pdfInput.disabled = false;
            }

            setIsSending(false);
        }
    };

    return (
        <main>
            <section className="hero-image-slider" id="home">
                <div className="hero-slider-wrapper">
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide}
                            className={`hero-slider-image ${currentSlide === index ? "active" : ""}`}
                            alt={`Su-KEm Tech Lab Slider ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            <section className="award-section">
                <div className="container">
                    <div className="award-wrapper">
                        <div className="award-icon">
                            <FontAwesomeIcon icon={faAward} />
                        </div>
                        <div className="award-content">
                            <span>ACHIEVEMENTS & RECOGNITION</span>
                            <h3>Recognized For Digital Excellence</h3>
                            <p>Delivering innovative digital solutions with a strong focus on quality, technology and customer success.</p>
                        </div>
                        <div className="award-items">
                            <div className="award-item">
                                <FontAwesomeIcon icon={faAward} />
                                <div>
                                    <strong>Digital Excellence</strong>
                                    <span>Recognized for Technology & Quality</span>
                                </div>
                            </div>
                            <div className="award-item">
                                <FontAwesomeIcon icon={faStar} />
                                <div>
                                    <strong>Innovation & Growth</strong>
                                    <span>Recognized for Creative Solutions</span>
                                </div>
                            </div>
                            <div className="award-item">
                                <FontAwesomeIcon icon={faRocket} />
                                <div>
                                    <strong>Business Impact</strong>
                                    <span>Delivering Solutions That Create Value</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-about py-2" id="about">
                <div className="container py-2">
                    <div className="about-main row align-items-center g-5 mt-4">
                        <div className="col-lg-5">
                            <div className="about-info-card">
                                <div className="about-info-header">
                                    <div className="about-info-icon">
                                        <FontAwesomeIcon icon={faRocket} />
                                    </div>
                                    <div>
                                        <span>SU-KEM TECH LAB</span>
                                        <h4>Technology That Moves Business Forward</h4>
                                    </div>
                                </div>
                                <div className="about-highlight">
                                    <div>
                                        <strong>01</strong>
                                        <span>Understand</span>
                                    </div>
                                    <div>
                                        <strong>02</strong>
                                        <span>Build</span>
                                    </div>
                                    <div>
                                        <strong>03</strong>
                                        <span>Grow</span>
                                    </div>
                                </div>
                                <div className="about-mini-list">
                                    <div>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span>Modern Technology</span>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span>Business-Focused Solutions</span>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span>Scalable & Secure Products</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="about-text-content">
                                <span className="small-title">WHAT WE DO</span>
                                <h3>We turn your{" "}ideas into digital solutions.</h3>
                                <p>From websites and web applications to cloud, software and digital solutions, we help businesses build technology that is useful, scalable and easy to use.</p>
                                <div className="about-feature-grid">
                                    <div className="about-feature">
                                        <FontAwesomeIcon icon={faLightbulb} />
                                        <div>
                                            <strong>Ideas</strong>
                                            <span>Understand your business goals.</span>
                                        </div>
                                    </div>
                                    <div className="about-feature">
                                        <FontAwesomeIcon icon={faCode} />
                                        <div>
                                            <strong>Technology</strong>
                                            <span>Build with modern technologies.</span>
                                        </div>
                                    </div>
                                    <div className="about-feature">
                                        <FontAwesomeIcon icon={faRocket} />
                                        <div>
                                            <strong>Launch</strong>
                                            <span>Deliver reliable digital products.</span>
                                        </div>
                                    </div>
                                    <div className="about-feature">
                                        <FontAwesomeIcon icon={faChartLine} />
                                        <div>
                                            <strong>Growth</strong>
                                            <span>Scale and improve with your business.</span>
                                        </div>
                                    </div>
                                </div>
                                <a href="#contact" className="red-text-link">Let's Build Together <FontAwesomeIcon icon={faArrowRight} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="what-we-do py-5" id="services">
                <div className="container py-5">
                    <div className="section-heading">
                        <div>
                            <span className="section-label">OUR SERVICES</span>
                            <h2>Technology Solutions{" "}Built For Business.</h2>
                        </div>
                    </div>
                    <div className="row g-4 mt-4">
                        {[
                            {
                                icon: faLaptopCode,
                                number: "01",
                                title: "Web Development",
                                text: "Fast, responsive and professional websites built to strengthen your online presence."
                            },
                            {
                                icon: faMobileScreenButton,
                                number: "02",
                                title: "App Development",
                                text: "Modern mobile applications designed for performance, usability and business growth."
                            },
                            {
                                icon: faLayerGroup,
                                number: "03",
                                title: "CRM Solutions",
                                text: "Smart CRM systems that help manage customers, sales, leads and business operations."
                            },
                            {
                                icon: faCloud,
                                number: "04",
                                title: "Cloud Solutions",
                                text: "Secure and scalable cloud solutions that keep your business connected and flexible."
                            },
                            {
                                icon: faDatabase,
                                number: "05",
                                title: "Software Solutions",
                                text: "Custom software designed around your business processes, requirements and goals."
                            },
                            {
                                icon: faChartLine,
                                number: "06",
                                title: "Data & Analytics",
                                text: "Turn business data into useful insights for smarter decisions and better performance."
                            }
                        ].map((service) => (
                            <div className="col-md-6 col-lg-4" key={service.number}>
                                <div className="what-card">
                                    <div className="what-card-top">
                                        <div className="what-icon">
                                            <FontAwesomeIcon icon={service.icon} />
                                        </div>
                                        <span>{service.number}</span>
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.text}</p>
                                    <a href="/service">Explore Service <FontAwesomeIcon icon={faArrowRight} /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="clients-section py-5">
                <div className="container py-5">
                    <div className="clients-heading text-center">
                        <span className="section-label">OUR CLIENTS</span>
                        <h2>Companies That{" "}Trust Us.</h2>
                        <p>We work with businesses and organizations to create reliable digital solutions and long-term technology partnerships.</p>
                    </div>
                    <div className="client-slider mt-5">
                        <div
                            className="client-track"
                            style={{
                                "--client-index": clientIndex,
                                transition: clientTransition ? "transform 0.7s ease-in-out" : "none"
                            }}
                        >
                            {[...clientLogos, ...clientLogos.slice(0, 4)].map((logo, index) => (
                                <div className="client-slide" key={`${index}-${logo}`}>
                                    <img
                                        src={logo}
                                        alt={`Su-KEm Tech Lab Client ${(index % clientLogos.length) + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="technology-section py-5">
                <div className="container py-5">
                    <div className="section-heading-center">
                        <span className="section-label">TECHNOLOGY STACK</span>
                        <h2>Our Technology{" "}Journey.</h2>
                        <p>We combine the right technologies to create fast, scalable and future-ready digital solutions.</p>
                    </div>
                    <div className="technology-timeline">
                        <div className="technology-line"></div>
                        {[
                            {
                                icon: faCode,
                                number: "01",
                                title: "Frontend",
                                text: "Modern interfaces & experiences",
                                tags: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind"]
                            },
                            {
                                icon: faServer,
                                number: "02",
                                title: "Backend",
                                text: "Powerful APIs & server solutions",
                                tags: ["Node.js", "Express", "PHP", "Laravel", "Python"]
                            },
                            {
                                icon: faDatabase,
                                number: "03",
                                title: "Database",
                                text: "Reliable data management",
                                tags: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"]
                            },
                            {
                                icon: faCloud,
                                number: "04",
                                title: "Cloud & DevOps",
                                text: "Deployment & scalable infrastructure",
                                tags: ["AWS", "Azure", "Docker", "GitHub", "CI/CD"]
                            },
                            {
                                icon: faMobileScreenButton,
                                number: "05",
                                title: "Mobile",
                                text: "Cross-platform mobile applications",
                                tags: ["React Native", "Flutter", "Android", "Kotlin"]
                            },
                            {
                                icon: faBrain,
                                number: "06",
                                title: "AI & Data",
                                text: "Intelligent digital solutions",
                                tags: ["Python", "AI", "Machine Learning", "OpenAI", "Power BI"]
                            },
                            {
                                icon: faPenRuler,
                                number: "07",
                                title: "Tools & Design",
                                text: "Design & development tools",
                                tags: ["Figma", "Canva", "VS Code", "Postman", "Jira"]
                            },
                            {
                                icon: faLayerGroup,
                                number: "08",
                                title: "Other Technologies",
                                text: "Additional technologies we work with",
                                tags: ["WordPress", "Shopify", "WooCommerce", "GraphQL", "Vite"]
                            }
                        ].map((tech) => (
                            <div className="technology-timeline-item" key={tech.number}>
                                <div className="technology-dot">
                                    <FontAwesomeIcon icon={tech.icon} />
                                </div>
                                <div className="technology-timeline-card">
                                    <div className="technology-card-number">{tech.number}</div>
                                    <div className="technology-card-content">
                                        <h3>{tech.title}</h3>
                                        <p>{tech.text}</p>
                                        <div className="technology-tags">
                                            {tech.tags.map((tag) => (
                                                <span key={tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <FontAwesomeIcon className="technology-card-arrow" icon={faArrowRight} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="home-projects py-5" id="project">
                <div className="container py-5">
                    <div className="section-heading">
                        <div>
                            <span className="section-label">OUR WORK</span>
                            <h2>Featured{" "}Projects.</h2>
                        </div>
                        <a href="#contact" className="red-text-link">Start Your Project <FontAwesomeIcon icon={faArrowRight} /></a>
                    </div>
                    <div className="project-carousel mt-5">
                        <div
                            className="project-track"
                            style={{
                                transform: `translateX(-${projectIndex * 10}%)`,
                                transition: projectTransition ? "transform 0.7s ease-in-out" : "none"
                            }}
                        >
                            {[...projects, ...projects.slice(0, 4)].map((project, index) => (
                                <div className="project-slide" key={`${project.number}-${index}`}>
                                    <div className="project-card">
                                        <div className="project-image">
                                            <img src={project.image} alt={project.title} />
                                            <div className="project-image-overlay">
                                                <span>{project.number}</span>
                                                <small>{project.department}</small>
                                            </div>
                                        </div>
                                        <div className="project-content">
                                            <span className="project-type">{project.type}</span>
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>
                                            <Link to={`/projects/${project.id}`} className="view-project-link">View Project →</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonial-section py-5" id="reviews">
                <div className="container py-5">
                    <div className="testimonial-heading-row">
                        <div className="testimonial-heading">
                            <span className="section-label">CLIENTS REVIEW</span>
                            <h2>Here's what our amazing <br /> clients are <span>{" "}saying.</span></h2>
                        </div>
                        <div className="testimonial-arrows">
                            <button type="button" onClick={prevTestimonial}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <button type="button" onClick={nextTestimonial}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>
                    <div className="testimonial-slider">
                        <div
                            className="testimonial-track"
                            style={{
                                "--testimonial-index": testimonialIndex,
                                transition: testimonialTransition ? "transform 0.7s ease-in-out" : "none"
                            }}
                        >
                            {[...testimonialImages, ...testimonialImages.slice(0, 3)].map((image, index) => (
                                <div className="testimonial-slide" key={`${index}-${image}`}>
                                    <div className="testimonial-image-card">
                                        <img
                                            src={image}
                                            alt={`Client Review ${(index % testimonialImages.length) + 1}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-us py-5">
                <div className="container py-5">
                    <div className="section-heading why-heading">
                        <div>
                            <span className="section-label">WHY SU-KEM</span>
                            <h2>Why Businesses <span> Choose Us.</span></h2>
                        </div>
                    </div>
                    <div className="row g-4 mt-4">
                        {[
                            {
                                number: "01",
                                icon: faLightbulb,
                                title: "Smart Solutions",
                                text: "Practical and innovative solutions designed around your real business needs."
                            },
                            {
                                number: "02",
                                icon: faRocket,
                                title: "Fast Execution",
                                text: "Agile development and efficient processes help us deliver faster without compromising quality."
                            },
                            {
                                number: "03",
                                icon: faShieldHalved,
                                title: "Secure & Scalable",
                                text: "Reliable technology built to stay secure, flexible and ready for future growth."
                            },
                            {
                                number: "04",
                                icon: faHeadset,
                                title: "Dedicated Support",
                                text: "We stay connected with you and provide continuous support even after launch."
                            }
                        ].map((item) => (
                            <div className="col-md-6 col-lg-3" key={item.title}>
                                <div className="why-modern-card">
                                    <div className="why-card-top">
                                        <span className="why-number">{item.number}</span>
                                        <div className="why-modern-icon">
                                            <FontAwesomeIcon icon={item.icon} />
                                        </div>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="stats-section py-5">
                <div className="container py-4">
                    <div className="stats-heading text-center">
                        <span className="stats-label">OUR IMPACT</span>
                        <h2>Numbers That Speak For Us.</h2>
                        <p>Our experience, technology and commitment reflected through measurable results.</p>
                    </div>
                    <div className="row g-4 mt-4">
                        {[
                            {
                                number: "25+",
                                title: "Projects Delivered"
                            },
                            {
                                number: "15+",
                                title: "Happy Clients"
                            },
                            {
                                number: "10+",
                                title: "Technologies"
                            },
                            {
                                number: "98%",
                                title: "Client Satisfaction"
                            }
                        ].map((item) => (
                            <div className="col-6 col-lg-3" key={item.title}>
                                <div className="big-stat">
                                    <strong>{item.number}</strong>
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="stats-bottom mt-5">
                        <div>
                            <span className="stats-icon">
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span>Quality Delivery</span>
                        </div>
                        <div>
                            <span className="stats-icon">
                                <FontAwesomeIcon icon={faUsers} />
                            </span>
                            <span>Long-Term Partnerships</span>
                        </div>
                        <div>
                            <span className="stats-icon">
                                <FontAwesomeIcon icon={faGear} />
                            </span>
                            <span>Modern Development</span>
                        </div>
                        <div>
                            <span className="stats-icon">
                                <FontAwesomeIcon icon={faRocket} />
                            </span>
                            <span>Business Growth</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-main-section" id="contact">
                <div className="container">
                    <div className="contact-section-heading">
                        <span className="contact-section-label">GET IN TOUCH</span>
                        <h2>
                            We'd Love to
                            <span> Hear From You.</span>
                        </h2>
                    </div>

                    <div className="row g-4 contact-main-row">
                        <div className="col-lg-5">
                            <div className="contact-info-panel">
                                <span className="contact-panel-label">
                                    CONTACT INFORMATION
                                </span>

                                <h3>Let's start a conversation.</h3>

                                <p className="contact-panel-description">
                                    Choose the easiest way to reach us, or send your
                                    project details through the form.
                                </p>

                                <div className="contact-detail-list">
                                    {contactDetails.map((item) => (
                                        <div
                                            className="contact-detail-item"
                                            key={item.label}
                                        >
                                            <div className="contact-detail-icon">
                                                <FontAwesomeIcon icon={item.icon} />
                                            </div>

                                            <div className="contact-detail-text">
                                                <span>{item.label}</span>

                                                {item.link ? (
                                                    <a href={item.link}>{item.value}</a>
                                                ) : (
                                                    <strong>{item.value}</strong>
                                                )}

                                                <p>{item.description}</p>
                                            </div>

                                            <FontAwesomeIcon
                                                className="contact-detail-arrow"
                                                icon={faArrowRight}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="contact-info-bottom">
                                    <div className="contact-info-bottom-icon">
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </div>

                                    <div>
                                        <strong>Have a project in mind?</strong>
                                        <p>
                                            Share your idea. Let's explore what's possible.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="contact-form-panel">
                                <div className="contact-form-heading">
                                    <div>
                                        <span className="contact-section-label">
                                            PROJECT ENQUIRY
                                        </span>

                                        <h3>Tell Us About Your Project</h3>

                                        <p>
                                            Fill in the details below to help us understand
                                            what you need.
                                        </p>
                                    </div>

                                    <div className="contact-form-heading-icon">
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </div>
                                </div>

                                {submitted && submitStatus === "success" && (
                                    <div
                                        className="contact-success-message"
                                        role="status"
                                    >
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                        <div>
                                            <strong>Enquiry sent successfully!</strong>
                                            <p>
                                                Thank you for contacting us. We will get
                                                back to you soon.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {(submitStatus === "error" || submitStatus === "file-error") && (
                                    <div
                                        className="contact-success-message"
                                        role="alert"
                                    >
                                        <div>
                                            <strong>
                                                {submitStatus === "file-error"
                                                    ? "Invalid PDF file."
                                                    : "Unable to send your enquiry."}
                                            </strong>
                                            <p>
                                                {submitStatus === "file-error"
                                                    ? "Please upload a PDF file smaller than 5 MB."
                                                    : "Please try again or contact us directly by email."}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <form
                                    ref={formRef}
                                    className="contact-page-form"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <label htmlFor="contact-name">
                                                Full Name <span>*</span>
                                            </label>
                                            <input
                                                id="contact-name"
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                autoComplete="name"
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="contact-email">
                                                Email Address <span>*</span>
                                            </label>
                                            <input
                                                id="contact-email"
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="you@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                autoComplete="email"
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="contact-phone">
                                                Phone Number
                                            </label>
                                            <input
                                                id="contact-phone"
                                                type="tel"
                                                name="phone"
                                                className="form-control"
                                                placeholder="+91 00000 00000"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                autoComplete="tel"
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="contact-service">
                                                Service Required <span>*</span>
                                            </label>
                                            <select
                                                id="contact-service"
                                                name="service"
                                                className="form-select"
                                                value={formData.service}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="" disabled>
                                                    Select a service
                                                </option>
                                                <option value="Web Development">
                                                    Web Development
                                                </option>
                                                <option value="App Development">
                                                    App Development
                                                </option>
                                                <option value="CRM Solutions">
                                                    CRM Solutions
                                                </option>
                                                <option value="Cloud Solutions">
                                                    Cloud Solutions
                                                </option>
                                                <option value="Custom Software">
                                                    Custom Software
                                                </option>
                                                <option value="Data Analytics">
                                                    Data Analytics
                                                </option>
                                                <option value="UI/UX Design">
                                                    UI/UX Design
                                                </option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="contact-pdf">
                                                Upload Project Brief (PDF)
                                            </label>

                                            <div className="contact-file-upload">
                                                <input
                                                    id="contact-pdf"
                                                    type="file"
                                                    name="projectPdf"
                                                    className="contact-file-input"
                                                    accept=".pdf,application/pdf"
                                                    onChange={handleFileChange}
                                                />

                                                <label
                                                    htmlFor="contact-pdf"
                                                    className="contact-file-label"
                                                >
                                                    <span className="contact-file-icon">
                                                        <FontAwesomeIcon icon={faPaperPlane} />
                                                    </span>

                                                    <span className="contact-file-text">
                                                        <strong>
                                                            {formData.projectPdf
                                                                ? formData.projectPdf.name
                                                                : "Click to upload your PDF"}
                                                        </strong>
                                                        <small>
                                                            PDF format · Maximum size 5 MB
                                                        </small>
                                                    </span>

                                                    <span className="contact-file-button">
                                                        <FontAwesomeIcon icon={faUpload} />
                                                        Browse
                                                    </span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="contact-message">
                                                Project Details <span>*</span>
                                            </label>
                                            <textarea
                                                id="contact-message"
                                                name="message"
                                                className="form-control"
                                                rows="5"
                                                placeholder="Tell us about your idea, requirements, or challenges..."
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-12">
                                            <button
                                                type="submit"
                                                className="contact-page-submit"
                                                disabled={isSending}
                                            >
                                                {isSending
                                                    ? "Sending..."
                                                    : "Send Your Enquiry"}
                                                {!isSending && (
                                                    <span>
                                                        <FontAwesomeIcon icon={faArrowRight} />
                                                    </span>
                                                )}
                                            </button>

                                            <p className="contact-form-privacy">
                                                <FontAwesomeIcon icon={faCircleCheck} />
                                                Your details are used to respond to your enquiry.
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;