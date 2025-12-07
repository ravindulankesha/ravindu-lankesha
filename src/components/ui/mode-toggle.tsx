import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark")
    else setTheme("light")
  }

  return (
    <Button
    variant="secondary"
    size="icon"
    onClick={toggleTheme}
    aria-label="Toggle theme"
    className="border-none ring-0 focus:outline-none"
    >
    {theme === "light" ? (
        <Moon className="h-5 w-5 transition-all" />
    ) : (
        <Sun className="h-5 w-5 transition-all" />
    )}
    </Button>
  )
}
