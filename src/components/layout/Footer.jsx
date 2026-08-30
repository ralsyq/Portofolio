import { FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { useClickSound } from '@/hooks/useClickSound';
import './Footer.css';

const FOLLOW_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/', icon: FaInstagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raisya-putri-agustin/', icon: FaLinkedin },
];

export function Footer() {
  const playClick = useClickSound();

  return (
    <footer id="connect-footer" className="footer-panel border-t border-border">
      <p className="footer-tagline">Let's get physical or keep it digital</p>
      <a
        href="https://www.linkedin.com/in/raisya-putri-agustin/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={playClick}
        className="footer-headline"
      >
        Get in touch
      </a>

      <div className="footer-follow">
        {FOLLOW_LINKS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="footer-follow-link"
          >
            {social.label}
          </a>
        ))}
      </div>

      <p className="footer-credit">{new Date().getFullYear()} Raisya Putri Agustin</p>
    </footer>
  );
}
