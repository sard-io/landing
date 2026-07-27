import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { asset } from "./assets";

type Theme = "dark" | "light";
const ThemeCtx = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
});

const getInitial = (): Theme => {
  const saved = typeof localStorage !== "undefined" && localStorage.getItem("theme");
  return saved === "light" ? "light" : "dark"; // dark is the default
};

// Assets that swap with the theme — preload the opposite theme so the first toggle never flashes.
const themedNames = [
  "sard",
  "web",
  "p2private",
  "levity",
  "fynzah",
  "resident",
  "partners-row1",
  "partners-row2",
];
function preload(theme: Theme) {
  for (const name of themedNames) {
    const src = asset(`${name}-${theme}`);
    if (src) new Image().src = src;
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitial);
  const mounted = useRef(false);

  // Persist + ensure the html attribute is correct on mount (toggle sets it synchronously otherwise).
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (mounted.current) localStorage.setItem("theme", theme);
    else mounted.current = true;
    preload(theme === "dark" ? "light" : "dark"); // warm the other theme's images
  }, [theme]);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    // Apply image swap (React) and the bg tokens (data-theme) in the SAME frame, so there's no
    // 1-frame mismatch. Wrap in a View Transition to cross-fade the whole page smoothly.
    const apply = () => {
      document.documentElement.setAttribute("data-theme", next);
      flushSync(() => setTheme(next));
    };
    const startVT = (
      document as Document & { startViewTransition?: (cb: () => void) => void }
    ).startViewTransition?.bind(document);
    if (startVT) startVT(apply);
    else apply();
  };

  return <ThemeCtx.Provider value={{ theme, toggle }}>{children}</ThemeCtx.Provider>;
}

export const useTheme = () => useContext(ThemeCtx);
