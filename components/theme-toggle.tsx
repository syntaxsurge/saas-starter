"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  function getCurrentIcon() {
    if (!mounted) {
      return <Laptop className="h-4 w-4" />;
    }
    // Toggle icon based on current theme: show Sun for light, Moon for dark.
    return theme === "light" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />;
  }

  const toggleTheme = () => {
    // Automatically toggle between light and dark theme on click
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full h-9 px-2 shadow-sm"
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      {getCurrentIcon()}
    </Button>
  );
}