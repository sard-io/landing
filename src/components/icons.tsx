export const SunIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

export const MoonIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const Chevron = ({ open, variant = "card" }: { open?: boolean; variant?: "card" | "faq" }) => {
  // base path points down (⌄).
  // card: down when closed, up when open. faq: right when closed, down when open.
  const rot = variant === "faq" ? (open ? 0 : -90) : open ? 180 : 0;
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
      style={{ transform: `rotate(${rot}deg)`, transition: "transform .25s" }}>
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
};

export const YouTubeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
  </svg>
);

export const TelegramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.9 4.3l-3.3 15.6c-.24 1.1-.9 1.36-1.82.85l-5-3.7-2.42 2.33c-.27.27-.5.5-1 .5l.36-5.08L18 5.4c.4-.36-.08-.56-.62-.2L6.9 12.1l-4.94-1.54c-1.07-.34-1.1-1.07.22-1.58L20.5 2.76c.9-.33 1.68.2 1.4 1.54z" />
  </svg>
);

export const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5.5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);
