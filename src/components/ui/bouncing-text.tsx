"use client";

import { useEffect, useRef } from "react";

export function BouncingText() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>();

    // State for physics
    const position = useRef({ x: 50, y: 50 });
    const velocity = useRef({ x: 2, y: 2 });

    useEffect(() => {
        const animate = () => {
            if (!containerRef.current || !textRef.current) return;

            const container = containerRef.current.getBoundingClientRect();
            const text = textRef.current.getBoundingClientRect();

            // Update position
            position.current.x += velocity.current.x;
            position.current.y += velocity.current.y;

            // Collision detection
            if (position.current.x <= 0 || position.current.x + text.width >= container.width) {
                velocity.current.x *= -1;
                // Clamp position
                position.current.x = Math.max(0, Math.min(position.current.x, container.width - text.width));
            }

            if (position.current.y <= 0 || position.current.y + text.height >= container.height) {
                velocity.current.y *= -1;
                // Clamp position
                position.current.y = Math.max(0, Math.min(position.current.y, container.height - text.height));
            }

            // Apply transform
            textRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 bg-black/90 overflow-hidden">
            <div
                ref={textRef}
                className="absolute top-0 left-0 text-2xl font-bold text-white whitespace-nowrap px-4 py-2 rounded-lg"
                style={{ willChange: "transform" }}
            >
                Manas
            </div>
        </div>
    );
}
