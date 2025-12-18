import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

interface NavChild {
  label: string;
  path: string;
  description?: string;
}

interface NavCategory {
  category: string;
  items: NavChild[];
}

interface NavItem {
  label: string;
  path: string;
  children?: NavChild[];
  megaMenu?: NavCategory[];
  featured?: {
    title: string;
    description: string;
    link: string;
    linkText: string;
  };
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    megaMenu: [
      {
        category: "Know Us",
        items: [
          { label: "About Us", path: "/about", description: "Learn about our journey" },
          { label: "Our Story", path: "/our-story", description: "How we started" },
          { label: "Vision & Mission", path: "/vision-mission", description: "Our guiding principles" },
        ],
      },
      {
        category: "Leadership",
        items: [
          { label: "Founder Message", path: "/founder-message", description: "Words from our founder" },
          { label: "Board of Trustees", path: "/board-of-trustees", description: "Meet our leaders" },
        ],
      },
    ],
    featured: {
      title: "Our Impact Story",
      description: "15+ years of transforming rural communities",
      link: "/our-impact",
      linkText: "View Impact",
    },
  },
  {
    label: "Programs",
    path: "/programs",
    megaMenu: [
      {
        category: "Education",
        items: [
          { label: "Education Programs", path: "/education-programs", description: "Comprehensive learning initiatives" },
          { label: "Rural Education", path: "/rural-education", description: "Reaching remote areas" },
        ],
      },
      {
        category: "Health & Welfare",
        items: [
          { label: "Health & Medical Camps", path: "/health-camps", description: "Free healthcare services" },
          { label: "Women Empowerment", path: "/women-empowerment", description: "Empowering women leaders" },
        ],
      },
      {
        category: "Development",
        items: [
          { label: "Youth Skill Development", path: "/youth-development", description: "Building future leaders" },
          { label: "Sustainable Development", path: "/sustainable-development", description: "Eco-friendly initiatives" },
          { label: "Community Outreach", path: "/community-outreach", description: "Grassroots programs" },
        ],
      },
    ],
    featured: {
      title: "Featured Program",
      description: "Youth Leadership Training - Shaping tomorrow's leaders",
      link: "/youth-development",
      linkText: "Learn More",
    },
  },
  {
    label: "Get Involved",
    path: "/volunteer",
    megaMenu: [
      {
        category: "Support Us",
        items: [
          { label: "Volunteer Programs", path: "/volunteer", description: "Join our mission" },
          { label: "Donate", path: "/donate", description: "Make a difference today" },
          { label: "How to Donate", path: "/how-to-donate", description: "Ways to contribute" },
        ],
      },
      {
        category: "Partnerships",
        items: [
          { label: "CSR Partnerships", path: "/csr-partnerships", description: "Corporate collaborations" },
        ],
      },
    ],
    featured: {
      title: "Make a Difference",
      description: "Your contribution transforms lives",
      link: "/donate",
      linkText: "Donate Now",
    },
  },
  { label: "Our Impact", path: "/our-impact" },
  {
    label: "Resources",
    path: "/gallery",
    megaMenu: [
      {
        category: "Media",
        items: [
          { label: "Gallery", path: "/gallery", description: "Photos & videos" },
          { label: "Events", path: "/events", description: "Upcoming activities" },
          { label: "Media & Press", path: "/media-press", description: "News coverage" },
        ],
      },
      {
        category: "Reports",
        items: [
          { label: "Annual Reports", path: "/annual-reports", description: "Yearly documentation" },
          { label: "Awards", path: "/awards", description: "Our achievements" },
          { label: "Testimonials", path: "/testimonials", description: "Success stories" },
        ],
      },
    ],
    featured: {
      title: "Annual Report 2024",
      description: "Our journey of impact and transparency",
      link: "/annual-reports",
      linkText: "Read Report",
    },
  },
  { label: "Contact", path: "/contact" },
];

// Animation variants
const dropdownVariants = {
  hidden: { 
    opacity: 0, 
    y: -10,
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.05
    }
  },
  exit: { 
    opacity: 0, 
    y: -8,
    scale: 0.98,
    transition: {
      duration: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.2 }
  }
};

const categoryVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.03
    }
  }
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileOpenItems, setMobileOpenItems] = useState<string[]>([]);
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
    setActiveCategory(null);
    setMobileOpenItems([]);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = (item: NavItem) => {
    if (item.megaMenu) {
      setOpenDropdown(item.label);
      setActiveCategory(item.megaMenu[0]?.category || null);
    }
  };

  const toggleMobileItem = (label: string) => {
    setMobileOpenItems(prev => 
      prev.includes(label) 
        ? prev.filter(i => i !== label)
        : [...prev, label]
    );
  };

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
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Swami Vivekananda Seva Brundam" 
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={() => {
                    setOpenDropdown(null);
                    setActiveCategory(null);
                  }}
                >
                  <Link
                    to={item.path}
                    className={`px-4 py-2 font-medium text-sm flex items-center gap-1 transition-colors ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    } ${openDropdown === item.label ? "text-primary" : ""}`}
                  >
                    {item.label}
                    {item.megaMenu && (
                      <motion.span
                        animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={14} />
                      </motion.span>
                    )}
                  </Link>
                  
                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {item.megaMenu && openDropdown === item.label && (
                      <motion.div 
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                      >
                        {/* Arrow indicator */}
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-background border-l border-t border-border rotate-45 z-10" />
                        
                        <div className="bg-background border border-border shadow-2xl rounded-lg overflow-hidden min-w-[780px]">
                          <div className="flex">
                            {/* Left Categories Sidebar */}
                            <div className="w-52 bg-muted/20 border-r border-border py-5">
                              <div className="px-5 mb-3">
                                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                  Categories
                                </span>
                              </div>
                              {item.megaMenu.map((category, index) => (
                                <motion.button
                                  key={category.category}
                                  onMouseEnter={() => setActiveCategory(category.category)}
                                  variants={itemVariants}
                                  custom={index}
                                  className={`w-full text-left px-5 py-3.5 text-sm font-medium flex items-center justify-between transition-all duration-200 ${
                                    activeCategory === category.category
                                      ? "text-primary bg-background border-l-3 border-primary"
                                      : "text-foreground hover:text-primary hover:bg-background/60 border-l-3 border-transparent"
                                  }`}
                                >
                                  {category.category}
                                  <ChevronRight 
                                    size={14} 
                                    className={`transition-transform duration-200 ${
                                      activeCategory === category.category 
                                        ? "text-primary translate-x-1" 
                                        : "text-muted-foreground"
                                    }`} 
                                  />
                                </motion.button>
                              ))}
                            </div>

                            {/* Middle - Sub Items */}
                            <div className="flex-1 p-6">
                              <AnimatePresence mode="wait">
                                {item.megaMenu.map((category) => (
                                  activeCategory === category.category && (
                                    <motion.div 
                                      key={category.category} 
                                      className="grid grid-cols-2 gap-2"
                                      initial="hidden"
                                      animate="visible"
                                      exit="hidden"
                                      variants={categoryVariants}
                                    >
                                      {category.items.map((subItem, index) => (
                                        <motion.div
                                          key={subItem.path}
                                          variants={itemVariants}
                                          custom={index}
                                        >
                                          <Link
                                            to={subItem.path}
                                            className={`group block p-4 rounded-lg hover:bg-primary/5 transition-all duration-200 ${
                                              isActive(subItem.path) ? "bg-primary/10" : ""
                                            }`}
                                          >
                                            <div className={`text-sm font-semibold group-hover:text-primary transition-colors flex items-center gap-2 ${
                                              isActive(subItem.path) ? "text-primary" : "text-foreground"
                                            }`}>
                                              {subItem.label}
                                              <ArrowRight 
                                                size={12} 
                                                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" 
                                              />
                                            </div>
                                            {subItem.description && (
                                              <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                                                {subItem.description}
                                              </div>
                                            )}
                                          </Link>
                                        </motion.div>
                                      ))}
                                    </motion.div>
                                  )
                                ))}
                              </AnimatePresence>
                            </div>

                            {/* Right - Featured */}
                            {item.featured && (
                              <motion.div 
                                className="w-60 bg-gradient-to-br from-primary/5 to-primary/10 p-6 border-l border-border"
                                variants={itemVariants}
                              >
                                <span className="inline-block text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded">
                                  Spotlight
                                </span>
                                <h4 className="font-heading font-bold text-foreground mt-4 text-base leading-tight">
                                  {item.featured.title}
                                </h4>
                                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                  {item.featured.description}
                                </p>
                                <Link 
                                  to={item.featured.link}
                                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold mt-5 group"
                                >
                                  {item.featured.linkText}
                                  <ArrowRight 
                                    size={14} 
                                    className="group-hover:translate-x-1 transition-transform duration-200"
                                  />
                                </Link>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="lg:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container py-4">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-border last:border-b-0">
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.path}
                        className={`flex-1 py-3 font-medium ${
                          isActive(item.path) ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                      {item.megaMenu && (
                        <button
                          onClick={() => toggleMobileItem(item.label)}
                          className="p-3 text-muted-foreground"
                        >
                          <motion.span
                            animate={{ rotate: mobileOpenItems.includes(item.label) ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={18} />
                          </motion.span>
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {item.megaMenu && mobileOpenItems.includes(item.label) && (
                        <motion.div 
                          className="pl-4 pb-3 space-y-3"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.megaMenu.map((category) => (
                            <div key={category.category}>
                              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                                {category.category}
                              </div>
                              {category.items.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  className={`block py-2 text-sm ${
                                    isActive(subItem.path)
                                      ? "text-primary"
                                      : "text-muted-foreground hover:text-primary"
                                  }`}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <Link to="/donate" className="block mt-4">
                  <Button className="btn-primary w-full">Donate Now</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
