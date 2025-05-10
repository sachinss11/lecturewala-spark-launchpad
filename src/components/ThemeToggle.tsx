
import { Button } from "@/components/ui/button";
import { LayoutGrid, LayoutList, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  const handleToggle = () => {
    toggleTheme();
    toast({
      title: `Switched to ${theme === "default" ? "Modern" : "Classic"} design`,
      description: `You're now viewing the ${theme === "default" ? "modern blue" : "classic yellow"} theme.`,
      duration: 2000,
    });
  };
  
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={handleToggle}
        className="rounded-full h-16 w-16 shadow-lg transition-all duration-300"
        variant={theme === "default" ? "outline" : "default"}
      >
        {theme === "default" ? (
          <Moon className="h-6 w-6" />
        ) : (
          <Sun className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default ThemeToggle;
