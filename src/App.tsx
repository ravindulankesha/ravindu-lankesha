import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import { Button } from "./components/ui/button.js";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full bg-background text-background">

        {/* Simple Navbar */}
        <nav className="px-8 py-4 flex gap-4 bg-foreground items-center">
          <Link to="/" className="text-background hover:text-muted-foreground">Home</Link>
          <Link to="/about" className="text-background hover:text-muted-foreground">About</Link>

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
