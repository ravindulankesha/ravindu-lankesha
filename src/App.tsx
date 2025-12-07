import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import { Button } from "./components/ui/button.js";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import avatar from "./assets/avatar.png";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full bg-background text-background">

        {/* Simple Navbar */}
        <nav className="px-8 py-4 gap-4 flex bg-foreground items-center">
          <Avatar>
            <AvatarImage src={avatar} alt="User avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-16">
            <p className="text-background"><i>Ravindu Lankesha</i></p>
            <div className="flex gap-6">
              <Link to="/" className="text-background hover:text-muted-foreground">Home</Link>
              <Link to="/about" className="text-background hover:text-muted-foreground">About</Link>
              <Link to="/projects" className="text-background hover:text-muted-foreground">Projects</Link>
              <Link to="/skills" className="text-background hover:text-muted-foreground">Skills</Link>
              <Link to="/contact" className="text-background hover:text-muted-foreground">Contact</Link>
            </div>
          </div>
          <div className="ml-auto"><ModeToggle /></div>
        </nav>

        {/* Page Routes */}
        <div className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        
      </div>
    </ThemeProvider>
  )
}

export default App
