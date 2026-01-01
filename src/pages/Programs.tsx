import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProgramCard } from "@/components/common/Cards";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Heart, Users, Leaf, ArrowRight, Gift, Stethoscope, Activity, BookOpen, Megaphone } from "lucide-react";

import heroEducation from "@/assets/hero-education.jpg";
import healthCamp from "@/assets/health-camp.jpg";
import youthTraining from "@/assets/youth-training.jpg";
// Gallery images for events - using public folder paths
const galleryImages = {
  1: '/gallery/svsb-gallery-1.jpg',
  2: '/gallery/svsb-gallery-2.jpg',
  3: '/gallery/svsb-gallery-3.jpg',
  4: '/gallery/svsb-gallery-4.jpg',
  5: '/gallery/svsb-gallery-5.jpg',
  6: '/gallery/svsb-gallery-6.jpg',
  7: '/gallery/svsb-gallery-7.jpg',
  8: '/gallery/svsb-gallery-8.jpg',
  9: '/gallery/svsb-gallery-9.jpg',
  10: '/gallery/svsb-gallery-10.jpg',
  11: '/gallery/svsb-gallery-11.jpg',
  12: '/gallery/svsb-gallery-12.jpg',
  13: '/gallery/svsb-gallery-13.jpg',
  14: '/gallery/svsb-gallery-14.jpg',
  15: '/gallery/svsb-gallery-15.jpg',
  16: '/gallery/svsb-gallery-16.jpg',
  17: '/gallery/svsb-gallery-17.jpg',
  18: '/gallery/svsb-gallery-18.jpg',
};

const programCategories = [
  {
    title: "Education Programs",
    description: "Comprehensive learning initiatives for all ages, from primary education to adult literacy programs.",
    icon: GraduationCap,
    path: "/education-programs",
    image: heroEducation,
    features: ["Primary Education", "Scholarships", "Digital Learning", "Adult Literacy"],
  },
  {
    title: "Health & Medical Camps",
    description: "Free healthcare services and medical camps for communities in rural areas.",
    icon: Heart,
    path: "/health-camps",
    image: healthCamp,
    features: ["Free Health Checkups", "Medical Camps", "Health Awareness", "Medicine Distribution"],
  },
  {
    title: "Youth Development",
    description: "Building future leaders with skills, mentorship, and sustainable development programs.",
    icon: Leaf,
    path: "/youth-development",
    image: youthTraining,
    features: ["Skill Development", "Career Guidance", "Sustainable Development", "Community Outreach"],
  },
  {
    title: "Seva Doots – Community Service Day",
    description: "Supporting underprivileged communities with basic necessities. Volunteers distribute food, clothes, and essential items, bringing hope and comfort to those in need.",
    icon: Gift,
    path: "/programs",
    image: heroEducation,
    features: ["Food Distribution", "Clothes Distribution", "Essential Items", "Community Support"],
  },
  {
    title: "Green Bharat – Plantation & Environment Drive",
    description: "Promoting environmental sustainability and awareness. Organize tree plantation campaigns, cleanliness drives, and eco-friendly initiatives to create a greener community.",
    icon: Leaf,
    path: "/programs",
    image: youthTraining,
    features: ["Tree Plantation", "Cleanliness Drives", "Eco-friendly Initiatives", "Environmental Awareness"],
  },
  {
    title: "Swasthya Mela – Health & Wellness Camp",
    description: "Providing accessible healthcare and raising health awareness. Conduct free medical check-ups, blood donation drives, and wellness programs.",
    icon: Stethoscope,
    path: "/health-camps",
    image: healthCamp,
    features: ["Free Medical Checkups", "Blood Donation", "Wellness Programs", "Health Awareness"],
  },
  {
    title: "Organ Donation Campaigns",
    description: "Raising awareness about organ donation and saving lives. Organize awareness sessions, registration drives, and community programs to promote organ donation.",
    icon: Activity,
    path: "/programs",
    image: healthCamp,
    features: ["Awareness Sessions", "Registration Drives", "Community Programs", "Life Saving"],
  },
  {
    title: "Yuva Shakti – Youth Empowerment Workshop",
    description: "Empowering youth and promoting a drug-free, responsible generation. Leadership training, skill development sessions, motivational talks, and Nasha Mukth Yuva programs.",
    icon: Users,
    path: "/youth-development",
    image: youthTraining,
    features: ["Leadership Training", "Skill Development", "Motivational Talks", "Drug-Free Campaigns"],
  },
  {
    title: "Vidya Utsav – Student Development & Co-Curricular Event",
    description: "Fostering academic and holistic growth among students. Organize competitions, workshops, and activities to develop creativity, confidence, and life skills.",
    icon: BookOpen,
    path: "/education-programs",
    image: heroEducation,
    features: ["Competitions", "Workshops", "Creative Activities", "Life Skills Development"],
  },
  {
    title: "Awareness & Social Campaigns",
    description: "Educating communities about welfare schemes and social responsibility. Conduct campaigns on government schemes, health, sanitation, and ethical living practices.",
    icon: Megaphone,
    path: "/programs",
    image: youthTraining,
    features: ["Government Schemes", "Health Awareness", "Sanitation Programs", "Social Responsibility"],
  },
];

const Programs = () => {
  return (
    <Layout>
      <PageHero
        title="Our Programs"
        subtitle="Transforming lives through comprehensive community development initiatives"
      />

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
              Our Mission
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Empowering Communities Through Action
            </h2>
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
      </section>

      {/* Program Categories */}
      <section className="py-20 bg-cream">
        <div className="container">
          <SectionTitle
            label="Our Programs"
            title="Comprehensive Community Development"
            subtitle="Explore our diverse range of programs designed to uplift communities"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="card-sharp overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Icon className="text-background mb-2" size={32} />
                      <h3 className="font-heading text-xl font-bold text-background">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {category.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={category.path}>
                      <Button className="btn-primary w-full group">
                        Learn More
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-secondary-foreground/80 mb-8 leading-relaxed">
              Your support helps us continue our mission of transforming lives and building stronger communities. 
              Whether through volunteering, donations, or partnerships, every contribution matters.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/donate">
                <Button className="btn-primary">
                  Donate Now
                </Button>
              </Link>
              <Link to="/volunteer">
                <Button className="btn-outline bg-transparent border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                  Become a Volunteer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;

