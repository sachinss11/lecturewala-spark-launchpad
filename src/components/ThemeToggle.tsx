
import { Button } from "@/components/ui/button";
import { LayoutGrid, LayoutList } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={toggleTheme}
        className="rounded-full h-12 w-12 shadow-lg"
        variant="outline"
      >
        {theme === "default" ? (
          <LayoutGrid className="h-6 w-6" />
        ) : (
          <LayoutList className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default ThemeToggle;
