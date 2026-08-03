import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import nexusLogo from "@/assets/nexus-x-logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/company", label: "Company" },
  { href: "/platforms", label: "Platforms" },
  { href: "/industries", label: "Industries" },
  { href: "/innovation", label: "Innovation" },
  { href: "/investors", label: "Investors" },
  { href: "/news", label: "News" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

interface NavbarProps {
  transparent?: boolean;
}

export const Navbar = ({ transparent = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const floating = transparent && !scrolled && !isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        floating
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border bg-background/85 backdrop-blur-xl"
      }`}
    >
      <nav className="container" aria-label="Main">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={nexusLogo} alt="Nexus X Industries logo" className="h-9 w-auto" />
            <span
              className={`hidden font-display text-lg font-semibold sm:block ${
                floating ? "text-midnight-foreground" : "text-foreground"
              }`}
            >
              Nexus X Industries
            </span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.slice(1, -1).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href
                    ? "text-primary"
                    : floating
                      ? "text-midnight-foreground/75"
                      : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle className={floating ? "text-midnight-foreground hover:text-midnight-foreground" : ""} />
            <Button asChild className="rounded-full font-semibold">
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle className={floating ? "text-midnight-foreground" : ""} />
            <button
              className={`flex h-11 w-11 items-center justify-center rounded-full ${
                floating ? "text-midnight-foreground" : "text-foreground"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-border py-5 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-md px-2 py-2.5 text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 rounded-full font-semibold">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Partner With Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
