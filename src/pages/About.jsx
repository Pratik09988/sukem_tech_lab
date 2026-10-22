import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import aboutImage from "../components/assets/about-bg-1.png";
import story1 from "../components/assets/about-story-1.png";
import story2 from "../components/assets/about-story-2.png";
import story3 from "../components/assets/about-story-3.png";
import story4 from "../components/assets/about-story-4.png";
import Review1 from "../components/assets/Review-slider-1.png";
import Review2 from "../components/assets/Review-slider-2.png";
import Review3 from "../components/assets/Review-slider-3.png";
import Review4 from "../components/assets/Review-slider-4.png";
import FounderImage from "../components/assets/about-founder-1.jpg";
import CeoImage from "../components/assets/about-founder-2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faArrowRight,
    faBullseye,
    faChartLine,
    faCode,
    faLightbulb
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const About = () => {
    const testimonialImages = [Review1, Review2, Review3, Review4];
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [testimonialTransition, setTestimonialTransition] = useState(true);


    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialIndex((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (testimonialIndex !== testimonialImages.length) return;

        const timer = setTimeout(() => {
            setTestimonialTransition(false);
            setTestimonialIndex(0);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setTestimonialTransition(true);
                });
            });
        }, 700);

        return () => clearTimeout(timer);
    }, [testimonialIndex, testimonialImages.length]);

    const nextTestimonial = () => {
        setTestimonialTransition(true);
        setTestimonialIndex((prev) =>
            prev >= testimonialImages.length ? 1 : prev + 1
        );
    };

    const prevTestimonial = () => {
        setTestimonialTransition(true);
        setTestimonialIndex((prev) =>
            prev <= 0 ? testimonialImages.length - 1 : prev - 1
        );
    };

    return (
        <>
            <section className="about-hero">
                <img
                    src={aboutImage}
                    alt="About Su-Kem Tech Lab"
                    className="about-hero-image"
                />
                <div className="about-hero-overlay"></div>
                <div className="container about-hero-content">
                    <h1>About Us</h1>
                    <div className="about-breadcrumb">
                        <span>Home</span>
                        <span className="breadcrumb-dot">•</span>
                        <span>About Us</span>
                    </div>
                </div>
            </section>

            <section className="about-story py-5">
                <div className="container py-lg-5">
                    <div className="text-center about-story-heading mb-5">
                        <span className="section-label">OUR STORY</span>
                        <h2 className="about-title">
                            The Journey Behind <span>Su-Kem Tech Lab.</span>
                        </h2>
                        <p className="about-description">
                            Every milestone in our journey represents growth, innovation and
                            the continuous pursuit of better technology solutions.
                        </p>
                    </div>

                    <div className="story-item row align-items-center">
                        <div className="col-lg-5">
                            <div className="story-image">
                                <img src={story1} alt="Major award and achievement" />
                            </div>
                        </div>
                        <div className="col-lg-2 d-none d-lg-flex story-number-wrapper">
                            <div className="story-number">2022</div>
                        </div>
                        <div className="col-lg-5">
                            <div className="story-content">
                                <span className="story-year">RECOGNITION</span>
                                <h3>Major Award &amp; <span>Achievement.</span></h3>
                                <p>
                                    Our journey reached an important milestone with recognition
                                    for our work, innovation and commitment towards building
                                    meaningful technology solutions.
                                </p>
                                <p>
                                    This achievement represents our dedication to continuous
                                    improvement and delivering quality digital solutions for our
                                    clients.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="story-item row align-items-center">
                        <div className="col-lg-5 order-lg-1 order-2">
                            <div className="story-content">
                                <span className="story-year">GLOBAL MILESTONE</span>
                                <h3>First US <span>Project.</span></h3>
                                <p>
                                    Expanding beyond the Indian market was a major milestone in
                                    our journey.
                                </p>
                                <p>
                                    Our first US project gave us the opportunity to work with
                                    international requirements and gain valuable experience in
                                    delivering solutions for a global market.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 d-none d-lg-flex story-number-wrapper order-lg-2">
                            <div className="story-number">2018</div>
                        </div>
                        <div className="col-lg-5 order-lg-3 order-1">
                            <div className="story-image">
                                <img src={story2} alt="First US project" />
                            </div>
                        </div>
                    </div>

                    <div className="story-item row align-items-center">
                        <div className="col-lg-5">
                            <div className="story-image">
                                <img src={story3} alt="First Indian project" />
                            </div>
                        </div>
                        <div className="col-lg-2 d-none d-lg-flex story-number-wrapper">
                            <div className="story-number">2014</div>
                        </div>
                        <div className="col-lg-5">
                            <div className="story-content">
                                <span className="story-year">FIRST PROJECT</span>
                                <h3>First Indian <span>Project.</span></h3>
                                <p>
                                    Our first Indian project was an important step from building
                                    ideas to delivering real-world technology solutions.
                                </p>
                                <p>
                                    It helped us understand real client requirements, project
                                    challenges and the importance of creating reliable and
                                    user-friendly products.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="story-item row align-items-center">
                        <div className="col-lg-5 order-lg-1 order-2">
                            <div className="story-content">
                                <span className="story-year">THE BEGINNING</span>
                                <h3>Startup <span>Started.</span></h3>
                                <p>
                                    Every journey begins with an idea. Su-Kem Tech Lab started
                                    with a vision to use technology to solve real business
                                    problems.
                                </p>
                                <p>
                                    From a small beginning, our journey started with learning,
                                    experimentation and a strong passion for creating better
                                    digital solutions.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 d-none d-lg-flex story-number-wrapper order-lg-2">
                            <div className="story-number">2012</div>
                        </div>
                        <div className="col-lg-5 order-lg-3 order-1">
                            <div className="story-image">
                                <img src={story4} alt="Su-Kem Tech Lab beginnings" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonial-section-about py-5" id="reviews">
                <div className="container py-lg-5">
                    <div className="testimonial-heading-row">
                        <div className="testimonial-heading">
                            <span className="section-label">CLIENTS REVIEW</span>
                            <h2>
                                Here's what our amazing <br />
                                clients are <span>saying.</span>
                            </h2>
                        </div>
                        <div className="testimonial-arrows">
                            <button
                                type="button"
                                onClick={prevTestimonial}
                                aria-label="Previous reviews"
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <button
                                type="button"
                                onClick={nextTestimonial}
                                aria-label="Next reviews"
                            >
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>

                    <div className="testimonial-slider">
                        <div
                            className="testimonial-track"
                            style={{
                                "--testimonial-index": testimonialIndex,
                                transition: testimonialTransition
                                    ? "transform 0.7s ease-in-out"
                                    : "none"
                            }}
                        >
                            {[...testimonialImages, ...testimonialImages].map(
                                (image, index) => (
                                    <div className="testimonial-slide" key={index}>
                                        <div className="testimonial-image-card">
                                            <img
                                                src={image}
                                                alt={`Client Review ${(index % testimonialImages.length) + 1}`}
                                            />
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="leadership-section py-5">
                <div className="container leadership-container py-lg-5">
                    <div className="leadership-heading text-center mb-5">
                        <span className="section-label">COMPANY LEADERSHIP</span>
                        <h2 className="leadership-title">
                            Meet the Team Behind <span>Su-Kem Tech Lab.</span>
                        </h2>
                        <p className="leadership-description">
                            The people leading our vision, strategy and technical direction
                            to build meaningful digital solutions.
                        </p>
                    </div>

                    <div className="row justify-content-center g-4 leadership-grid">
                        <div className="col-lg-5 col-md-6">
                            <div className="leader-card">
                                <div className="leader-image">
                                    <span className="leader-badge">CEO</span>
                                    <img src={FounderImage} alt="Aman Gupta" />
                                </div>
                                <div className="leader-content">
                                    <h3>Aman Gupta</h3>
                                    <span className="leader-role">
                                        CHIEF EXECUTIVE OFFICER
                                    </span>
                                    <p>
                                        Leads the overall vision, business strategy and growth of
                                        Su-Kem Tech Lab. Focused on building long-term relationships
                                        and delivering reliable technology solutions for businesses.
                                    </p>
                                    <div className="leader-tags">
                                        <span>
                                            <FontAwesomeIcon icon={faBullseye} />
                                            Business Vision
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faChartLine} />
                                            Business Growth
                                        </span>
                                    </div>
                                    <a
                                        href="https://in.linkedin.com/"
                                        className="leader-link"
                                        aria-label="Aman Gupta LinkedIn"
                                    >
                                        <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6">
                            <div className="leader-card">
                                <div className="leader-image">
                                    <span className="leader-badge">FOUNDER</span>
                                    <img src={CeoImage} alt="Rajesh Gandhi" />
                                </div>
                                <div className="leader-content">
                                    <h3>Rajesh Gandhi</h3>
                                    <span className="leader-role">
                                        FOUNDER &amp; DIRECTOR
                                    </span>
                                    <p>
                                        Drives the company's technical direction, innovation and
                                        product development. Focused on creating scalable, modern
                                        and user-friendly digital solutions.
                                    </p>
                                    <div className="leader-tags">
                                        <span>
                                            <FontAwesomeIcon icon={faCode} />
                                            Technology
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faLightbulb} />
                                            Innovation
                                        </span>
                                    </div>
                                    <a
                                        href="https://in.linkedin.com/"
                                        className="leader-link"
                                        aria-label="Rajesh Gandhi LinkedIn"
                                    >
                                        <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );


};

export default About;
