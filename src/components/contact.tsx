"use client";

export function Contact() {
    return (
        <section id="contact">
            <div style={{ lineHeight: '2' }}>
                <p><strong style={{ color: '#ffff00' }}>Email:</strong> manaskumm@gmail.com</p>
                <p><strong style={{ color: '#ffff00' }}>Phone:</strong> 732-527-7053</p>
                <p>
                    <strong style={{ color: '#ffff00' }}>GitHub:</strong>{' '}
                    <a href="https://github.com/Manaskumm" target="_blank" rel="noopener noreferrer" style={{ color: '#7bf', textDecoration: 'underline' }}>
                        github.com/Manaskumm
                    </a>
                </p>
                <p>
                    <strong style={{ color: '#ffff00' }}>LinkedIn:</strong>{' '}
                    <a href="https://linkedin.com/in/manas-kumm" target="_blank" rel="noopener noreferrer" style={{ color: '#7bf', textDecoration: 'underline' }}>
                        linkedin.com/in/manas-kumm
                    </a>
                </p>
            </div>

            <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <p style={{ color: '#aaa' }}>
                    Feel free to reach out for collaborations, internship opportunities, or just to say hello!
                </p>
            </div>
        </section>
    );
}
