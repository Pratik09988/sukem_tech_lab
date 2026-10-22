import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faEnvelope,
    faPhone,
    faUpload,
    faLocationDot,
    faClock,
    faPaperPlane,
    faComments,
    faCircleCheck,
    faCode,
    faHandshake,
    faChevronDown
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        projectPdf: null,
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");
    const [activeFaq, setActiveFaq] = useState(0);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));

        setSubmitted(false);
        setSubmitStatus("");
    };

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];

        if (!file) {
            setFormData((previous) => ({
                ...previous,
                projectPdf: null
            }));
            setSubmitted(false);
            setSubmitStatus("");
            return;
        }

        const isPdf =
            file.type === "application/pdf" ||
            file.name.toLowerCase().endsWith(".pdf");

        if (!isPdf) {
            alert("Only PDF files are allowed.");
            event.target.value = "";

            setFormData((previous) => ({
                ...previous,
                projectPdf: null
            }));

            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert("Please upload a PDF smaller than 5 MB.");
            event.target.value = "";

            setFormData((previous) => ({
                ...previous,
                projectPdf: null
            }));

            return;
        }

        setFormData((previous) => ({
            ...previous,
            projectPdf: file
        }));

        setSubmitted(false);
        setSubmitStatus("");
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

    const contactDetails = [
        {
            icon: faEnvelope,
            label: "Email Us",
            value: "SuKemSupport@gmail.com",
            link: "mailto:SuKemSupport@gmail.com",
            description: "Send us your project requirements."
        },
        {
            icon: faPhone,
            label: "Call Us",
            value: "+91 9876543211",
            link: "tel:+919876543211",
            description: "Let's discuss your ideas."
        },
        {
            icon: faLocationDot,
            label: "Our Location",
            value: "India",
            link: null,
            description: "Working with businesses across locations."
        },
        {
            icon: faClock,
            label: "Working Hours",
            value: "Mon – Sat",
            link: null,
            description: "Reach out during business hours."
        }
    ];

    const reasons = [
        {
            icon: faComments,
            number: "01",
            title: "Clear Communication",
            text: "We understand your requirements and keep you informed throughout the project."
        },
        {
            icon: faCode,
            number: "02",
            title: "The Right Solution",
            text: "We recommend practical technology based on your goals, needs and budget."
        },
        {
            icon: faHandshake,
            number: "03",
            title: "Long-Term Partnership",
            text: "Our focus is on building lasting relationships, not just delivering a project."
        }
    ];

    const faqs = [
        {
            question: "What services does Su-KEm Tech Lab provide?",
            answer: "We work on web development, app development, CRM solutions, custom software, cloud solutions, and data analytics."
        },
        {
            question: "How do I start a project with your team?",
            answer: "Fill out the contact form with your requirements. We can then discuss your goals, preferred features, timeline, and budget."
        },
        {
            question: "How much does a project cost?",
            answer: "The cost depends on the project scope, features, technology, and timeline. Share your requirements so we can discuss a suitable estimate."
        },
        {
            question: "Can you work with an existing website or application?",
            answer: "Yes. You can contact us about improvements, new features, redesigns, maintenance, or other development needs."
        }
    ];

    return (
        <main className="contact-page">
            <section className="contact-hero">
                <div className="container">
                    <div className="contact-hero-content">
                        <h1>Contact Us</h1>
                        <p>
                            Let's discuss your ideas and build something great together.
                        </p>

                        <div className="contact-breadcrumb">
                            <Link to="/">Home</Link>
                            <FontAwesomeIcon icon={faArrowRight} />
                            <span>Contact Us</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-main-section">
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

                                {submitStatus === "error" && (
                                    <div
                                        className="contact-success-message"
                                        role="alert"
                                    >
                                        <div>
                                            <strong>Unable to send your enquiry.</strong>
                                            <p>
                                                Please try again or contact us directly
                                                by email.
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

            <section className="contact-reasons-section">
                <div className="container">
                    <div className="contact-section-heading">
                        <span className="contact-section-label">
                            WHY WORK WITH US
                        </span>
                        <h2>
                            More Than Just
                            <span> A Conversation.</span>
                        </h2>
                        <p>
                            We focus on understanding your needs and finding a
                            practical way to move your project forward.
                        </p>
                    </div>

                    <div className="row g-4">
                        {reasons.map((item) => (
                            <div
                                className="col-md-6 col-lg-4"
                                key={item.number}
                            >
                                <div className="contact-reason-card">
                                    <div className="contact-reason-top">
                                        <div className="contact-reason-icon">
                                            <FontAwesomeIcon icon={item.icon} />
                                        </div>
                                        <span>{item.number}</span>
                                    </div>

                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                    <div className="contact-reason-line" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="contact-faq-section">
                <div className="container">
                    <div className="row g-5 align-items-start">
                        <div className="col-lg-5">
                            <span className="contact-section-label">
                                HAVE QUESTIONS?
                            </span>

                            <h2>
                                A Few Things
                                <span> You May Want to Know.</span>
                            </h2>

                            <p>
                                Here are answers to common questions about our
                                services and getting started with a project.
                            </p>

                            <a
                                href="mailto:SuKemSupport@gmail.com"
                                className="contact-faq-link"
                            >
                                Still have questions?
                                <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </div>

                        <div className="col-lg-7">
                            <div className="contact-faq-list">
                                {faqs.map((faq, index) => (
                                    <div
                                        className={`contact-faq-item ${activeFaq === index ? "active" : ""
                                            }`}
                                        key={faq.question}
                                    >
                                        <button
                                            type="button"
                                            className="contact-faq-question"
                                            onClick={() =>
                                                setActiveFaq(
                                                    activeFaq === index ? -1 : index
                                                )
                                            }
                                            aria-expanded={activeFaq === index}
                                        >
                                            <span>{faq.question}</span>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </button>

                                        {activeFaq === index && (
                                            <div className="contact-faq-answer">
                                                <p>{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;