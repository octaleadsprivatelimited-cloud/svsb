import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProgramCard } from "@/components/common/Cards";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Heart, Users, Leaf, ArrowRight } from "lucide-react";

import heroEducation from "@/assets/hero-education.jpg";
import healthCamp from "@/assets/health-camp.jpg";
import youthTraining from "@/assets/youth-training.jpg";

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
            <p className="text-muted-foreground leading-relaxed mb-6">
              Swami Vivekananda Seva Brundam is committed to transforming rural communities through 
              education, healthcare, and empowerment programs. Our comprehensive approach addresses 
              multiple aspects of community development to create lasting positive change.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over 15 years of dedicated service, we have impacted thousands of lives across 
              Telangana, creating opportunities for education, health, and economic empowerment.
            </p>
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
          
          <div className="grid md:grid-cols-2 gap-8">
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

