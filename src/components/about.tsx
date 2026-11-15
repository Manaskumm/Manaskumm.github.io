"use client";

import { useState, useEffect } from "react";
import { profile, coursework, experience } from "@/lib/portfolio";

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
        id: "rutgers", title: profile.university, category: "Education", subtitle: profile.degree,
        date: profile.educationDates, location: "New Brunswick, NJ", extra: "GPA: 3.6/4.0",
        bullets: [profile.degree, "GPA: 3.6/4.0", "Relevant Coursework: " + coursework.join(", ")],
        thumbnail: "/assets/images/rutgers.webp"
    },
    ...experience.map((job): Advancement => ({
        id: job.id, title: job.company, category: "Experience", subtitle: job.role,
        date: job.dates, location: job.location, bullets: job.bullets,
        thumbnail: "/assets/images/" + job.image
    }))
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
                startMusic();
                playClick();
                setDetailModalOpen(true);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIdx, detailModalOpen, activeTab, startMusic, playClick]);

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
                                I am a <strong>Computer Science & Economics</strong> student at <strong>Rutgers University–New Brunswick</strong>, pursuing a <strong>B.S. in Computer Science & B.A. in Economics</strong>.
                            </p>
                            <p style={{ marginBottom: "18px" }}>
                                I have interned at Conquest Advisors, FlyRank AI, and Langpal, working on AI workflows, machine learning, and real-time language practice.
                            </p>
                            <p style={{ marginBottom: "20px", color: "#ffaa00", fontWeight: "bold" }}>
                                Sep 2024–Jan 2028
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
