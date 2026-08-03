import { Link } from "react-router-dom";
import { Github, Linkedin, Youtube } from "lucide-react";
import nexusLogo from "@/assets/nexus-x-logo.png";

const quickLinks = [
  { href: "/company", label: "About" },
  { href: "/platforms", label: "Platforms" },
  { href: "/industries", label: "Industries" },
  { href: "/investors", label: "Investors" },
  { href: "/careers", label: "Careers" },
  { href: "/news", label: "News" },
];

const platformLinks = [
  { href: "/platforms", label: "DTFS" },
  { href: "/platforms", label: "NexCare" },
  { href: "/platforms", label: "Nexus AI" },
  { href: "/platforms", label: "Nexus Cloud" },
  { href: "/platforms", label: "Nexus Identity" },
  { href: "/platforms", label: "Nexus Data" },
];

export const Footer = () => (
  <footer className="bg-midnight text-midnight-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-2">
          <Link to="/" className="mb-5 flex items-center gap-3">
            <img src={nexusLogo} alt="Nexus X Industries logo" className="h-9 w-auto" />
            <span className="font-display text-lg font-semibold">Nexus X Industries</span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-midnight-foreground/65">
            Building the digital infrastructure powering Africa's future. Secure, scalable and
            interoperable platforms for governments, enterprises and communities.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
              { href: "https://x.com", label: "X", Icon: XIcon },
              { href: "https://github.com", label: "GitHub", Icon: Github },
              { href: "https://youtube.com", label: "YouTube", Icon: Youtube },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-midnight-foreground/15 text-midnight-foreground/70 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-midnight-foreground/50">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-sm text-midnight-foreground/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-midnight-foreground/50">
            Platforms
          </h4>
          <ul className="space-y-3">
            {platformLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-sm text-midnight-foreground/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-midnight-foreground/50">
            Contact
          </h4>
          <div className="space-y-3 text-sm text-midnight-foreground/70">
            <a href="mailto:info@nexusxind.com" className="block transition-colors hover:text-accent">
              info@nexusxind.com
            </a>
            <a href="https://www.nexusxind.com" className="block transition-colors hover:text-accent">
              www.nexusxind.com
            </a>
            <p>Lagos, Nigeria</p>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-midnight-foreground/10 pt-8 md:flex-row">
        <p className="text-sm text-midnight-foreground/55">
          © {new Date().getFullYear()} Nexus X Industries Ltd. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-midnight-foreground/55">
          <Link to="/privacy" className="transition-colors hover:text-accent">
            Privacy
          </Link>
          <Link to="/terms" className="transition-colors hover:text-accent">
            Terms
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.9 2H22l-7.1 8.1L23.2 22h-6.6l-5.2-6.8L5.5 22H2.4l7.6-8.7L1.2 2h6.8l4.7 6.2L18.9 2Zm-1.1 18h1.7L7.3 3.8H5.5L17.8 20Z" />
    </svg>
  );
}
