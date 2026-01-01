import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionTitle } from "@/components/common/SectionTitle";
import { StatCard, ProgramCard, TestimonialCard } from "@/components/common/Cards";
import { 
  GraduationCap, 
  Heart, 
  Users, 
  Sprout, 
  Target, 
  Award,
  ArrowRight,
  Play,
  Building,
  MapPin,
  Gift,
  Leaf,
  Stethoscope,
  Activity,
  BookOpen,
  Megaphone
} from "lucide-react";

// Import images
import heroImage from "@/assets/svsb.png";
import founderImage from "@/assets/team-member-4.jpg";
import healthCampImage from "@/assets/health-camp.jpg";
import youthTrainingImage from "@/assets/youth-training.jpg";
import ruralEducationImage from "@/assets/rural-education.jpg";

// Gallery images for events - using public folder paths to avoid import issues
// Note: These images should be in public folder or use import.meta.glob
const galleryImages = {
  1: '/gallery/svsb-gallery-1.jpg',
  2: '/gallery/svsb-gallery-2.jpg',
  3: '/gallery/svsb-gallery-3.jpg',
  4: '/gallery/svsb-gallery-4.jpg',
  5: '/gallery/svsb-gallery-5.jpg',
  6: '/gallery/svsb-gallery-6.jpg',
  7: '/gallery/svsb-gallery-7.jpg',
};

// Hero background images array - using public folder paths
// Images were moved to public folder to avoid import issues with special characters
const heroBackgrounds = [
  '/hero-bg-1.jpg',
  '/hero-bg-2.jpg',
  '/hero-bg-3.jpg',
  '/hero-bg-4.jpg',
  '/hero-bg-5.jpg',
];

const stats = [
  { value: "14+", label: "Years of Service", icon: Award },
  { value: "50,000+", label: "Lives Impacted", icon: Heart },
  { value: "1000+", label: "Programs", icon: MapPin },
  { value: "500+", label: "Volunteers", icon: Users },
];

const programs = [
  {
    title: "Education Programs",
    description: "Providing quality education to underprivileged children in rural areas through schools, scholarships, and learning centers.",
    image: ruralEducationImage,
    link: "/education-programs",
    icon: GraduationCap,
  },
  {
    title: "Health & Medical Camps",
    description: "Organizing regular health camps, medical check-ups, and awareness programs to ensure healthcare reaches every village.",
    image: healthCampImage,
    link: "/health-camps",
    icon: Heart,
  },
  {
    title: "Youth Development",
    description: "Training rural youth with modern skills, computer education, and vocational programs for better employment opportunities.",
    image: youthTrainingImage,
    link: "/youth-development",
    icon: Sprout,
  },
  {
    title: "Seva Doots – Community Service Day",
    description: "Supporting underprivileged communities with basic necessities. Volunteers distribute food, clothes, and essential items, bringing hope and comfort to those in need.",
    image: ruralEducationImage,
    link: "/programs",
    icon: Gift,
  },
  {
    title: "Green Bharat – Plantation & Environment Drive",
    description: "Promoting environmental sustainability and awareness. Organize tree plantation campaigns, cleanliness drives, and eco-friendly initiatives to create a greener community.",
    image: youthTrainingImage,
    link: "/programs",
    icon: Leaf,
  },
  {
    title: "Swasthya Mela – Health & Wellness Camp",
    description: "Providing accessible healthcare and raising health awareness. Conduct free medical check-ups, blood donation drives, and wellness programs.",
    image: healthCampImage,
    link: "/health-camps",
    icon: Stethoscope,
  },
  {
    title: "Organ Donation Campaigns",
    description: "Raising awareness about organ donation and saving lives. Organize awareness sessions, registration drives, and community programs to promote organ donation.",
    image: healthCampImage,
    link: "/programs",
    icon: Activity,
  },
  {
    title: "Yuva Shakti – Youth Empowerment Workshop",
    description: "Empowering youth and promoting a drug-free, responsible generation. Leadership training, skill development sessions, motivational talks, and Nasha Mukth Yuva programs.",
    image: youthTrainingImage,
    link: "/youth-development",
    icon: Users,
  },
  {
    title: "Vidya Utsav – Student Development & Co-Curricular Event",
    description: "Fostering academic and holistic growth among students. Organize competitions, workshops, and activities to develop creativity, confidence, and life skills.",
    image: ruralEducationImage,
    link: "/education-programs",
    icon: BookOpen,
  },
  {
    title: "Awareness & Social Campaigns",
    description: "Educating communities about welfare schemes and social responsibility. Conduct campaigns on government schemes, health, sanitation, and ethical living practices.",
    image: youthTrainingImage,
    link: "/programs",
    icon: Megaphone,
  },
];

const testimonials = [
  {
    quote: "I am deeply grateful for the free medical camps conducted by Swami Vivekananda Seva Brundam in our village. Many families received checkups, medicines, and health advice that we could never afford. Their compassion and dedication to community health make a real difference.",
    name: "M. Naresh Goud",
    role: "Thotapally Village",
  },
  {
    quote: "The environmental awareness drives and tree-planting activities led by Swami Vivekananda Seva Brundam have brought positive change to our surroundings. They taught us the value of protecting nature and keeping our village clean. Their efforts encourage all of us to take part and care for the environment.",
    name: "M. Durga Prasad",
    role: "Kalwakurthy",
  },
  {
    quote: "I am a school teacher from Kerala, and during the difficult days of the COVID-19 pandemic, Swami Vivekananda Seva Brundam stood by me with great compassion and support. When my family faced financial and emotional stress due to the lockdown, their timely help through the donation of food supplies and essential household needs helped us survive those challenging times with dignity. Along with material support, their moral encouragement gave us strength and hope. Their selfless service showed true humanity, and I will always remain grateful for their kindness and dedication to society.",
    name: "Kerala Teacher",
    role: "School Teacher, Kerala",
  },
];

const partners = [
  { name: "Partner 1", logo: "/partners/partner-1.png" },
  { name: "Partner 2", logo: "/partners/partner-2.png" },
  { name: "Partner 3", logo: "/partners/partner-3.jpeg" },
  { name: "Partner 4", logo: "/partners/partner-4.png" },
  { name: "Partner 5", logo: "/partners/partner-5.jpg" },
  { name: "Partner 6", logo: "/partners/partner-6.jpg" },
];

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload images to ensure they're ready and catch any errors
  useEffect(() => {
    heroBackgrounds.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        // Image loaded successfully
      };
      img.onerror = () => {
        console.error(`Failed to load hero background image: ${src}`);
      };
      img.src = src;
    });
  }, []);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroBackgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0">
          {heroBackgrounds.map((bg, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
              }`}
              style={{ 
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          ))}
        </div>
        <div className="hero-overlay" />
        <div className="absolute inset-0 bg-black/20 z-10" />
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroBackgrounds.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-white/50 w-2 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="container relative z-10 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 animate-fade-in">
                Serving Humanity Since 2012
              </p>
              
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight animate-slide-up drop-shadow-2xl">
                Empowering Youth And Society For Sustainable Development
              </h1>
              
              <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed animate-slide-up drop-shadow-md max-w-3xl mx-auto" style={{ animationDelay: '0.1s' }}>
                We are dedicated to transforming lives through education, healthcare, and community empowerment programs all over India.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <Link to="/donate">
                  <Button className="btn-primary">
                    Donate Now
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button className="btn-outline-light">
                    <Play className="mr-2" size={18} />
                    Our Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Brief Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                About the Trust
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Creating Meaningful Change in Society
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Swamivivekananda Seva Brundam was established with a vision to create meaningful 
                change in rural communities across India. Founded by National Youth Awardee 
                Shiva Kumar Gudlanaram, the organization has been working at the grassroots level 
                for over 14 years.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Initially started to support rural education, it has expanded into education, 
                healthcare, women empowerment, skill development, youth leadership, and sustainable 
                rural development.
              </p>
              <Link to="/about">
                <Button className="btn-secondary">
                  Learn More About Us
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="card-sharp p-8 bg-primary/5 border-2 border-primary/20 hover:border-primary/40 transition-all">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="text-primary" size={32} />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">Quality learning for all</p>
                </div>
                <div className="card-sharp p-8 bg-secondary/5 border-2 border-secondary/20 hover:border-secondary/40 transition-all">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <Leaf className="text-secondary" size={32} />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">Environment</h3>
                  <p className="text-sm text-muted-foreground">Building greener communities</p>
                </div>
              </div>
              <div className="space-y-6 pt-8">
                <div className="card-sharp p-8 bg-accent/5 border-2 border-accent/20 hover:border-accent/40 transition-all">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Heart className="text-accent" size={32} />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">Healthcare</h3>
                  <p className="text-sm text-muted-foreground">Medical care for everyone</p>
                </div>
                <div className="card-sharp p-8 bg-primary/5 border-2 border-primary/20 hover:border-primary/40 transition-all">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Sprout className="text-primary" size={32} />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">Youth Empowerment</h3>
                  <p className="text-sm text-muted-foreground">Building future leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-sharp p-10 border-t-4 border-t-primary">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Our Vision</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  To create a compassionate, service-minded, and empowered society inspired by the values of Swami Vivekananda. We aspire to build a community where every individual, especially the youth, is encouraged to serve the needy, protect the environment, and contribute positively to the nation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a future where social responsibility, human values, education, and unity guide people toward collective growth and harmony. Through dedicated service, awareness, and empowerment, our vision is to help shape a stronger, greener, and more inclusive nation for generations to come and an empowered society with Nasha Mukth Yuva, where every young person is free from drugs and dedicated to service, values, and nation-building.
                </p>
              </div>
            </div>
            <div className="card-sharp p-10 border-t-4 border-t-secondary">
              <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center mb-6">
                <Award className="text-secondary" size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  To serve humanity with compassion and dedication, following the ideals of Swami Vivekananda. We are committed to uplifting poor and needy individuals by providing food, clothing, and essential support.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We work towards protecting the environment through plantation drives, cleanliness programs, and awareness activities. Our organization conducts health camps, organ donation awareness programs, and other wellness initiatives for community well-being.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We focus on empowering youth through leadership development, value-based programs, and motivation to participate in nation-building. We also strive to spread awareness about government schemes, helping people access welfare benefits. Additionally, we support students by encouraging co-curricular activities, skill-building, and educational development. Through these efforts, we aim to build a stronger, healthier, and more service-oriented society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card border-r border-secondary-foreground/20 last:border-r-0 text-secondary-foreground">
                <stat.icon className="mx-auto mb-4 text-primary" size={40} />
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-secondary-foreground/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionTitle
            label="What We Do"
            title="Our Key Focus Areas"
            subtitle="We work across multiple sectors to bring holistic development to rural communities"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/education-programs">
              <Button className="btn-outline">
                View All Programs
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <img 
                  src={founderImage} 
                  alt="Shiva Kumar Gudlanaram - Founder" 
                  className="w-full shadow-sharp-primary"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary p-4 text-primary-foreground">
                  <Award size={32} />
                </div>
              </div>
            </div>
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Message from the Founder
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Shiva Kumar Gudlanaram
              </h2>
              <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-4">
                National Youth Awardee
              </p>
              <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground leading-relaxed mb-6">
                "Service to society is the highest form of worship. Our focus is on practical solutions 
                that improve lives at the grassroots level. We work towards environment protection, 
                youth development aligned with Viksit Bharat 2047, self-employment, agriculture development, 
                and health camps to build a self-reliant, healthy, and environmentally conscious India."
              </blockquote>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Swami Vivekananda Seva Brundam was born from a deep concern for the real challenges faced 
                by our society and a strong belief that sustainable change is possible only through collective 
                effort, discipline, and service. Inspired by the teachings of Swami Vivekananda, we are 
                committed to empowering youth, protecting the environment, supporting farmers, and ensuring 
                healthcare reaches underserved communities.
              </p>
              <Link to="/founder-message">
                <Button className="btn-secondary">
                  Read Full Message
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionTitle
            label="Testimonials"
            title="Stories of Impact"
            subtitle="Hear from the people whose lives have been transformed by our programs"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h3 className="text-center font-heading text-xl font-bold mb-8 text-muted-foreground">
            Our Partners & Supporters
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            Be Part of the Change
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-10">
            Your contribution, no matter how small, can make a significant difference in the 
            lives of thousands. Join us in our mission to transform rural India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/donate">
              <Button className="btn-primary">
                <Heart className="mr-2" size={18} />
                Donate Now
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button className="btn-outline-light">
                <Users className="mr-2" size={18} />
                Become a Volunteer
              </Button>
            </Link>
            <Link to="/csr-partnerships">
              <Button className="btn-outline-light">
                <Building className="mr-2" size={18} />
                CSR Partnership
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
