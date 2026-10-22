import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faXmark, faPaperPlane} from "@fortawesome/free-solid-svg-icons";

function AIChatbot() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Hi! 👋 Welcome to Su-KEm Tech Lab. How can I help you today?"
        }
    ]);

    const pageQuestions = [
        {
            question: "Tell me about your company",
            page: "/about",
            keywords: ["about", "company", "who are you"]
        },
        {
            question: "What services do you offer?",
            page: "/service",
            keywords: ["service", "services", "offer"]
        },
        {
            question: "Show me your team",
            page: "/OurTeam",
            keywords: ["team", "members", "developers"]
        },
        {
            question: "Show me your projects",
            page: "/project",
            keywords: ["project", "projects", "portfolio", "previous work"]
        },
        {
            question: "Do you have any job openings?",
            page: "/career",
            keywords: ["career", "job", "jobs", "vacancy", "hiring", "internship"]
        },
        {
            question: "How can I contact your team?",
            page: "/contact",
            keywords: ["contact", "email", "phone", "reach", "address"]
        }
    ];

    const suggestions = pageQuestions.map((item) => item.question);

    const getReply = (question) => {
        const text = question.toLowerCase();

        if (/\b(hello|hi|hey)\b/.test(text)) {
            return "Hello! 👋 Welcome to Su-KEm Tech Lab. Select one of the options below to explore our website.";
        }

        if (text.includes("price") || text.includes("cost") || text.includes("budget")) {
            return "Project pricing depends on your requirements and features. Please visit our Contact page to discuss your project with our team.";
        }

        if (text.includes("website") || text.includes("develop") || text.includes("build")) {
            return "We can help you explore website and application development options. Visit our Services page or contact our team to discuss your requirements.";
        }

        if (text.includes("thank")) {
            return "You're welcome! 😊 Feel free to ask me about our company, services, projects, team, careers, or contact information.";
        }

        return "Thanks for your question! I can help you explore our company, services, projects, team, careers, and contact information. Select one of the suggested options to visit the relevant page.";
    };

    const sendMessage = (text = message) => {
        const question = text.trim();

        if (!question || isLoading) return;

        setMessages((prev) => [
            ...prev,
            { role: "user", content: question }
        ]);

        setMessage("");
        setIsLoading(true);

        const normalizedQuestion = question.toLowerCase().trim();

        const isContactQuestion =
            /\bcontact\b/.test(normalizedQuestion) ||
            /\breach\b/.test(normalizedQuestion) ||
            /\bemail\b/.test(normalizedQuestion) ||
            /\bphone\b/.test(normalizedQuestion) ||
            /\baddress\b/.test(normalizedQuestion) ||
            /\bget in touch\b/.test(normalizedQuestion);

        const selectedPage = isContactQuestion
            ? pageQuestions.find((item) => item.page === "/contact")
            : pageQuestions.find((item) =>
                item.keywords.some((keyword) =>
                    normalizedQuestion.includes(keyword)
                )
            );

        if (selectedPage) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: `Sure! Taking you to ${selectedPage.question}...`
                }
            ]);

            setTimeout(() => {
                setIsLoading(false);
                setIsOpen(false);
                navigate(selectedPage.page);
            }, 500);

            return;
        }

        setTimeout(() => {
            const reply = getReply(question);

            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: reply }
            ]);

            setIsLoading(false);
        }, 500);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage();
    };

    const resetChat = () => {
        setMessages([
            {
                role: "assistant",
                content: "Hi! 👋 Welcome to Su-KEm Tech Lab. How can I help you today?"
            }
        ]);
        setMessage("");
        setIsLoading(false);
    };

    const toggleChat = () => {
        if (!isOpen) {
            resetChat();
        }

        setIsOpen((prev) => !prev);
    };

    return (
        <div className="ai-chatbot">
            {isOpen && (
                <div className="ai-chat-window">
                    <div className="ai-chat-header">
                        <div className="ai-chat-brand">
                            <div>
                                <h3>AI Assistant</h3>
                            </div>
                        </div>
                        <div className="ai-chat-header-actions">
                            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close chat">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                    </div>
                    <div className="ai-chat-messages">
                        {messages.map((item, index) => (
                            <div key={index} className={`ai-message-row ${item.role === "user" ? "user-row" : ""}`}>
                                {item.role === "assistant" && (
                                    <div className="ai-message-avatar">
                                        <FontAwesomeIcon icon={faRobot} />
                                    </div>
                                )}
                                <div className={`ai-message ${item.role}`}>
                                    {item.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="ai-message-row">
                                <div className="ai-message-avatar">
                                    <FontAwesomeIcon icon={faRobot} />
                                </div>
                                <div className="ai-message assistant ai-typing">
                                    Thinking
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        )}
                        {messages.length === 1 && !isLoading && (
                            <div className="ai-chat-suggestions">
                                {suggestions.map((item) => (
                                    <button type="button" key={item} onClick={() => sendMessage(item)}>
                                        {item}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <form className="ai-chat-input" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Ask us anything..." value={message} onChange={(event) => setMessage(event.target.value)} disabled={isLoading} aria-label="Type your message" />
                        <button type="submit" disabled={!message.trim() || isLoading} aria-label="Send message">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </form>
                </div>
            )}
            <button type="button" className={`ai-chat-toggle ${isOpen ? "chat-active" : ""}`} onClick={toggleChat} title="Chat with us" style={{ width: "48px", height: "48px", fontSize: "21px", left: "25px", right: "auto", bottom: "10px" }}>
                <FontAwesomeIcon icon={isOpen ? faXmark : faRobot} />
            </button>
        </div>
    );
}

export default AIChatbot;