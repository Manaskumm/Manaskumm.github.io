"use client";

interface SkillsProps {
    onBack: () => void;
    playClick: () => void;
    startMusic: () => void;
}

const skillCategories = [
    {
        title: "Languages",
        skills: ["Python", "Java", "C", "Javascript", "HTML", "CSS"],
    },
    {
        title: "Technologies",
        skills: ["Git", "React", "React Native", "Next.js", "Node.js", "TypeScript", "SQL/PostgreSQL", "Prisma", "Linux", "Supabase", "Vercel", "Framer Motion", "Scapy", "pefile", "YARA"],
    },
    {
        title: "AI & Data",
        skills: ["Groq", "Gemini", "RAG", "NLP Lead Scoring", "SerpAPI", "Apollo", "Clay", "scikit-learn", "pandas", "matplotlib", "yfinance", "sentence-transformers", "HDBSCAN"],
    },
    {
        title: "Activities",
        skills: ["Member of Undergraduate Student Alliance of Computer Scientists (USACS)", "Blueprint at Rutgers"],
    },
];

export function Skills({ onBack, playClick, startMusic }: SkillsProps) {
    return (
        <div className="selectWorldScreen">
            <div className="selectWorldHeader" style={{ height: "115px" }}>
                <div className="selectWorldTitle" style={{ marginBottom: "10px" }}>Skills & Inventory</div>
            </div>

            <div className="selectWorldListContainer">
                <div style={{ maxWidth: "760px", margin: "0 auto", padding: "30px 40px", color: "#FFF", fontSize: "14px", lineHeight: "1.9" }}>
                    {skillCategories.map((category, index) => (
                        <div key={index} style={{ marginBottom: "24px" }}>
                            <h3 style={{ color: "#ffff55", marginBottom: "10px", textShadow: "2px 2px #3f3f00", fontSize: "16px" }}>
                                {category.title}
                            </h3>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                {category.skills.map((skill, sIndex) => (
                                    <span
                                        key={sIndex}
                                        style={{
                                            background: "rgba(0, 0, 0, 0.45)",
                                            border: "2px solid #555555",
                                            boxShadow: "inset -2px -2px #00000055, inset 2px 2px #ffffff22",
                                            padding: "6px 12px",
                                            fontSize: "12px",
                                            color: "#dddddd",
                                            textShadow: "1px 1px #000000",
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="selectWorldFooter" style={{ height: "100px" }}>
                <div className="selectWorldBtnRow1" style={{ maxWidth: "420px" }}>
                    <div className="mainBtn" onClick={() => { startMusic(); playClick(); onBack(); }}>
                        <div className="textBtn">Back</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
