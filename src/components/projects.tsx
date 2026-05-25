"use client";

import { useState, useEffect } from "react";

interface Project {
    title: string;
    date: string;
    stack: string;
    gameMode: string;
    version: string;
    thumbnail: string;
    bullets: string[];
    link: string;
}

interface ProjectsProps {
    onBack: () => void;
    playClick: () => void;
    startMusic: () => void;
}

const initialProjects: Project[] = [
    {
        title: "Venture AI",
        date: "Feb 2026 - Mar 2026",
        stack: "Next.js, React, TypeScript, Groq, Gemini, Prisma, PostgreSQL, Clerk, SerpAPI",
        gameMode: "Creative Mode",
        version: "Next.js 16",
        thumbnail: "/assets/images/venture-ai.png?v=2",
        bullets: [
            "Engineered a full-stack AI travel platform that generates personalized itineraries through a hybrid AI architecture using Groq LLaMA 3.3 70B for conversational intent discovery and Gemini 2.5 Flash for tool calling and structured JSON generation.",
            "Integrated SerpAPI into the AI tool-calling pipeline to surface live Google Flights and Hotels pricing with real-time availability and booking links.",
            "Built a relational data layer with Prisma and PostgreSQL to persist itineraries, secured with Clerk auth, while using React Context to manage traveler profiles, budgets, dietary needs, and accessibility preferences.",
            "Developed a polished UI with Tailwind CSS, Framer Motion micro-animations, and interactive 3D WebGL globe visualizations via Cobe.",
        ],
        link: "https://github.com/Manaskumm",
    },
    {
        title: "Gmail Phishing Link Scanner",
        date: "Dec 2024 - Jan 2025",
        stack: "React 18, Webpack 5, Chrome Extension Manifest V3",
        gameMode: "Hardcore Mode",
        version: "Manifest V3",
        thumbnail: "/assets/images/phishing-scanner.png?v=2",
        bullets: [
            "Built a Chrome extension that automatically scans Gmail emails for phishing attempts, analyzing URLs for shorteners, typosquatting, and suspicious domains in real time.",
            "Developed a risk assessment UI ranking emails on a scale of 100 with color-coded alerts to surface threats at a glance.",
        ],
        link: "https://github.com/Manaskumm/gmail-phishing-scanner",
    },
    {
        title: "S&P 500 Index Fund Predictor",
        date: "Dec 2024 - Jan 2025",
        stack: "Python, scikit-learn, pandas, matplotlib, yfinance",
        gameMode: "Spectator Mode",
        version: "Python 3.11",
        thumbnail: "/assets/images/stock-predictor.png?v=2",
        bullets: [
            "Developed a predictive model using RandomForestClassifier to forecast S&P 500 price movements with a focus on precision and accuracy.",
            "Visualized and analyzed historical market data using yfinance, pandas, and matplotlib to identify patterns and support data-driven decision-making.",
        ],
        link: "https://github.com/Manaskumm/S-P-Index-Fund-Predictor",
    },
    {
        title: "Text Animator",
        date: "Sep 2025 - Oct 2025",
        stack: "Java, Swing, AWT",
        gameMode: "Adventure Mode",
        version: "Java 21",
        thumbnail: "/assets/images/text-animator.png?v=2",
        bullets: [
            "Developed an interactive Java-based animation application using Java Swing and AWT libraries, allowing users to input text and animate it across the screen with smooth movement and collision detection against window boundaries.",
            "Implemented keyboard event handling to enable user control over the animation direction (left, right, up, down) using arrow keys.",
            "Utilized a Timer-based animation loop to ensure smooth and consistent movement of the text, with adjustable speed and real-time position updates.",
        ],
        link: "https://github.com/Manaskumm/Text-Animator",
    },
];

export function Projects({ onBack, playClick, startMusic }: ProjectsProps) {
    const [projectList, setProjectList] = useState<Project[]>(initialProjects);
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [modalState, setModalState] = useState<"none" | "edit" | "delete" | "recreate" | "create_new">("none");

    // "Create New World" Suggestion Form States
    const [newProject, setNewProject] = useState({
        title: "",
        stack: "",
        description: "",
        gameMode: "Survival Mode",
    });

    const [deletePrankState, setDeletePrankState] = useState(false);

    // Filter projects based on query
    const filteredProjects = projectList.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.stack.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Keyboard controls for a high fidelity desktop game experience
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (modalState !== "none") return; // Bypass if modal is open

            if (e.key === "ArrowDown") {
                e.preventDefault();
                startMusic();
                playClick();
                setSelectedIdx((prev) => {
                    if (prev === null) return 0;
                    return Math.min(prev + 1, filteredProjects.length - 1);
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
                handlePlayWorld();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIdx, filteredProjects.length, modalState]);

    const handleSelect = (idx: number) => {
        startMusic();
        playClick();
        setSelectedIdx(idx);
    };

    const handlePlayWorld = () => {
        if (selectedIdx === null) return;
        startMusic();
        playClick();
        const project = filteredProjects[selectedIdx];
        window.open(project.link, "_blank");
    };

    const handleDoubleClick = (idx: number) => {
        startMusic();
        playClick();
        const project = filteredProjects[idx];
        window.open(project.link, "_blank");
    };

    const openModal = (state: typeof modalState) => {
        startMusic();
        playClick();
        setModalState(state);
        if (state === "delete") {
            setDeletePrankState(false);
        }
    };

    const closeModal = () => {
        startMusic();
        playClick();
        setModalState("none");
    };

    const handleCreateProject = (e: React.FormEvent) => {
        e.preventDefault();
        startMusic();
        playClick();

        if (!newProject.title) return;

        const dateStr = new Date().toLocaleDateString(undefined, {
            month: "short",
            year: "numeric",
        });

        const createdProject: Project = {
            title: newProject.title,
            date: `${dateStr} - Present`,
            stack: newProject.stack || "React, TypeScript, HTML, CSS",
            gameMode: newProject.gameMode,
            version: "Version 1.0.0",
            thumbnail: "/assets/images/manas-logo.png",
            bullets: newProject.description
                ? [newProject.description]
                : ["Suggested project concept drafted on Minecraft Select World screen."],
            link: "https://github.com/Manaskumm",
        };

        setProjectList((prev) => [...prev, createdProject]);
        setNewProject({
            title: "",
            stack: "",
            description: "",
            gameMode: "Survival Mode",
        });
        setModalState("none");
        setSelectedIdx(projectList.length); // Select the newly created project!
    };

    const executeDeletePrank = () => {
        startMusic();
        playClick();
        setDeletePrankState(true);
    };

    const selectedProject = selectedIdx !== null ? filteredProjects[selectedIdx] : null;

    return (
        <>
            <div className="selectWorldScreen">
                {/* Header bar */}
                <div className="selectWorldHeader">
                    <div className="selectWorldTitle">Select Project</div>
                    <input
                        type="text"
                        className="minecraftSearchBox"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setSelectedIdx(null); // Reset selection on filter
                        }}
                    />
                </div>

                {/* Middle world list (scrollable) */}
                <div className="selectWorldListContainer">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => {
                            const isSelected = selectedIdx === index;
                            return (
                                <div
                                    key={index}
                                    className={`selectWorldItem ${isSelected ? "selected" : ""}`}
                                    onClick={() => handleSelect(index)}
                                    onDoubleClick={() => handleDoubleClick(index)}
                                >
                                    <div className="selectWorldThumbnail">
                                        <img src={project.thumbnail} alt={project.title} />
                                    </div>
                                    <div className="selectWorldItemText">
                                        <div className="selectWorldItemTitle">{project.title}</div>
                                        <div className="selectWorldItemDate">
                                            {project.title} ({project.date})
                                        </div>
                                        <div className="selectWorldItemMode">
                                            {project.gameMode}, Version: {project.stack}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div style={{ textAlign: "center", color: "#aaa", marginTop: "40px" }}>
                            No projects found matching your query
                        </div>
                    )}
                </div>

                {/* Footer bar with Minecraft layout */}
                <div className="selectWorldFooter" style={{ height: "100px" }}>
                    <div className="selectWorldBtnRow1" style={{ maxWidth: "420px" }}>
                        <div
                            className={`mainBtn ${selectedProject ? "" : "disabledBtn"}`}
                            onClick={selectedProject ? handlePlayWorld : undefined}
                        >
                            <div className="textBtn">Play Selected Project</div>
                        </div>
                        <div className="mainBtn" onClick={onBack}>
                            <div className="textBtn">Back</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom high-fidelity Minecraft Dialog Modals */}
            {modalState === "edit" && selectedProject && (
                <div className="minecraftDialogOverlay" onClick={closeModal}>
                    <div className="minecraftDialog" onClick={(e) => e.stopPropagation()}>
                        <div className="minecraftDialogTitle">Edit Project: {selectedProject.title}</div>
                        <div className="minecraftDialogContent">
                            <p style={{ color: "#ffff55", fontWeight: "bold", marginBottom: "8px" }}>
                                Game Mode Details: {selectedProject.gameMode}
                            </p>
                            <p style={{ fontStyle: "italic", color: "#aaa", marginBottom: "12px" }}>
                                Tech Stack: {selectedProject.stack}
                            </p>
                            <ul style={{ paddingLeft: "16px", marginTop: "8px" }}>
                                {selectedProject.bullets.map((bullet, idx) => (
                                    <li key={idx} style={{ marginBottom: "8px" }}>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mainBtn" style={{ width: "200px", marginBottom: 0 }} onClick={closeModal}>
                            <div className="textBtn">Save & Done</div>
                        </div>
                    </div>
                </div>
            )}

            {modalState === "delete" && selectedProject && (
                <div className="minecraftDialogOverlay" onClick={closeModal}>
                    <div className="minecraftDialog" onClick={(e) => e.stopPropagation()}>
                        <div className="minecraftDialogTitle" style={{ color: "#ff5555" }}>
                            Delete Project?
                        </div>
                        <div className="minecraftDialogContent" style={{ textAlign: "center" }}>
                            {!deletePrankState ? (
                                <>
                                    <p>Are you sure you want to delete the project</p>
                                    <p style={{ color: "#ffff55", fontWeight: "bold", margin: "10px 0" }}>
                                        "{selectedProject.title}"?
                                    </p>
                                    <p style={{ color: "#ff5555" }}>
                                        This will delete the project from this browser instance forever! (A long time!)
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p style={{ fontSize: "16px", color: "#ff5555", fontWeight: "bold" }}>
                                        ACCESS DENIED!
                                    </p>
                                    <p style={{ marginTop: "10px" }}>
                                        Developer clearance required to delete "{selectedProject.title}".
                                    </p>
                                    <p style={{ color: "#ffff55", marginTop: "10px" }}>
                                        Just kidding! We wouldn't want you to delete this gorgeous project.
                                    </p>
                                </>
                            )}
                        </div>
                        <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                            {!deletePrankState ? (
                                <>
                                    <div className="secondBtn" onClick={executeDeletePrank}>
                                        <div className="textBtn" style={{ color: "#ff5555" }}>
                                            Delete
                                        </div>
                                    </div>
                                    <div className="secondBtn" onClick={closeModal}>
                                        <div className="textBtn">Cancel</div>
                                    </div>
                                </>
                            ) : (
                                <div className="mainBtn" style={{ flex: 1, marginBottom: 0 }} onClick={closeModal}>
                                    <div className="textBtn">Return to Safety</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {modalState === "recreate" && selectedProject && (
                <div className="minecraftDialogOverlay" onClick={closeModal}>
                    <div className="minecraftDialog" onClick={(e) => e.stopPropagation()}>
                        <div className="minecraftDialogTitle">Re-Create Project</div>
                        <div className="minecraftDialogContent" style={{ textAlign: "center" }}>
                            <p>Loading seed parameters for</p>
                            <p style={{ color: "#ffff55", fontWeight: "bold", margin: "8px 0" }}>
                                {selectedProject.title}
                            </p>
                            <div
                                style={{
                                    border: "2px solid #555",
                                    background: "#000",
                                    padding: "8px",
                                    fontFamily: "monospace",
                                    fontSize: "11px",
                                    color: "#55ff55",
                                    textAlign: "left",
                                    margin: "12px 0",
                                }}
                            >
                                [INFO] Extracting manifest...<br />
                                [INFO] Loading tech stack components...<br />
                                [SUCCESS] Loaded: {selectedProject.stack}
                            </div>
                            <p style={{ fontSize: "11px", color: "#aaa" }}>
                                This option allows you to copy the architectural blueprint of this project.
                            </p>
                        </div>
                        <div className="mainBtn" style={{ width: "200px", marginBottom: 0 }} onClick={closeModal}>
                            <div className="textBtn">Done</div>
                        </div>
                    </div>
                </div>
            )}

            {modalState === "create_new" && (
                <div className="minecraftDialogOverlay" onClick={closeModal}>
                    <div className="minecraftDialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "450px" }}>
                        <div className="minecraftDialogTitle">Create New Project</div>
                        <form onSubmit={handleCreateProject} style={{ width: "100%" }}>
                            <div className="minecraftDialogContent" style={{ marginBottom: "15px" }}>
                                <div className="minecraftFormGroup">
                                    <label className="minecraftFormLabel">Project Name</label>
                                    <input
                                        type="text"
                                        className="minecraftFormInput"
                                        required
                                        placeholder="e.g. Minecraft Portfolio"
                                        value={newProject.title}
                                        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                                    />
                                </div>
                                <div className="minecraftFormGroup">
                                    <label className="minecraftFormLabel">Game Mode</label>
                                    <select
                                        className="minecraftFormInput"
                                        style={{ appearance: "none" }}
                                        value={newProject.gameMode}
                                        onChange={(e) => setNewProject({ ...newProject, gameMode: e.target.value })}
                                    >
                                        <option value="Survival Mode">Survival Mode (Standard Full-Stack)</option>
                                        <option value="Creative Mode">Creative Mode (AI & Generation)</option>
                                        <option value="Hardcore Mode">Hardcore Mode (Security & Systems)</option>
                                        <option value="Adventure Mode">Adventure Mode (Desktop & Retro)</option>
                                    </select>
                                </div>
                                <div className="minecraftFormGroup">
                                    <label className="minecraftFormLabel">Tech Stack</label>
                                    <input
                                        type="text"
                                        className="minecraftFormInput"
                                        placeholder="e.g. Next.js, Tailwind, TypeScript"
                                        value={newProject.stack}
                                        onChange={(e) => setNewProject({ ...newProject, stack: e.target.value })}
                                    />
                                </div>
                                <div className="minecraftFormGroup">
                                    <label className="minecraftFormLabel">Project Description</label>
                                    <textarea
                                        className="minecraftFormTextarea"
                                        placeholder="Briefly describe this project..."
                                        value={newProject.description}
                                        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                                <button type="submit" className="secondBtn" style={{ flex: 1 }}>
                                    <div className="textBtn">Create</div>
                                </button>
                                <div className="secondBtn" style={{ flex: 1 }} onClick={closeModal}>
                                    <div className="textBtn">Cancel</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
