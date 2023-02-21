"use client";

import { useEffect, useState } from "react";

export function darkTheme() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") ?? "dark"
      : "dark"
  );

  useEffect(() => {
    // console.log("theme change");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
}
