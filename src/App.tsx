import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import { Button } from "./components/ui/button.js";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import avatar from "./assets/avatar.png";
import { useState, useEffect, useRef } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);       // div for mobile menu
  const buttonRef = useRef<HTMLButtonElement>(null);  

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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen w-full bg-background text-background">

        {/* Simple Navbar */}
        <nav className="px-8 py-4 gap-4 flex bg-foreground items-center">
          
            {/* Hamburger button for mobile */}
            <Button 
              ref={buttonRef} 
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden border-none ring-0 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          <Avatar>
            <AvatarImage src={avatar} alt="User avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-16">
            <p className="text-background"><i>Ravindu Lankesha</i></p>

            {/* Desktop links */}
            <div className="hidden sm:flex gap-6">
              <Link to="/" className="text-background hover:text-muted-foreground">Home</Link>
              <Link to="/" className="text-background hover:text-muted-foreground">About</Link>
              <Link to="/" className="text-background hover:text-muted-foreground">Projects</Link>
              <Link to="/" className="text-background hover:text-muted-foreground">Skills</Link>
              <Link to="/" className="text-background hover:text-muted-foreground">Contact</Link>
            </div>

          </div>
            <div
              ref={menuRef}
              className={`sm:hidden py-6 flex flex-col gap-4 w-fit bg-foreground pl-8 pr-14 absolute top-16 left-0 z-10
                transform transition-all duration-300 ease-in-out
                ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}
            >
              <Link to="/Home" className="text-background hover:text-muted-foreground" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/" className="text-background hover:text-muted-foreground" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/" className="text-background hover:text-muted-foreground" onClick={() => setIsOpen(false)}>Projects</Link>
              <Link to="/" className="text-background hover:text-muted-foreground" onClick={() => setIsOpen(false)}>Skills</Link>
              <Link to="/" className="text-background hover:text-muted-foreground" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
            <div className="ml-auto"><ModeToggle /></div>
        </nav>

        {/* Page Routes */}
        <div className="p-8">
          <Routes>
            <Route path="/Home" element={<Home />} />
          </Routes>
        </div>
        
      </div>
    </ThemeProvider>
  )
}

export default App
