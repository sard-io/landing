import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

export type Lang = "ru" | "en";
const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; toggle: () => void }>({
  lang: "ru",
  setLang: () => {},
  toggle: () => {},
});

// URL routes /ru and /en select the language; a bare / falls back to the saved choice.
const fromPath = (): Lang | null => {
  const seg = location.pathname.split("/")[1];
  return seg === "en" ? "en" : seg === "ru" ? "ru" : null;
};

const getInitial = (): Lang => {
  const path = fromPath();
  if (path) return path;
  const saved = typeof localStorage !== "undefined" && localStorage.getItem("lang");
  return saved === "en" ? "en" : "ru"; // Russian is the default
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitial);
  const mounted = useRef(false);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("lang", lang);
    // keep the URL on /ru | /en: normalize silently on load, push on user switches
    const path = `/${lang}`;
    if (location.pathname !== path) {
      const url = path + location.search + location.hash;
      if (mounted.current) history.pushState(null, "", url);
      else history.replaceState(null, "", url);
    }
    mounted.current = true;
  }, [lang]);

  // back/forward between /ru and /en re-applies the language
  useEffect(() => {
    const onPop = () => {
      const l = fromPath();
      if (l) setLang(l);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const toggle = () => setLang((l) => (l === "ru" ? "en" : "ru"));

  return <LangCtx.Provider value={{ lang, setLang, toggle }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
