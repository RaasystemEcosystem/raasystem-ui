import React from "react";

interface DarkModeToggleProps {
  darkMode: boolean;
  toggle: () => void;
}

export default function DarkModeToggle({ darkMode, toggle }: DarkModeToggleProps) {
  return (
    <button
      onClick={toggle}
      className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
