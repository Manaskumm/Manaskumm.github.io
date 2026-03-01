"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Contact() {
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

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const name = formData.get("name");
                        const subject = formData.get("subject");
                        const message = formData.get("message");
                        window.location.href = `mailto:manaskumm@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Hi, my name is ${name}.\n\n${message}`)}`;
                    }}
                    className="max-w-2xl mx-auto space-y-6"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full bg-card border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full bg-card border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                        className="w-full bg-card border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        rows={6}
                        className="w-full bg-card border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-y"
                    />
                    <Button type="submit" size="lg" className="w-full md:w-auto px-8 text-lg">
                        Send Message Now
                    </Button>
                </motion.form>
            </div>
        </section>
    );
}
