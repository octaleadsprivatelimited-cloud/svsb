import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "About Us", path: "/about" },
      { label: "Our Story", path: "/our-story" },
      { label: "Vision & Mission", path: "/vision-mission" },
      { label: "Founder Message", path: "/founder-message" },
      { label: "Board of Trustees", path: "/board-of-trustees" },
    ],
  },
  {
    label: "Programs",
    path: "/programs",
    children: [
      { label: "Education Programs", path: "/education-programs" },
      { label: "Rural Education", path: "/rural-education" },
      { label: "Health & Medical Camps", path: "/health-camps" },
      { label: "Women Empowerment", path: "/women-empowerment" },
      { label: "Youth Skill Development", path: "/youth-development" },
      { label: "Sustainable Development", path: "/sustainable-development" },
      { label: "Community Outreach", path: "/community-outreach" },
    ],
  },
  {
    label: "Get Involved",
    path: "/volunteer",
    children: [
      { label: "Volunteer Programs", path: "/volunteer" },
      { label: "Donate", path: "/donate" },
      { label: "How to Donate", path: "/how-to-donate" },
      { label: "CSR Partnerships", path: "/csr-partnerships" },
    ],
  },
  { label: "Our Impact", path: "/our-impact" },
  {
    label: "Resources",
    path: "/gallery",
    children: [
      { label: "Gallery", path: "/gallery" },
      { label: "Events", path: "/events" },
      { label: "Media & Press", path: "/media-press" },
      { label: "Annual Reports", path: "/annual-reports" },
      { label: "Awards", path: "/awards" },
    ],
  },
  { label: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 text-sm hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+917013570447" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} />
              <span>+91 70135 70447</span>
            </a>
            <a href="mailto:info@ysvsb.org" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} />
              <span>info@ysvsb.org</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/transparency" className="hover:text-primary transition-colors">Transparency</Link>
            <span className="text-muted-foreground">|</span>
            <Link to="/faqs" className="hover:text-primary transition-colors">FAQs</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/98 shadow-md backdrop-blur-sm"
            : "bg-background"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">SV</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading text-lg font-bold text-secondary leading-tight">
                  Swami Vivekananda
                </h1>
                <p className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
                  Seva Brundam
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`px-4 py-2 font-medium text-sm flex items-center gap-1 transition-colors ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} />}
                  </Link>
                  
                  {/* Dropdown */}
                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 bg-background border border-border shadow-lg min-w-[220px] animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-3 text-sm transition-colors border-b border-border last:border-b-0 ${
                            isActive(child.path)
                              ? "bg-primary/10 text-primary"
                              : "hover:bg-muted hover:text-primary"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Link to="/donate" className="hidden sm:block">
                <Button className="btn-primary">Donate Now</Button>
              </Link>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-foreground"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-slide-down">
            <div className="container py-4">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-border last:border-b-0">
                  <Link
                    to={item.path}
                    className={`block py-3 font-medium ${
                      isActive(item.path) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block py-2 text-sm ${
                            isActive(child.path)
                              ? "text-primary"
                              : "text-muted-foreground hover:text-primary"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/donate" className="block mt-4">
                <Button className="btn-primary w-full">Donate Now</Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
