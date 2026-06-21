"use client";

interface ContactProps {
    onBack: () => void;
    playClick: () => void;
    startMusic: () => void;
}

export function Contact({ onBack, playClick, startMusic }: ContactProps) {
    const handleBack = () => {
        startMusic();
        playClick();
        onBack();
    };

    return (
        <div className="selectWorldScreen">
            <div className="selectWorldHeader" style={{ height: "115px" }}>
                <div className="selectWorldTitle" style={{ marginBottom: "10px" }}>Multiplayer</div>
            </div>

            <div className="selectWorldListContainer">
                <div style={{ maxWidth: "760px", margin: "0 auto", padding: "30px 40px", color: "#FFF", fontSize: "14px", lineHeight: "2" }}>
                    <p style={{ color: "#ffff55", fontSize: "20px", fontWeight: "bold", textShadow: "2px 2px #000", marginBottom: "18px", textAlign: "center" }}>
                        Join My World
                    </p>
                    <p><strong style={{ color: "#ffff55" }}>Email:</strong> manaskumm@gmail.com</p>
                    <p><strong style={{ color: "#ffff55" }}>Phone:</strong> 732-527-7053</p>
                    <p>
                        <strong style={{ color: "#ffff55" }}>Portfolio:</strong>{" "}
                        <a href="https://manaskumm.github.io" target="_blank" rel="noopener noreferrer" style={{ color: "#7bf", textDecoration: "underline" }}>
                            manaskumm.github.io
                        </a>
                    </p>
                    <p>
                        <strong style={{ color: "#ffff55" }}>GitHub:</strong>{" "}
                        <a href="https://github.com/Manaskumm" target="_blank" rel="noopener noreferrer" style={{ color: "#7bf", textDecoration: "underline" }}>
                            github.com/Manaskumm
                        </a>
                    </p>
                    <p>
                        <strong style={{ color: "#ffff55" }}>LinkedIn:</strong>{" "}
                        <a href="https://linkedin.com/in/manas-kumm" target="_blank" rel="noopener noreferrer" style={{ color: "#7bf", textDecoration: "underline" }}>
                            linkedin.com/in/manas-kumm
                        </a>
                    </p>

                    <div style={{ marginTop: "24px", padding: "16px", background: "rgba(0, 0, 0, 0.45)", border: "2px solid #555555", boxShadow: "inset -2px -2px #00000055, inset 2px 2px #ffffff22" }}>
                        <p style={{ color: "#aaa", margin: 0 }}>
                            Feel free to reach out for collaborations, internship opportunities, or just to say hello!
                        </p>
                    </div>
                </div>
            </div>

            <div className="selectWorldFooter" style={{ height: "100px" }}>
                <div className="selectWorldBtnRow1" style={{ maxWidth: "420px" }}>
                    <div className="mainBtn" onClick={handleBack}>
                        <div className="textBtn">Back</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
