"use client";

interface SkillsProps {
    onBack: () => void;
    playClick: () => void;
    startMusic: () => void;
}

import { skillCategories } from "@/lib/portfolio";

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
