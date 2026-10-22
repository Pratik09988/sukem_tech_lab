import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        visible && (
            <button onClick={scrollToTop} title="Back to Top" aria-label="Scroll to top" style={{ position: "fixed", bottom: "25px", right: "25px", width: "48px", height: "48px", borderRadius: "50%", border: "1px solid var(--border-color)", background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))", color: "#ffffff", fontSize: "26px", fontWeight: "bold", cursor: "pointer", zIndex: 9999, boxShadow: "0 4px 12px rgba(0, 1, 2, 0.3)", transition: "var(--transition)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                ↑
            </button>
        )
    );
};

export default ScrollToTop;