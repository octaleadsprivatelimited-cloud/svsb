import { Link } from "react-router-dom";
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
  MapPin
} from "lucide-react";

// Import images
import heroImage from "@/assets/hero-education.jpg";
import founderImage from "@/assets/team-member-4.jpg";
import healthCampImage from "@/assets/health-camp.jpg";
import youthTrainingImage from "@/assets/youth-training.jpg";
import ruralEducationImage from "@/assets/rural-education.jpg";

const stats = [
  { value: "12+", label: "Years of Service", icon: Award },
  { value: "50,000+", label: "Lives Impacted", icon: Heart },
  { value: "1000+", label: "Villages/Places Programs", icon: MapPin },
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
];

const testimonials = [
  {
    quote: "Swamivivekananda Seva Brundam transformed our village. My children now have access to quality education and healthcare that we could never have imagined.",
    name: "Lakshmi Devi",
    role: "Beneficiary, Kalwakurthy Village",
  },
  {
    quote: "The skill development program gave me the confidence and training to start my own tailoring business. I am now financially independent and can support my family.",
    name: "Padma Kumari",
    role: "Women Empowerment Program",
  },
  {
    quote: "As a volunteer, working with SVSB has been the most fulfilling experience. The dedication to rural communities is truly inspiring.",
    name: "Rajesh Kumar",
    role: "Volunteer, Hyderabad",
  },
];

const partners = [
  "Government of Telangana",
  "NABARD",
  "Ministry of Rural Development",
  "UNICEF India",
  "District Administration",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="hero-overlay" />
        
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 animate-fade-in">
              Serving Humanity Since 2012
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-foreground mb-6 leading-tight animate-slide-up">
              "Arise, Awake and Stop Not Till the Goal is Reached"
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/90 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              — Swami Vivekananda
            </p>
            <p className="text-lg text-secondary-foreground/80 mb-10 max-w-2xl animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Empowering rural communities through education, healthcare, and sustainable development. 
              Join us in our mission to create lasting change.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-secondary-foreground/50 flex items-start justify-center pt-2">
            <div className="w-1 h-3 bg-secondary-foreground/50" />
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
                Creating Meaningful Change in Rural India
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Swamivivekananda Seva Brundam was established with a vision to create meaningful 
                change in rural communities across India. Founded by National Youth Awardee 
                Shiva Kumar Gudlanaram, the organization has been working at the grassroots level 
                for over 15 years.
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
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 overflow-hidden">
                  <img src={ruralEducationImage} alt="Education" className="w-full h-full object-cover" />
                </div>
                <div className="h-64 overflow-hidden">
                  <img src={youthTrainingImage} alt="Community Development" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 overflow-hidden">
                  <img src={healthCampImage} alt="Health Camp" className="w-full h-full object-cover" />
                </div>
                <div className="h-48 overflow-hidden">
                  <img src={youthTrainingImage} alt="Youth Training" className="w-full h-full object-cover" />
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
              <p className="text-muted-foreground leading-relaxed">
                A society where every individual, especially from rural and underprivileged 
                communities, has access to quality education, healthcare, and opportunities 
                for sustainable livelihoods.
              </p>
            </div>
            <div className="card-sharp p-10 border-t-4 border-t-secondary">
              <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center mb-6">
                <Award className="text-secondary" size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower rural youth, women, and communities through integrated development 
                programs focusing on education, skill development, health awareness, and 
                sustainable practices.
              </p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                "True service begins when we see the divine in every human being. Our work 
                is not charity; it is our duty to our fellow citizens. Every child we educate, 
                every woman we empower, and every village we develop brings us closer to the 
                India that Swami Vivekananda envisioned."
              </blockquote>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Under his visionary leadership, Swamivivekananda Seva Brundam has grown from 
                a small initiative to a comprehensive rural development organization impacting 
                over 50,000 lives across 1000+ villages/places in Telangana.
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
              <div key={index} className="flex items-center gap-3 text-muted-foreground">
                <Building size={20} />
                <span className="font-medium">{partner}</span>
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
