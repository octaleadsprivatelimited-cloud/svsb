import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

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
  return (
    <footer className="bg-navy-dark text-secondary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="mb-6">
              <img 
                src={logo} 
                alt="Swami Vivekananda Seva Brundam" 
                className="h-16 w-auto object-contain bg-white p-2"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
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
            <h4 className="font-heading text-lg font-bold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
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
            <h4 className="font-heading text-lg font-bold mb-6 text-primary">Our Programs</h4>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
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
            <h4 className="font-heading text-lg font-bold mb-6 text-primary">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+917013570447" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={18} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">+91 70135 70447</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@ysvsb.org" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={18} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">info@ysvsb.org</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground">
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
      <div className="border-t border-secondary/30">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Swami Vivekananda Seva Brundam. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
