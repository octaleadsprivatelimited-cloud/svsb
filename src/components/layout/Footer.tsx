import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
// TODO: Add your footer background image to src/assets/ and uncomment the line below
// import footerBackground from "@/assets/footer-background.png";

const quickLinks = [
  { label: "About Us", path: "/about" },
  { label: "Our Programs", path: "/education-programs" },
  { label: "Donate", path: "/donate" },
  { label: "Volunteer", path: "/volunteer" },
  { label: "Events", path: "/events" },
  { label: "Contact Us", path: "/contact" },
];

const programLinks = [
  { label: "Education Programs", path: "/education-programs" },
  { label: "Health Camps", path: "/health-camps" },
  { label: "Women Empowerment", path: "/women-empowerment" },
  { label: "Youth Development", path: "/youth-development" },
  { label: "Rural Development", path: "/sustainable-development" },
];

const legalLinks = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms & Conditions", path: "/terms-conditions" },
  { label: "Transparency", path: "/transparency" },
  { label: "Annual Reports", path: "/annual-reports" },
];

export const Footer = () => {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          // Background image - add your image file to src/assets/ and uncomment the import above
          // backgroundImage: `url(${footerBackground})`,
          // Current gradient background matching the image description
          background: 'linear-gradient(135deg, rgba(240, 248, 255, 0.3) 0%, rgba(64, 224, 208, 0.4) 20%, rgba(135, 206, 235, 0.5) 50%, rgba(176, 224, 230, 0.4) 80%, rgba(240, 248, 255, 0.2) 100%)',
        }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-navy-dark/75" />
      
      {/* Main Footer */}
      <div className="container py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* About Section */}
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Swami Vivekananda Seva Brundam" 
                className="h-16 w-auto object-contain bg-white p-2"
              />
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              Empowering rural communities through education, healthcare, and sustainable development programs since 2008.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-secondary/50 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary/50 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary/50 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary/50 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary/50 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <button
              onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
              className="md:hidden w-full flex items-center justify-between font-heading text-lg font-bold mb-4 text-primary"
            >
              Quick Links
              <motion.span
                animate={{ rotate: isQuickLinksOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={20} />
              </motion.span>
            </button>
            <h4 className="hidden md:block font-heading text-lg font-bold mb-4 text-primary">Quick Links</h4>
            {/* Mobile: Collapsible */}
            <AnimatePresence>
              {isQuickLinksOpen && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden space-y-2"
                >
                  {quickLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-white/90 hover:text-primary transition-colors flex items-center gap-2 text-sm"
                      >
                        <ArrowRight size={14} />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
            {/* Desktop: Always visible */}
            <ul className="hidden md:block space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/90 hover:text-primary transition-colors flex items-center gap-2 text-sm"
                  >
                    <ArrowRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <button
              onClick={() => setIsProgramsOpen(!isProgramsOpen)}
              className="md:hidden w-full flex items-center justify-between font-heading text-lg font-bold mb-4 text-primary"
            >
              Our Programs
              <motion.span
                animate={{ rotate: isProgramsOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={20} />
              </motion.span>
            </button>
            <h4 className="hidden md:block font-heading text-lg font-bold mb-4 text-primary">Our Programs</h4>
            {/* Mobile: Collapsible */}
            <AnimatePresence>
              {isProgramsOpen && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden space-y-2"
                >
                  {programLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-white/90 hover:text-primary transition-colors flex items-center gap-2 text-sm"
                      >
                        <ArrowRight size={14} />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
            {/* Desktop: Always visible */}
            <ul className="hidden md:block space-y-2">
              {programLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/90 hover:text-primary transition-colors flex items-center gap-2 text-sm"
                  >
                    <ArrowRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+917013570447" className="flex items-start gap-3 text-white/90 hover:text-primary transition-colors">
                  <Phone size={18} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">+91 70135 70447</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@ysvsb.org" className="flex items-start gap-3 text-white/90 hover:text-primary transition-colors">
                  <Mail size={18} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">info@ysvsb.org</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/90">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    H No 6-113, Gandhinagar,<br />
                    Kalwakurthy Village & Mandal,<br />
                    Nagarkurnool District,<br />
                    Telangana – 509324
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/90 text-sm">
              © {new Date().getFullYear()} Swami Vivekananda Seva Brundam. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 mb-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white/90 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-white/90 text-sm">
              Website Donated By <span className="text-primary font-semibold">Octaleads Pvt Ltd.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
