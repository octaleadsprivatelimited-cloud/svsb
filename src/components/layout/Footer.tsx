import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import footerBackground from "@/assets/footer-background.jpeg";

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
          backgroundImage: `url(${footerBackground})`,
        }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-navy-dark/85" />
      
      {/* Main Footer */}
      <div className="container py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* About Section */}
          <div>
            <div className="mb-4">
              <div className="bg-white p-2 rounded-xl overflow-hidden inline-block">
                <img 
                  src={logo} 
                  alt="Swamivivekananda Seva Brundam" 
                  className="h-12 w-32 object-contain"
                />
              </div>
            </div>
            <p className="text-white text-sm leading-relaxed mb-4 drop-shadow-md">
              Empowering rural communities through education, healthcare, and sustainable development programs since 2012.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/SwamivivekanandaSevaBrundam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary/50 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary/50 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.instagram.com/swamivivekananda_seva_brundam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary/50 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@swamivivekanandasevabrunda2675" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary/50 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Visit our YouTube channel"
              >
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
                        className="text-white hover:text-primary transition-colors flex items-center gap-2 text-sm drop-shadow-md"
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
                        className="text-white hover:text-primary transition-colors flex items-center gap-2 text-sm drop-shadow-md"
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
                <a href="tel:+917013570447" className="flex items-start gap-3 text-white hover:text-primary transition-colors drop-shadow-md">
                  <Phone size={18} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">+91 70135 70447</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@ysvsb.org" className="flex items-start gap-3 text-white hover:text-primary transition-colors drop-shadow-md">
                  <Mail size={18} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">info@ysvsb.org</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.app.goo.gl/PeRDRhnsbLHF8Cpo6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white hover:text-primary transition-colors drop-shadow-md"
                >
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    H No 6-113, Gandhinagar,<br />
                    Kalwakurthy Village & Mandal,<br />
                    Nagarkurnool District,<br />
                    Telangana – 509324
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm font-medium drop-shadow-lg">
              © {new Date().getFullYear()} Swamivivekananda Seva Brundam. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 mb-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white hover:text-primary transition-colors text-sm font-medium drop-shadow-lg"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-white text-sm font-medium drop-shadow-lg">
              Website Donated By{" "}
              <a 
                href="https://www.octaleads.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Octaleads Pvt Ltd.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
