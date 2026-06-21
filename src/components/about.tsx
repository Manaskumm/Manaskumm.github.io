"use client";

import { useState, useEffect } from "react";

interface Advancement {
    id: string;
    title: string;
    category: "Education" | "Experience";
    subtitle: string;
    date: string;
    location: string;
    bullets: string[];
    thumbnail: string;
    extra?: string; // GPA or other quick details
}

interface AboutProps {
    onBack: () => void;
    playClick: () => void;
    startMusic: () => void;
}

const advancementsData: Advancement[] = [
    {
        id: "rutgers",
        title: "Rutgers University",
        category: "Education",
        subtitle: "B.S in Computer Science & B.A in Economics",
        date: "Sep 2024 - May 2028",
        location: "New Brunswick, NJ",
        extra: "GPA: 3.6 / 4.0",
        bullets: [
            "Pursuing a double major B.S in Computer Science and B.A in Economics.",
            "Cumulative GPA of 3.6 / 4.0.",
            "Relevant Coursework: Calculus I & II, Linear Algebra, Data Structures, Computer Architecture, Discrete I & II, Intro to Computer Science, Microeconomics, Macroeconomics, Econometrics"
        ],
        thumbnail: "/assets/images/rutgers.png?v=2"
    },
    {
        id: "flyrank",
        title: "FlyRank.ai",
        category: "Experience",
        subtitle: "Machine Learning Intern",
        date: "July 2025 - Present",
        location: "Remote",
        bullets: [
            "Built semantic search intelligence pipelines using sentence-transformers, scikit-learn, and clustering to surface content opportunities from messy search analytics data.",
            "Developed reproducible ML notebooks for classification, opportunity scoring, and semantic modeling that inform FlyRank's agentic organic growth platform.",
            "Collaborated with engineers on content intelligence and ranking models powering automated SEO, AEO, and multi-modal content production at scale.",
        ],
        thumbnail: "/assets/images/flyrank.png?v=3"
    },
    {
        id: "eta",
        title: "ETA Development",
        category: "Experience",
        subtitle: "AI Native Full Stack Engineer",
        date: "May 2026 - Present",
        location: "Remote",
        bullets: [
            "Sourced and qualified leads for custom software projects by cold outreach to local businesses, driving client acquisition for a growing dev agency.",
            "Delivered full-stack web applications for clients as a contracted engineer, owning projects end-to-end from scoping to deployment.",
            "Built AI-powered automation pipelines integrating NLP-based lead scoring and RAG-driven personalized outreach using Apollo and Clay."
        ],
        thumbnail: "/assets/images/eta-dev.png?v=2"
    },
    {
        id: "langpal",
        title: "Langpal",
        category: "Experience",
        subtitle: "Web Developer Intern",
        date: "Feb 2026 - Present",
        location: "Remote",
        bullets: [
            "Built and maintained full-stack features using React and Next.js, leveraging AI coding assistants to accelerate development across frontend UI components and backend API endpoints.",
            "Designed and implemented responsive, accessible web pages that improved cross-device user experience.",
            "Integrated RESTful APIs to enable dynamic data rendering and seamless client-server communication.",
            "Collaborated in an agile environment, participating in code reviews and iterative development cycles to ship features on schedule."
        ],
        thumbnail: "/assets/images/langpal.png?v=2"
    },
    {
        id: "mathcorps",
        title: "Rutgers Math Corps",
        category: "Experience",
        subtitle: "Program Assistant",
        date: "July 2025 - August 2025",
        location: "New Brunswick, NJ",
        bullets: [
            "Assisted students with educational assignments and provided constructive feedback.",
            "Facilitated program operations and maintained a smoothly running learning environment.",
            "Managed orders of food and supplies for use of over 300 people.",
            "Ensured a supportive learning environment to enhance student confidence and comprehension."
        ],
        thumbnail: "/assets/images/rutgers.png?v=2"
    }
];

export function About({ onBack, playClick, startMusic }: AboutProps) {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const [detailModalOpen, setDetailModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<"history" | "whoami">("whoami"); // Defaults to Who Am I!

    // Keyboard support
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (detailModalOpen || activeTab === "whoami") return;

            if (e.key === "ArrowDown") {
                e.preventDefault();
                startMusic();
                playClick();
                setSelectedIdx((prev) => {
                    if (prev === null) return 0;
                    return Math.min(prev + 1, advancementsData.length - 1);
                });
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                startMusic();
                playClick();
                setSelectedIdx((prev) => {
                    if (prev === null) return 0;
                    return Math.max(prev - 1, 0);
                });
            } else if (e.key === "Enter" && selectedIdx !== null) {
                e.preventDefault();
                handleOpenDetails();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIdx, detailModalOpen, activeTab]);

    const handleSelect = (idx: number) => {
        startMusic();
        playClick();
        setSelectedIdx(idx);
        setDetailModalOpen(true); // Single click opens immediately!
    };

    const handleOpenDetails = () => {
        if (selectedIdx === null) return;
        startMusic();
        playClick();
        setDetailModalOpen(true);
    };

    const handlePlayButton = (e: React.MouseEvent, idx: number) => {
        e.stopPropagation(); // Avoid double toggling
        startMusic();
        playClick();
        setSelectedIdx(idx);
        setDetailModalOpen(true);
    };

    const closeDetailsModal = () => {
        startMusic();
        playClick();
        setDetailModalOpen(false);
    };

    const selectedAdvancement = selectedIdx !== null ? advancementsData[selectedIdx] : null;

    return (
        <>
            <div className="selectWorldScreen">
                {/* Header bar */}
                <div className="selectWorldHeader" style={{ height: "115px" }}>
                    <div className="selectWorldTitle" style={{ marginBottom: "10px" }}>About Me</div>
                    
                    {/* Toggled Tab buttons group */}
                    <div style={{ display: "flex", gap: "12px", marginBottom: "4px" }}>
                        <div
                            className={`secondBtn ${activeTab === "whoami" ? "" : "disabledBtn"}`}
                            onClick={() => {
                                playClick();
                                setActiveTab("whoami");
                            }}
                            style={{ width: "180px", height: "46px", marginBottom: 0 }}
                        >
                            <div className="textBtn" style={{ padding: "12px 16px", fontSize: "13px" }}>Who Am I</div>
                        </div>
                        <div
                            className={`secondBtn ${activeTab === "history" ? "" : "disabledBtn"}`}
                            onClick={() => {
                                playClick();
                                setActiveTab("history");
                            }}
                            style={{ width: "180px", height: "46px", marginBottom: 0 }}
                        >
                            <div className="textBtn" style={{ padding: "12px 16px", fontSize: "13px" }}>Advancements</div>
                        </div>
                    </div>
                </div>

                {/* Middle advancements list / Who Am I card */}
                <div className="selectWorldListContainer">
                    {activeTab === "history" ? (
                        advancementsData.map((adv, index) => {
                            const isSelected = selectedIdx === index;
                            return (
                                <div
                                    key={index}
                                    className={`selectWorldItem ${isSelected ? "selected" : ""}`}
                                    onClick={() => handleSelect(index)}
                                >
                                    <div className="selectWorldThumbnail">
                                        <img src={adv.thumbnail} alt={adv.title} />
                                        {/* Pixelated Play Button Overlay on Hover */}
                                        <div className="playButtonOverlay">
                                            <div
                                                className="pixelPlayIcon"
                                                title="View full description"
                                                onClick={(e) => handlePlayButton(e, index)}
                                            >
                                                <div className="pixelPlayTriangle"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="selectWorldItemText">
                                        <div className="selectWorldItemTitle">{adv.title}</div>
                                        <div className="selectWorldItemDate">
                                            {adv.category} | {adv.subtitle}
                                        </div>
                                        <div className="selectWorldItemMode">
                                            Active Period: {adv.date} | {adv.location} {adv.extra ? `| ${adv.extra}` : ""}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        /* Who Am I profile block */
                        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "30px 40px", color: "#FFF", fontSize: "14px", lineHeight: "1.9" }}>
                            <p style={{ color: "#ffff55", fontSize: "24px", fontWeight: "bold", textShadow: "2px 2px #000", marginBottom: "18px", textAlign: "center" }}>
                                Manas Kummarapurugu
                            </p>
                            <p style={{ marginBottom: "18px" }}>
                                I am a passionate <strong>Computer Science & Economics</strong> student at <strong>Rutgers University</strong> (Class of '28), a <strong>Machine Learning Intern at FlyRank.ai</strong>, and an <strong>AI Native Full Stack Engineer</strong> focused on building intelligent software systems, cloud structures, and personalized automation pipelines.
                            </p>
                            <p style={{ marginBottom: "18px" }}>
                                I specialize in delivering end-to-end full-stack web applications for clients, integrating NLP-based workflows, scraping frameworks, and advanced conversational LLM routing (using architectures like LLaMA and Gemini tool calling).
                            </p>
                            <p style={{ marginBottom: "20px", color: "#ffaa00", fontWeight: "bold" }}>
                                Current Objective: Engineering robust APIs and seeking software engineering internships!
                            </p>
                        </div>
                    )}
                </div>

                {/* Footer bar */}
                <div className="selectWorldFooter" style={{ height: "100px" }}>
                    <div className="selectWorldBtnRow1" style={{ maxWidth: "420px" }}>
                        <div
                            className={`mainBtn ${selectedAdvancement && activeTab === "history" ? "" : "disabledBtn"}`}
                            onClick={selectedAdvancement && activeTab === "history" ? handleOpenDetails : undefined}
                        >
                            <div className="textBtn">Launch</div>
                        </div>
                        <div className="mainBtn" onClick={onBack}>
                            <div className="textBtn">Back</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Achievements details modal */}
            {detailModalOpen && selectedAdvancement && (
                <div className="minecraftDialogOverlay" onClick={closeDetailsModal}>
                    <div className="minecraftDialog" onClick={(e) => e.stopPropagation()}>
                        <div className="minecraftDialogTitle">
                            Advancement Unlocked: {selectedAdvancement.title}
                        </div>
                        <div className="minecraftDialogContent">
                            <p style={{ color: "#ffff55", fontWeight: "bold", marginBottom: "8px" }}>
                                {selectedAdvancement.subtitle}
                            </p>
                            <p style={{ fontStyle: "italic", color: "#aaa", marginBottom: "12px" }}>
                                Period: {selectedAdvancement.date} ({selectedAdvancement.location})
                                {selectedAdvancement.extra ? ` | ${selectedAdvancement.extra}` : ""}
                            </p>
                            <ul style={{ paddingLeft: "16px", marginTop: "8px" }}>
                                {selectedAdvancement.bullets.map((bullet, idx) => (
                                    <li key={idx} style={{ marginBottom: "8px" }}>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mainBtn" style={{ width: "200px", marginBottom: 0 }} onClick={closeDetailsModal}>
                            <div className="textBtn">Done</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
