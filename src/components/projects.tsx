"use client";

const projects = [
    {
        title: "Venture AI",
        date: "Feb 2026 - Mar 2026",
        stack: "Next.js, React, TypeScript, Groq, Gemini, Prisma, PostgreSQL, Clerk, SerpAPI",
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
                    <p style={{ color: '#aaa', marginTop: '4px', fontStyle: 'italic' }}>{project.stack}</p>
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
