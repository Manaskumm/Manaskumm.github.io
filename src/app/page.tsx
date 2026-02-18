import { BackgroundPaths } from "@/components/ui/background-paths";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundPaths />

      <div className="relative z-10">
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
