import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLaptopCode, faMobileScreenButton, faLayerGroup, faCloud, faDatabase, faChartLine, faCheck, faLightbulb, faCode, faRocket, faHeadset, faMagnifyingGlass, faPenRuler,faClipboardCheck, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

function Service() {
    const services = [
        {
            number: "01",
            icon: faLaptopCode,
            title: "Web Development",
            short: "Modern websites and web applications built around your business goals.",
            description: "We create responsive, secure and high-performance websites and web applications that provide a smooth experience across desktop, tablet and mobile devices.",
            features: [
                "Business Websites",
                "E-Commerce Platforms",
                "Custom Web Applications",
                "Admin Dashboards",
                "API Integration"
            ]
        },
        {
            number: "02",
            icon: faMobileScreenButton,
            title: "App Development",
            short: "Powerful mobile applications designed for usability and growth.",
            description: "We develop user-friendly mobile applications that help businesses connect with customers, simplify operations and create better digital experiences.",
            features: [
                "Android Applications",
                "Cross-Platform Apps",
                "Business Applications",
                "API Integration",
                "App Maintenance"
            ]
        },
        {
            number: "03",
            icon: faLayerGroup,
            title: "CRM Solutions",
            short: "Smart systems to manage customers, sales and business operations.",
            description: "Our CRM solutions help businesses organize customer information, manage leads, track sales and improve communication through a centralized platform.",
            features: [
                "Customer Management",
                "Lead Management",
                "Sales Tracking",
                "Business Automation",
                "Reports & Dashboards"
            ]
        },
        {
            number: "04",
            icon: faCloud,
            title: "Cloud Solutions",
            short: "Secure and scalable cloud infrastructure for modern businesses.",
            description: "We help businesses use cloud technology to improve flexibility, scalability, accessibility and reliability while keeping their digital infrastructure secure.",
            features: [
                "Cloud Deployment",
                "Cloud Migration",
                "Application Hosting",
                "Cloud Integration",
                "Infrastructure Management"
            ]
        },
        {
            number: "05",
            icon: faDatabase,
            title: "Software Solutions",
            short: "Custom software designed around your unique business processes.",
            description: "We build customized software solutions that solve specific business problems, automate repetitive processes and improve operational efficiency.",
            features: [
                "Custom Software",
                "Business Automation",
                "Management Systems",
                "API Development",
                "System Integration"
            ]
        },
        {
            number: "06",
            icon: faChartLine,
            title: "Data & Analytics",
            short: "Turn your business data into meaningful insights and decisions.",
            description: "We help businesses understand their data through dashboards, reports and analytics solutions that support better decisions and business performance.",
            features: [
                "Data Analytics",
                "Business Dashboards",
                "Data Visualization",
                "Reports & Insights",
                "Performance Tracking"
            ]
        }
    ];

    const technologies = [
        "React",
        "Node.js",
        "JavaScript",
        "MongoDB",
        "MySQL",
        "PHP",
        "AWS",
        "Firebase",
        "Python",
        "Power BI",
        "Docker",
        "GitHub",
        "REST API",
        "Express.js",
        "Bootstrap"
    ];

    return (
        <main>
            <section className="services-hero about-hero">
                <div className="services-hero-overlay about-hero-overlay"></div>
                <div className="container services-hero-container about-hero-content">
                    <h1>Su-Kem Services </h1>
                    <div className="about-breadcrumb">
                        <span>Home</span>
                        <span className="breadcrumb-dot">•</span>
                        <span>Our Services</span>
                    </div>
                </div>
            </section>
            <section className="services-intro py-5">
                <div className="container py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-5">
                            <span className="section-label">
                                WHAT WE DO
                            </span>
                            <h2 className="services-section-title">
                                We build technology
                                <span> that works for you.</span>
                            </h2>
                        </div>
                        <div className="col-lg-7">
                            <p className="services-intro-text">
                                At Su-Kem Tech Lab, we combine technology,
                                creativity and business understanding to
                                create digital solutions that solve real
                                business problems. Our goal is not simply
                                to build software, but to create technology
                                that makes everyday business operations
                                easier, faster and more effective.
                            </p>
                            <p className="services-intro-text">
                                From websites and mobile applications to
                                cloud platforms, CRM systems, custom
                                software and data solutions, we work closely
                                with businesses to understand their needs
                                and deliver practical digital products that
                                can grow with them over time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-list-section py-5" id="services-list">
                <div className="container py-5">
                    <div className="services-heading">
                        <div>
                            <span className="section-label">
                                WHAT WE OFFER
                            </span>
                            <h2 className="services-section-title">
                                Our Core
                                <span> Services.</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row g-4 mt-4">
                        {services.map((service) => (
                            <div className="col-md-6 col-lg-4" key={service.number}>
                                <div className="service-detail-card">
                                    <div className="service-card-header">
                                        <div className="service-detail-icon">
                                            <FontAwesomeIcon icon={service.icon} />
                                        </div>
                                        <span className="service-detail-number">
                                            {service.number}
                                        </span>
                                    </div>
                                    <h3>
                                        {service.title}
                                    </h3>
                                    <p className="service-short-text">
                                        {service.short}
                                    </p>
                                    <p className="service-description">
                                        {service.description}
                                    </p>
                                    <div className="service-feature-list">
                                        {service.features.map((feature) => (
                                            <div className="service-feature" key={feature}>
                                                <FontAwesomeIcon icon={faCheck} />
                                                <span>
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link to="/contact" className="service-detail-link">
                                        Discuss Your Project
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="process-section py-5">
                <div className="container py-5">
                    <div className="section-heading-center text-center mb-5">
                        <span className="section-label">
                            OUR APPROACH
                        </span>
                        <h2 className="section-title">
                            From Idea To <span>Reality.</span>
                        </h2>
                        <p className="section-description">
                            A simple and transparent process that keeps your project
                            focused, efficient and on track.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="process-card">
                                <div className="process-card-top">
                                    <div className="process-icon">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </div>
                                    <span className="process-number">
                                        01
                                    </span>
                                </div>
                                <div className="process-content">
                                    <h3>
                                        Discover
                                    </h3>
                                    <p>
                                        We understand your business, goals,
                                        challenges and project requirements.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="process-card">
                                <div className="process-card-top">
                                    <div className="process-icon">
                                        <FontAwesomeIcon icon={faPenRuler} />
                                    </div>
                                    <span className="process-number">
                                        02
                                    </span>
                                </div>
                                <div className="process-content">
                                    <h3>
                                        Plan & Design
                                    </h3>
                                    <p>
                                        We create the right strategy,
                                        structure and user experience for your solution.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="process-card">
                                <div className="process-card-top">
                                    <div className="process-icon">
                                        <FontAwesomeIcon icon={faCode} />
                                    </div>
                                    <span className="process-number">
                                        03
                                    </span>
                                </div>
                                <div className="process-content">
                                    <h3>
                                        Develop
                                    </h3>
                                    <p>
                                        Our team builds the solution using
                                        modern and reliable technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="process-card">
                                <div className="process-card-top">
                                    <div className="process-icon">
                                        <FontAwesomeIcon icon={faClipboardCheck} />
                                    </div>
                                    <span className="process-number">
                                        04
                                    </span>
                                </div>
                                <div className="process-content">
                                    <h3>
                                        Test & Improve
                                    </h3>
                                    <p>
                                        We test the product carefully and improve
                                        performance, security and usability.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="process-card">
                                <div className="process-card-top">
                                    <div className="process-icon">
                                        <FontAwesomeIcon icon={faRocket} />
                                    </div>
                                    <span className="process-number">
                                        05
                                    </span>
                                </div>
                                <div className="process-content">
                                    <h3>
                                        Launch
                                    </h3>
                                    <p>
                                        We deploy the solution and make sure
                                        everything is ready for your business.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="process-card">
                                <div className="process-card-top">
                                    <div className="process-icon">
                                        <FontAwesomeIcon icon={faHeadset} />
                                    </div>
                                    <span className="process-number">
                                        06
                                    </span>
                                </div>
                                <div className="process-content">
                                    <h3>
                                        Support
                                    </h3>
                                    <p>
                                        We continue to support, maintain and
                                        improve your digital solution.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-technology py-5">
                <div className="container py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-5">
                            <span className="section-label">
                                TECHNOLOGY
                            </span>
                            <h2 className="services-section-title">
                                Built With
                                <span> Modern Technology.</span>
                            </h2>
                            <p>
                                We select technologies based on your
                                project's requirements, performance,
                                scalability and long-term goals. Our
                                technology stack allows us to build
                                flexible solutions for different types
                                of businesses.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <div className="technology-pill-box">
                                {technologies.map((technology) => (
                                    <span key={technology}>
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-why-section py-5">
                <div className="container py-5">
                    <div className="section-heading-center">
                        <span className="section-label">
                            WHY SU-KEM
                        </span>
                        <h2>
                            More Than Just
                            <span> Development.</span>
                        </h2>
                        <p>
                            We focus on creating technology that delivers
                            real value to your business.
                        </p>
                    </div>
                    <div className="row g-4 mt-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="services-why-card">
                                <FontAwesomeIcon icon={faLightbulb} />
                                <h3>
                                    Business Focused
                                </h3>
                                <p>
                                    Every solution is designed around
                                    your business goals and real needs.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="services-why-card">
                                <FontAwesomeIcon icon={faCode} />
                                <h3>
                                    Modern Technology
                                </h3>
                                <p>
                                    We use reliable and modern technologies
                                    to build future-ready solutions.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="services-why-card">
                                <FontAwesomeIcon icon={faShieldHalved} />
                                <h3>
                                    Secure & Reliable
                                </h3>
                                <p>
                                    Security, performance and reliability
                                    are considered throughout development.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="services-why-card">
                                <FontAwesomeIcon icon={faHeadset} />
                                <h3>
                                    Continuous Support
                                </h3>
                                <p>
                                    We stay connected even after launch
                                    to support your digital journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-cta py-5">
                <div className="container py-2">
                    <div className="services-cta-box">
                        <div className="services-cta-content">
                            <span className="section-label">LET'S WORK TOGETHER</span>
                            <h2>
                                Have a project
                                <span> in mind?</span>
                            </h2>
                            <p>
                                Let's discuss your idea and build a digital
                                solution that moves your business forward.
                            </p>
                            <a href="/contact" className="services-cta-btn">
                                Start Your Project
                                <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Service;