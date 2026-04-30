"use client";

export function About() {
    return (
        <section id="about">
            <h3 style={{ color: '#aaa', marginBottom: '16px' }}>Education</h3>
            <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <strong>Rutgers University</strong>
                    <span>New Brunswick, NJ</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontStyle: 'italic', color: '#aaa' }}>
                    <span>B.S in Computer Science & B.A in Economics</span>
                    <span>Sep 2024 - May 2028</span>
                </div>
                <p style={{ marginTop: '8px' }}>GPA: 3.6 / 4.0</p>
                <p style={{ color: '#aaa', marginTop: '4px' }}>
                    Relevant Coursework: Calculus I, Calculus II, Linear Algebra, Intro to Computer Science, Data Structures, Computer Architecture, Discrete I, Discrete II, Microeconomics, Macroeconomics, Econometrics
                </p>
            </div>

            <h3 style={{ color: '#aaa', marginBottom: '16px', marginTop: '24px' }}>Experience</h3>

            <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <strong>Langpal</strong>
                    <span>Remote</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontStyle: 'italic', color: '#aaa' }}>
                    <span>Web Developer Intern</span>
                    <span>Feb 2026 - Present</span>
                </div>
                <ul style={{ marginTop: '8px', paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li>Built and maintained full-stack features using React and Next.js, contributing to both frontend UI components and backend API endpoints.</li>
                    <li>Designed and implemented responsive, accessible web pages that improved cross-device user experience.</li>
                    <li>Integrated RESTful APIs to enable dynamic data rendering and seamless client-server communication.</li>
                    <li>Collaborated with team members in an agile environment, participating in code reviews and iterative development cycles to ship features on schedule.</li>
                </ul>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <strong>Rutgers Math Corps</strong>
                    <span>New Brunswick, NJ</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontStyle: 'italic', color: '#aaa' }}>
                    <span>Program Assistant</span>
                    <span>July 2025 - August 2025</span>
                </div>
                <ul style={{ marginTop: '8px', paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li>Assisted students with educational assignments and provided constructive feedback.</li>
                    <li>Facilitated program operations and maintained a smoothly running learning environment.</li>
                    <li>Managed orders of food and supplies for use of over 300 people.</li>
                    <li>Ensured a supportive learning environment to enhance student confidence and comprehension.</li>
                </ul>
            </div>
        </section>
    );
}
