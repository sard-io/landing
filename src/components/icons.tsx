// Spiderweb glyph from the sard.io hero title (original inline SVG, brand teal).
export const WebIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 45 43" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M18.0085 11.6508L12.2967 13.7669L11.3748 6.68533H16.5973L18.0085 11.6508Z" fill="#53CA9F" />
    <path d="M23.2825 20.0785L15.8608 27.621L12.8941 16.8887L19.3218 14.5107L23.2825 20.0785Z" fill="#53CA9F" />
    <path d="M31.039 25.6411L28.0054 34.1212L17.8488 30.0514L25.5384 22.2313L31.039 25.6411Z" fill="#53CA9F" />
    <path d="M31.4202 6.68533L20.9185 10.5718L19.8163 6.68533H31.4202Z" fill="#53CA9F" />
    <path d="M34.1602 9.01617L25.4921 17.8262L22.34 13.3898H22.3451L34.1602 9.01617Z" fill="#53CA9F" />
    <path d="M36.1019 11.4832L32.1155 22.6241L27.7891 19.9423L36.1019 11.4832Z" fill="#53CA9F" />
    <path d="M38.6359 13.5993V23.3941H35.1285L38.6359 13.5993Z" fill="#53CA9F" />
    <path d="M38.6359 26.5368V34.0845L31.1627 34.4826L34.0057 26.542V26.5368H38.6359Z" fill="#53CA9F" />
    <path d="M0.816406 0.399902V32.0313C2.90747 34.1579 4.54016 35.8183 6.17284 37.4787L13.3577 30.1719L9.979 17.9624L6.14709 19.3819V16.0401L9.31974 14.8669L8.25876 6.68533H6.14709V3.54261H41.7262V39.7257H38.6359V37.2325L30.0141 37.6882L29.2879 39.7257H25.9968L26.9445 37.0806L15.4642 32.4713L8.35662 39.6995C9.30944 40.6633 10.3241 41.6951 11.4778 42.8737H44.8164V0.399902H0.816406Z" fill="#53CA9F" />
  </svg>
);

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
