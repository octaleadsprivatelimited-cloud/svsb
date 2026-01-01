import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import heroEducation from "@/assets/hero-education.jpg";
import healthCamp from "@/assets/health-camp.jpg";
import youthTraining from "@/assets/youth-training.jpg";
import ruralEducation from "@/assets/rural-education.jpg";

interface NavChild {
  label: string;
  path: string;
  description?: string;
}

interface NavCategory {
  category: string;
  items: NavChild[];
  image?: string;
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
    image?: string;
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
          { label: "About Us", path: "/about", description: "Learn about our journey and impact" },
          { label: "Our Story", path: "/our-story", description: "How we started transforming lives" },
          { label: "Vision & Mission", path: "/vision-mission", description: "Our guiding principles" },
        ],
        image: heroEducation,
      },
      {
        category: "Leadership",
        items: [
          { label: "Founder Message", path: "/founder-message", description: "Words from our National Youth Awardee founder" },
          { label: "Board of Trustees", path: "/board-of-trustees", description: "Meet our visionary leaders" },
        ],
        image: youthTraining,
      },
    ],
    featured: {
      title: "Our Impact Story",
      description: "14+ years of transforming rural communities through education, healthcare, and empowerment.",
      link: "/our-impact",
      linkText: "View Impact",
      image: ruralEducation,
    },
  },
  {
    label: "Programs",
    path: "/programs",
    megaMenu: [
      {
        category: "Education",
        items: [
          { label: "Education Programs", path: "/education-programs", description: "Comprehensive learning initiatives for all" },
          { label: "Rural Education", path: "/rural-education", description: "Reaching remote areas with quality education" },
        ],
        image: heroEducation,
      },
      {
        category: "Health & Welfare",
        items: [
          { label: "Health & Medical Camps", path: "/health-camps", description: "Free healthcare services for communities" },
        ],
        image: healthCamp,
      },
      {
        category: "Development",
        items: [
          { label: "Youth Skill Development", path: "/youth-development", description: "Building future leaders with skills" },
          { label: "Sustainable Development", path: "/sustainable-development", description: "Eco-friendly community initiatives" },
          { label: "Community Outreach", path: "/community-outreach", description: "Grassroots programs for change" },
        ],
        image: youthTraining,
      },
    ],
    featured: {
      title: "Featured Program",
      description: "Youth Leadership Training - Shaping tomorrow's leaders through skill development and mentorship.",
      link: "/youth-development",
      linkText: "Learn More",
      image: youthTraining,
    },
  },
  {
    label: "Get Involved",
    path: "/volunteer",
    megaMenu: [
      {
        category: "Support Us",
        items: [
          { label: "Volunteer Programs", path: "/volunteer", description: "Join our mission and make a difference" },
          { label: "Donate", path: "/donate", description: "Support our cause with your contribution" },
          { label: "How to Donate", path: "/how-to-donate", description: "Multiple ways to contribute" },
        ],
        image: ruralEducation,
      },
      {
        category: "Partnerships",
        items: [
          { label: "CSR Partnerships", path: "/csr-partnerships", description: "Corporate social responsibility collaborations" },
        ],
        image: ruralEducation,
      },
    ],
    featured: {
      title: "Make a Difference",
      description: "Your contribution transforms lives. Join thousands who support our mission.",
      link: "/donate",
      linkText: "Donate Now",
      image: healthCamp,
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
          { label: "Gallery", path: "/gallery", description: "Photos & videos from our programs" },
          { label: "Media & Press", path: "/media-press", description: "News coverage and press releases" },
        ],
        image: heroEducation,
      },
      {
        category: "Reports",
        items: [
          { label: "Awards", path: "/awards", description: "Our achievements and recognition" },
          { label: "Testimonials", path: "/testimonials", description: "Success stories from beneficiaries" },
        ],
        image: ruralEducation,
      },
    ],
    featured: {
      title: "Our Awards",
      description: "Recognition for our commitment to community transformation and social impact.",
      link: "/awards",
      linkText: "View Awards",
      image: ruralEducation,
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
        className={`sticky top-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md"
            : "bg-white"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Swamivivekananda Seva Brundam" 
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
                </div>
              ))}
            </nav>

            {/* Desktop Donate Button */}
            <Link to="/donate" className="hidden lg:block">
              <Button className="btn-primary">Donate Now</Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Full Width Mega Menu Dropdown - Positioned relative to header */}
        <AnimatePresence>
          {navItems.map((item) => (
            item.megaMenu && openDropdown === item.label && (
              <motion.div 
                key={item.label}
                className="absolute left-0 right-0 top-full w-full"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
                onMouseEnter={() => {
                  setOpenDropdown(item.label);
                  setActiveCategory(item.megaMenu![0]?.category || null);
                }}
                onMouseLeave={() => {
                  setOpenDropdown(null);
                  setActiveCategory(null);
                }}
              >
                <div className="bg-background border-t border-b border-border shadow-2xl">
                  <div className="container">
                    <div className="grid grid-cols-12 gap-0 min-h-[400px]">
                              {/* Left - Categories with Images */}
                              <div className="col-span-8 grid grid-cols-3 gap-0 border-r border-border">
                                {item.megaMenu.map((category, catIndex) => (
                                  <motion.div
                                    key={category.category}
                                    className={`p-6 ${catIndex !== item.megaMenu!.length - 1 ? 'border-r border-border' : ''}`}
                                    variants={itemVariants}
                                    custom={catIndex}
                                    onMouseEnter={() => setActiveCategory(category.category)}
                                  >
                                    {/* Category Image */}
                                    {category.image && (
                                      <motion.div 
                                        className="relative h-32 mb-5 overflow-hidden rounded-none"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                      >
                                        <img 
                                          src={category.image} 
                                          alt={category.category}
                                          className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                                        <span className="absolute bottom-3 left-3 text-background text-xs font-bold uppercase tracking-wider">
                                          {category.category}
                                        </span>
                                      </motion.div>
                                    )}
                                    
                                    {/* Category Title (if no image) */}
                                    {!category.image && (
                                      <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-border">
                                        {category.category}
                                      </h3>
                                    )}
                                    
                                    {/* Links */}
                                    <div className="space-y-1">
                                      {category.items.map((subItem, index) => (
                                        <motion.div
                                          key={subItem.path}
                                          variants={itemVariants}
                                          custom={index}
                                        >
                                          <Link
                                            to={subItem.path}
                                            className={`group block py-2.5 transition-all duration-200 ${
                                              isActive(subItem.path) ? "" : ""
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
                                              <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                                {subItem.description}
                                              </div>
                                            )}
                                          </Link>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </motion.div>
                                ))}
                              </div>

                              {/* Right - Featured with Large Image */}
                              {item.featured && (
                                <motion.div 
                                  className="col-span-4 relative overflow-hidden"
                                  variants={itemVariants}
                                >
                                  {/* Background Image */}
                                  {item.featured.image && (
                                    <div className="absolute inset-0">
                                      <img 
                                        src={item.featured.image} 
                                        alt={item.featured.title}
                                        className="w-full h-full object-cover"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/60" />
                                    </div>
                                  )}
                                  
                                  {/* Content */}
                                  <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                                    <span className="inline-block text-xs font-bold text-primary uppercase tracking-wider bg-primary/20 px-3 py-1.5 rounded-none w-fit">
                                      Spotlight
                                    </span>
                                    <h4 className="font-heading font-bold text-background mt-5 text-xl leading-tight">
                                      {item.featured.title}
                                    </h4>
                                    <p className="text-sm text-background/80 mt-3 leading-relaxed max-w-xs">
                                      {item.featured.description}
                                    </p>
                                    <Link 
                                      to={item.featured.link}
                                      className="inline-flex items-center gap-2 text-primary text-sm font-bold mt-6 group bg-background px-4 py-2.5 hover:bg-primary hover:text-background transition-all duration-200 w-fit"
                                    >
                                      {item.featured.linkText}
                                      <ArrowRight 
                                        size={14} 
                                        className="group-hover:translate-x-1 transition-transform duration-200"
                                      />
                                    </Link>
                                  </div>
                                </motion.div>
                              )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Mobile Menu - Opens after header */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop - Below header only */}
              <motion.div
                className="fixed top-20 inset-x-0 bottom-0 bg-black/50 z-[99] lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              {/* Menu - Positioned right after header */}
              <motion.div 
                className="absolute top-full left-0 right-0 lg:hidden bg-background border-t border-border max-h-[calc(100vh-5rem)] overflow-y-auto z-[100] shadow-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="container py-4">
                  {/* Contact Details */}
                  <div className="border-b border-border pb-4 mb-4">
                    <div className="space-y-3">
                      <a href="tel:+917013570447" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                        <Phone size={18} className="flex-shrink-0" />
                        <span className="text-sm">+91 70135 70447</span>
                      </a>
                      <a href="mailto:info@ysvsb.org" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                        <Mail size={18} className="flex-shrink-0" />
                        <span className="text-sm">info@ysvsb.org</span>
                      </a>
                    </div>
                  </div>

                  {/* Navigation Items */}
                  {navItems.map((item) => (
                    <div key={item.label} className="border-b border-border last:border-b-0">
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
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
                                    onClick={() => setIsMobileMenuOpen(false)}
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
                  <Link to="/donate" onClick={() => setIsMobileMenuOpen(false)} className="block mt-4">
                    <Button className="btn-primary w-full">Donate Now</Button>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
