import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar from "./assets/avatar.png";
import { useState, useEffect, useRef } from "react";
import Home from "./pages/Home";
import { Button } from "./components/ui/button";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">

        {/* NAVBAR */}
        <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b bg-background/80 backdrop-blur">

          {/* LEFT */}
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={avatar} />
              <AvatarFallback>RV</AvatarFallback>
            </Avatar>

            <p className="font-semibold">Ravindu Weerathunga</p>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#focus" className="hover:text-foreground">Focus</a>
            <a href="#skills" className="hover:text-foreground">Skills</a>
            <a href="#designs" className="hover:text-foreground">Design Work</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <ModeToggle />

            {/* MOBILE BUTTON */}
            <Button
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
            >
              ☰
            </Button>
          </div>

          {/* MOBILE MENU */}
          <div
            ref={menuRef}
            className={`absolute top-16 left-0 w-full bg-background border-b flex flex-col gap-4 p-4 md:hidden transition-all ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#focus" onClick={() => setIsOpen(false)}>Focus</a>
            <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#designs" onClick={() => setIsOpen(false)}>Design Work</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </div>

        </nav>

        {/* PAGE */}
        <main className="px-6 py-10">
          <Home />
        </main>

      </div>
    </ThemeProvider>
  );
}