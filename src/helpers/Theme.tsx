
import React, { useEffect, useState } from "react";

const ThemeCollector = () => {
  // Initially set to undefined, will be updated once we check for localStorage
  const [theme, setTheme] = useState<string | undefined>(undefined);

  // Fetch theme from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "dark";
      setTheme(savedTheme);
      document.querySelector("html")?.setAttribute("data-theme", savedTheme);
    }
  }, []);

  // Handle theme change
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const newTheme = isChecked ? "cupcake" : "dark";
    setTheme(newTheme);
  };

  // Update localStorage and document when the theme changes
  useEffect(() => {
    if (theme) {
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", theme);
        document.querySelector("html")?.setAttribute("data-theme", theme);
      }
    }
  }, [theme]);

  return (
    <div className="fixed top-2/4 right-1 rounded-full flex justify-center items-center text-center w-[40px] h-[120px]">
      <label className="grid cursor-pointer place-items-center rotate-90">
        <input
          onChange={handleThemeChange}
          checked={theme === "cupcake"}
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
        />
        <svg
          className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <svg
          className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  );
};

export default ThemeCollector;
