import React from "react";
import founderImage from "../components/assets/about-founder-1.jpg";
import team2 from "../components/assets/ourteam-02.png";
import team3 from "../components/assets/ourteam-01.png";
import team4 from "../components/assets/ourteam-02.png";
import team5 from "../components/assets/ourteam-01.png";
import team6 from "../components/assets/ourteam-02.png";
import team7 from "../components/assets/ourteam-01.png";
import team8 from "../components/assets/ourteam-02.png";
import team9 from "../components/assets/ourteam-01.png";
import team10 from "../components/assets/ourteam-02.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faCode, faPalette, faCloud, faShieldHalved, faMobileScreenButton, faDatabase } from "@fortawesome/free-solid-svg-icons";

function OurTeam() {
    const departmentHeads = [
        {
            name: "Rahul Patel",
            role: "Head of Technology",
            technology: "React.js • Node.js",
            image: team2,
            icon: faCode
        },
        {
            name: "Sneha Sharma",
            role: "Head of Design",
            technology: "Figma • UI/UX",
            image: team3,
            icon: faPalette
        },
        {
            name: "Amit Verma",
            role: "Head of Engineering",
            technology: "MERN • API",
            image: team4,
            icon: faDatabase
        },
        {
            name: "Pooja Mehta",
            role: "Head of Product",
            technology: "Product • Strategy",
            image: team5,
            icon: faMobileScreenButton
        }
    ];

    const teamLeaders = [
        {
            name: "Vikram Yadav",
            role: "Leader – Frontend Development",
            technology: "React.js",
            image: team6,
            icon: faCode
        },
        {
            name: "Neha Gupta",
            role: "Leader – Backend Development",
            technology: "Node.js • MongoDB",
            image: team7,
            icon: faDatabase
        },
        {
            name: "Karan Malhotra",
            role: "Leader – UI/UX Design",
            technology: "Figma • UX",
            image: team8,
            icon: faPalette
        },
        {
            name: "Anjali Patel",
            role: "Leader – QA & Testing",
            technology: "Testing • QA",
            image: team9,
            icon: faShieldHalved
        },
        {
            name: "Tushar Bansal",
            role: "Leader – Cloud & DevOps",
            technology: "Docker • AWS",
            image: team10,
            icon: faCloud
        }
    ];

    return (
        <main className="team-page">
            <section className="team-hero">
                <div className="container">
                    <div className="team-hero-content">
                        <span className="section-label">
                            OUR TEAM
                        </span>
                        <h1>
                            Meet Our <span>Team</span>
                        </h1>
                        <p>
                            The people behind Su-Kem Tech Lab.
                        </p>
                    </div>
                </div>
            </section>
            <section className="team-tree-section py-5">
                <div className="container py-5">
                    <div className="team-heading text-center">
                        <span className="section-label">
                            OUR PEOPLE
                        </span>
                        <h2>
                            The Team Behind
                            <span> Our Success.</span>
                        </h2>
                        <p>
                            A dedicated team of professionals working together
                            to build innovative and scalable digital solutions.
                        </p>
                    </div>
                    <div className="tree-founder">
                        <div className="tree-card founder-card">
                            <div className="team-image-wrapper">
                                <img src={founderImage} alt="Founder and CEO" />
                                <span className="team-crown">
                                    <FontAwesomeIcon icon={faCrown} />
                                </span>
                            </div>
                            <div className="team-card-content">
                                <h3>
                                    Pratik Ghumaliya
                                </h3>
                                <span className="team-role">
                                    Founder & CEO
                                </span>
                                <span className="team-tech">
                                    <FontAwesomeIcon icon={faCode} />
                                    MERN Stack
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="tree-connector founder-connector">
                        <span></span>
                    </div>
                    <div className="tree-heads">
                        {departmentHeads.map((member, index) => (
                            <div className="tree-member" key={index}>
                                <div className="tree-card">
                                    <div className="team-image-wrapper">
                                        <img src={member.image} alt={member.name} />
                                    </div>
                                    <div className="team-card-content">
                                        <h3>
                                            {member.name}
                                        </h3>
                                        <span className="team-role">
                                            {member.role}
                                        </span>
                                        <span className="team-tech">
                                            <FontAwesomeIcon icon={member.icon} />
                                            {member.technology}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="tree-connector heads-connector">
                        <span></span>
                    </div>
                    <div className="tree-leaders">
                        {teamLeaders.map((member, index) => (
                            <div className="tree-member" key={index}>
                                <div className="tree-card leader-card">
                                    <div className="team-image-wrapper">
                                        <img src={member.image} alt={member.name} />
                                    </div>
                                    <div className="team-card-content">
                                        <h3>
                                            {member.name}
                                        </h3>
                                        <span className="team-role">
                                            {member.role}
                                        </span>
                                        <span className="team-tech">
                                            <FontAwesomeIcon icon={member.icon} />
                                            {member.technology}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="team-cta-section py-5">
                <div className="container">
                    <div className="team-cta-box">
                        <div>
                            <span className="team-cta-label">
                                LET'S WORK TOGETHER
                            </span>
                            <h2>
                                Have an idea?
                                <span> Let's build it.</span>
                            </h2>
                            <p>
                                Join hands with our team and turn your
                                vision into reality.
                            </p>
                        </div>
                        <a href="/contact" className="team-cta-btn">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default OurTeam;