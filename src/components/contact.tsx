"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.currentTarget);
            const response = await fetch("https://formsubmit.co/ajax/manaskumm@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSubmitted(true);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-24 bg-white/5" id="contact">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <p className="text-primary text-lg font-medium mb-2">Get in Touch</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Let's Work <span className="text-primary">Together</span>
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Feel free to reach out for collaborations or just to say hi!
                        <br />
                        <span className="text-primary font-medium">manaskumm@gmail.com</span>
                    </p>
                </div>

                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-md mx-auto bg-card border border-white/10 rounded-2xl p-8 text-center"
                    >
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="text-primary w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground mb-6">
                            Thank you for reaching out. I'll get back to you as soon as possible.
                        </p>
                        <Button
                            variant="outline"
                            onClick={() => setIsSubmitted(false)}
                            className="w-full"
                        >
                            Send Another Message
                        </Button>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        onSubmit={handleSubmit}
                        className="max-w-2xl mx-auto space-y-6"
                    >
                        {/* Honeypot */}
                        <input type="text" name="_honey" style={{ display: "none" }} />
                        {/* Disable Captcha */}
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                disabled={isSubmitting}
                                className="w-full bg-card border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                disabled={isSubmitting}
                                className="w-full bg-card border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            disabled={isSubmitting}
                            className="w-full bg-card border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            rows={6}
                            disabled={isSubmitting}
                            className="w-full bg-card border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-y disabled:opacity-50"
                        />
                        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto px-8 text-lg">
                            {isSubmitting ? "Sending..." : "Send Message Now"}
                        </Button>
                    </motion.form>
                )}
            </div>
        </section>
    );
}
