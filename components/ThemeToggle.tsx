"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Desktop } from "phosphor-react";

export default function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme();

  const getIcon = () => {
    if (theme === "system") {
      return <Desktop size={20} weight="bold" />;
    }
    if (theme === "dark") {
      return <Moon size={20} weight="bold" />;
    }
    return <Sun size={20} weight="bold" />;
  };

  const getLabel = () => {
    if (theme === "system") return "System";
    if (theme === "dark") return "Dark";
    return "Light";
  };

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <button
      onClick={cycleTheme}
      className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors hover:bg-primary-light text-foreground"
      aria-label={`Current theme: ${theme}. Click to change.`}
      title={`Theme: ${getLabel()} (click to change)`}
    >
      {getIcon()}
      <span className="hidden md:inline-block">{getLabel()}</span>
    </button>
  );
}
