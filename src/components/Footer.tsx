import ThemedImg from "./ThemedImg";
import { YouTubeIcon, TelegramIcon, InstagramIcon } from "./icons";
import { contactEmail, contactHandle } from "../data";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <ThemedImg name="sard" alt="" className="footer__watermark" />
      <div className="footer__inner">
        <div className="footer__socials">
          <a className="footer__social" href="#" aria-label="YouTube"><YouTubeIcon /></a>
          <a className="footer__social" href="#" aria-label="Telegram"><TelegramIcon /></a>
          <a className="footer__social" href="#" aria-label="Instagram"><InstagramIcon /></a>
        </div>
        <div className="footer__contacts">
          <a className="footer__contact" href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a className="footer__contact" href="#">{contactHandle}</a>
        </div>
      </div>
    </footer>
  );
}
