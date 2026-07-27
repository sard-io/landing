import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

export type Lang = "ru" | "en";
const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; toggle: () => void }>({
  lang: "ru",
  setLang: () => {},
  toggle: () => {},
});

const getInitial = (): Lang => {
  const saved = typeof localStorage !== "undefined" && localStorage.getItem("lang");
  return saved === "en" ? "en" : "ru"; // Russian is the default
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitial);
  const mounted = useRef(false);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    if (mounted.current) localStorage.setItem("lang", lang);
    else mounted.current = true;
  }, [lang]);

  const toggle = () => setLang((l) => (l === "ru" ? "en" : "ru"));

  return <LangCtx.Provider value={{ lang, setLang, toggle }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
