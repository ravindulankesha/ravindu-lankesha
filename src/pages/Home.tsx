import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import myImage from "../assets/my-image.jpeg";

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="space-y-32">

      {/* HERO */}
      <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT TEXT */}
        <div className="space-y-6 max-w-2xl">

          <p className="text-muted-foreground">👋 Hello, I'm</p>

          <h1 className="text-5xl font-bold tracking-tight">
            Ravindu Weerathunga
          </h1>

          <p className="text-xl text-muted-foreground">
            Software Engineer focused on building
            clean, intuitive, and user-centered digital experiences.
          </p>

          <div className="flex gap-4">
            <Button onClick={() => {
              document.getElementById("designs")?.scrollIntoView({ behavior: "smooth" });
            }}>
              View Work
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* PROFILE IMAGE AREA */}
        <div
          className="relative w-72 h-72"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >

          {/* soft glow background */}
          <div className="absolute inset-0 bg-muted rounded-full blur-2xl scale-110 opacity-40"></div>

          {/* image box */}
          <div
            className={`relative w-full h-full rounded-full overflow-hidden border transition-all duration-300 ${
              hovered ? "scale-105 shadow-xl" : "scale-100"
            }`}
          >
            <img
              src={myImage}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-semibold">About Me</h2>

        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          I’m a designer with a strong technical background in software development.
          I enjoy understanding user problems and translating them into clean,
          usable interfaces that improve experience and usability.
        </p>
      </section>

      {/* FOCUS */}
      <section id="focus" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-semibold">What I Focus On</h2>

        <p className="text-muted-foreground max-w-3xl">
          UX thinking, interface design, and building smooth user flows.
          I focus on clarity, usability, and real-world impact.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-semibold">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Figma",
            "UI/UX Design",
            "Wireframing",
            "Prototyping",
            "User Research",
            "React",
            "Tailwind",
            "Laravel"
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-muted text-sm border hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* DESIGN WORK */}
      <section id="designs" className="scroll-mt-24 space-y-6">

        <h2 className="text-3xl font-semibold">Design Work</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Card
            className="hover:shadow-lg transition cursor-pointer"
          >
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">E-commerce UX Redesign</h3>
              <p className="text-muted-foreground">
                Improved checkout flow and product discovery experience.
              </p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition cursor-pointer"
          >
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">Mobile App UI Concept</h3>
              <p className="text-muted-foreground">
                Designed onboarding and user flow for a productivity app.
              </p>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 text-center space-y-6 py-16">

        <h2 className="text-3xl font-semibold">Let’s Work Together</h2>

        <p className="text-muted-foreground max-w-xl mx-auto">
          I’m open to UX/UI design roles and freelance opportunities.
        </p>

        {/* EMAIL BUTTON */}
        <Button size="lg" asChild className="hover:scale-105 transition">
          <a href="mailto:ravindulankesha@email.com">
            Email Me
          </a>
        </Button>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-6 text-sm text-muted-foreground pt-4">

          <a
            href="https://www.linkedin.com/in/ravindu-weerathunga-3565b8195/"
            target="_blank"
            className="hover:text-foreground transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/your-username"
            target="_blank"
            className="hover:text-foreground transition"
          >
            GitHub
          </a>

        </div>

      </section>

    </div>
  );
}