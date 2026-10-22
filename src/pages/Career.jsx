import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBriefcase, faUsers, faLightbulb, faChartLine, faCode, faMobileScreenButton, faCloud, faDatabase, faCheck, faPaperPlane, faGraduationCap, faLaptopHouse } from "@fortawesome/free-solid-svg-icons";

function Career() {
    const jobs = [
        {
            title: "React JS Developer",
            type: "Full Time",
            location: "Remote / Hybrid",
            icon: faCode,
            skills: ["React.js", "JavaScript", "HTML", "CSS"]
        },
        {
            title: "Node.js Developer",
            type: "Full Time",
            location: "Remote / Hybrid",
            icon: faDatabase,
            skills: ["Node.js", "Express.js", "MongoDB", "REST API"]
        },
        {
            title: "UI/UX Designer",
            type: "Full Time",
            location: "Remote / Hybrid",
            icon: faLightbulb,
            skills: ["Figma", "UI Design", "UX Research", "Prototyping"]
        },
        {
            title: "Business Analyst",
            type: "Full Time",
            location: "Remote / Hybrid",
            icon: faChartLine,
            skills: ["Analytics", "Documentation", "CRM", "Communication"]
        },
        {
            title: "Cloud Engineer",
            type: "Full Time",
            location: "Remote / Hybrid",
            icon: faCloud,
            skills: ["AWS", "Cloud", "Docker", "DevOps"]
        },
        {
            title: "Mobile App Developer",
            type: "Full Time",
            location: "Remote / Hybrid",
            icon: faMobileScreenButton,
            skills: ["React Native", "JavaScript", "API", "Firebase"]
        }
    ];

    const benefits = [
        "Flexible working environment",
        "Learning and development opportunities",
        "Work on real-world technology projects",
        "Collaborative and friendly team",
        "Career growth opportunities",
        "Modern technology exposure"
    ];

    const process = [
        {
            number: "01",
            title: "Apply",
            text: "Submit your resume and tell us about your skills."
        },
        {
            number: "02",
            title: "Review",
            text: "Our team reviews your profile and experience."
        },
        {
            number: "03",
            title: "Interview",
            text: "Meet our team and discuss your technical skills."
        },
        {
            number: "04",
            title: "Join Us",
            text: "Start your journey with Su-Kem Tech Lab."
        }
    ];

    return (
        <main className="career-page">
            <section className="career-hero">
                <div className="container">
                    <div className="career-hero-content">
                        <span className="section-label">
                            JOIN OUR TEAM
                        </span>
                        <h1>
                            Build Your Career.<br />
                            <span> Build The Future.</span>
                        </h1>
                    </div>
                </div>
            </section>
            <section className="career-intro py-5">
                <div className="container py-lg-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <span className="section-label">
                                LIFE AT SU-KEM
                            </span>
                            <h2 className="career-section-title">
                                Grow With A Team That
                                <span> Builds What's Next.</span>
                            </h2>
                            <p className="career-intro-text">
                                At Su-Kem Tech Lab, we believe great products are
                                built by great people. We create an environment where
                                ideas are encouraged, skills are developed and every
                                team member has an opportunity to make an impact.
                            </p>
                            <p className="career-intro-text">
                                Whether you're starting your career or looking for
                                your next challenge, you'll work with modern
                                technologies and real-world projects.
                            </p>
                            <Link to="/contact" className="career-text-link">
                                Talk To Our Team
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="career-value-grid">
                                <div className="career-value-card">
                                    <div className="career-value-icon">
                                        <FontAwesomeIcon icon={faLightbulb} />
                                    </div>
                                    <h3>Innovation</h3>
                                    <p>
                                        Explore new ideas and modern technologies.
                                    </p>
                                </div>
                                <div className="career-value-card">
                                    <div className="career-value-icon">
                                        <FontAwesomeIcon icon={faUsers} />
                                    </div>
                                    <h3>Teamwork</h3>
                                    <p>
                                        Work together and learn from talented people.
                                    </p>
                                </div>
                                <div className="career-value-card">
                                    <div className="career-value-icon">
                                        <FontAwesomeIcon icon={faGraduationCap} />
                                    </div>
                                    <h3>Learning</h3>
                                    <p>
                                        Keep growing through continuous learning.
                                    </p>
                                </div>
                                <div className="career-value-card">
                                    <div className="career-value-icon">
                                        <FontAwesomeIcon icon={faChartLine} />
                                    </div>
                                    <h3>Growth</h3>
                                    <p>
                                        Build skills and grow your professional career.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="career-jobs" id="career-jobs">
                <div className="container py-5">
                    <div className="career-heading-row mb-5">
                        <div>
                            <span className="section-label">
                                <FontAwesomeIcon icon={faBriefcase} /> CAREER OPPORTUNITIES
                            </span>
                            <h2 className="career-section-title">
                                Open<span> Positions.</span>
                            </h2>
                            <p className="career-jobs-description">
                                Find the right role to grow your skills and build your future with us.
                            </p>
                        </div>
                    </div>
                    <div className="row g-3">
                        {jobs.map((job, index) => (
                            <div className="col-lg-4 col-md-6" key={job.title}>
                                <div className="career-job-card">
                                    <div className="career-job-header">
                                        <div className="career-job-icon">
                                            <FontAwesomeIcon icon={job.icon} />
                                        </div>
                                        <span className="career-job-number">
                                            0{index + 1}
                                        </span>
                                    </div>
                                    <h3>{job.title}</h3>
                                    <div className="career-job-meta">
                                        <span>
                                            <FontAwesomeIcon icon={faBriefcase} />
                                            {job.type}
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faLaptopHouse} />
                                            {job.location}
                                        </span>
                                    </div>
                                    <div className="career-skills">
                                        {job.skills.map((skill) => (
                                            <span key={skill}>{skill}</span>
                                        ))}
                                    </div>
                                    <a href={`mailto:careers@sukemtechlab.com?subject=${encodeURIComponent(`Application for ${job.title}`)}`} className="career-apply-link">
                                        <span>Apply For Position</span>
                                        <span className="career-apply-arrow">
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="career-process py-5">
                <div className="container py-lg-5">
                    <div className="career-heading mb-5">
                        <span className="section-label">
                            HOW WE HIRE
                        </span>
                        <h2 className="career-section-title">
                            A Simple Hiring
                            <span> Journey.</span>
                        </h2>
                        <p>
                            Our hiring process is designed to help us understand
                            your strengths, skills and career goals.
                        </p>
                    </div>
                    <div className="career-zigzag">
                        <div className="career-zigzag-line"></div>
                        {process.map((item, index) => (
                            <div className={`career-zigzag-item ${index % 2 === 0 ? "left-step" : "right-step"}`} key={item.number}>
                                <div className="career-zigzag-number">
                                    {item.number}
                                </div>
                                <div className="career-zigzag-content">
                                    <span className="career-step-label">
                                        STEP {item.number}
                                    </span>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="career-benefits py-5">
                <div className="container py-lg-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-5">
                            <span className="section-label">
                                WHY SU-KEM
                            </span>
                            <h2 className="career-section-title">
                                Benefits Of
                                <span> Being Here.</span>
                            </h2>
                            <p className="career-intro-text">
                                We want our team members to have the tools,
                                opportunities and environment they need to do
                                their best work.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <div className="career-benefit-list">
                                {benefits.map((benefit) => (
                                    <div className="career-benefit-item" key={benefit}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="career-cta py-5">
                <div className="container py-lg-4">
                    <div className="career-cta-box">
                        <div>
                            <span className="career-cta-label">
                                READY TO JOIN US?
                            </span>
                            <h2>
                                Let's Build Something
                                <span> Great Together.</span>
                            </h2>
                        </div>
                        <a href="mailto:careers@sukemtechlab.com" className="career-cta-btn">
                            Send Your Resume
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Career;