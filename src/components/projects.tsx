"use client";

const projects = [
    {
        title: "Gmail Phishing Link Scanner",
        date: "Dec 2024 - January 2025",
        bullets: [
            "Developed a Chrome extension using React 18, Webpack 5, and Chrome Extension Manifest V3 that automatically scans Gmail emails to detect phishing attempts and suspicious content.",
            "Implemented real-time phishing detection with content scripts that analyze URLs for shorteners, typo squatting, and suspicious domains.",
            "Built a UI using React that employs a risk assessment for certain emails ranking them on a scale out of 100 with color coded alerts.",
        ],
        link: "https://github.com/Manaskumm/gmail-phishing-scanner",
    },
    {
        title: "S&P 500 Index Fund Predictor",
        date: "Dec 2024 - January 2025",
        bullets: [
            "Developed a predictive model using RandomForestClassifier to forecast S&P 500 price movements, achieving actionable insights into market trends with a focus on precision and accuracy.",
            "Visualized and analyzed historical stock market data using Python libraries (e.g., yfinance, pandas, matplotlib) to identify patterns and support data-driven decision-making.",
        ],
        link: "https://github.com/Manaskumm/S-P-Index-Fund-Predictor",
    },
    {
        title: "Text Animator",
        date: "Sep 2025 - Oct 2025",
        bullets: [
            "Developed an interactive Java-based animation application using Java Swing and AWT libraries, allowing users to input text and animate it across the screen with smooth movement and collision detection against window boundaries.",
            "Implemented keyboard event handling to enable user control over the animation direction (left, right, up, down) using arrow keys.",
            "Utilized a Timer-based animation loop to ensure smooth and consistent movement of the text, with adjustable speed and real-time position updates.",
        ],
        link: "https://github.com/Manaskumm/Text-Animator",
    },
];

export function Projects() {
    return (
        <section id="projects">
            {projects.map((project, index) => (
                <div key={index} style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        <strong>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#7bf', textDecoration: 'underline' }}
                            >
                                {project.title}
                            </a>
                        </strong>
                        <span style={{ color: '#aaa' }}>{project.date}</span>
                    </div>
                    <ul style={{ marginTop: '8px', paddingLeft: '20px', lineHeight: '1.8' }}>
                        {project.bullets.map((bullet, bIndex) => (
                            <li key={bIndex}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
