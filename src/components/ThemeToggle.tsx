"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div>
      {/* className="my-7 cursor-pointer rounded-md px-7 py-4 text-xl  text-gbWhite  hover:bg-sky-400 md:my-0 md:ml-8  md:px-3 md:py-1 md:text-sm  lg:px-7 lg:py-4" */}

      <button
        className="hover:text-gbWhite hover:bg-gbBlue my-7 rounded-md px-7 py-4  text-xl md:my-0 md:ml-8 md:px-3  md:py-1 md:text-sm lg:px-4  lg:py-3"
        onClick={() => setTheme("light")}
      >
        Light Mode
      </button>

      <button
        className="hover:text-gbWhite hover:bg-gbBlue my-7 rounded-md px-7 py-4 text-xl md:my-0 md:ml-8 md:px-3  md:py-1 md:text-sm lg:px-4  lg:py-3"
        onClick={() => setTheme("dark")}
      >
        Dark Mode
      </button>
    </div>
  );
}
