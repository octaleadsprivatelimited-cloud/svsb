import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProgramCard } from "@/components/common/Cards";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, School, Award, ArrowRight } from "lucide-react";

import ruralEducationImage from "@/assets/rural-education.jpg";

const programs = [
  {
    title: "Primary Education Support",
    description: "Providing quality primary education to children in rural areas through learning centers and government school support programs.",
    features: ["Learning materials", "Qualified teachers", "Regular assessments"],
  },
  {
    title: "Scholarship Programs",
    description: "Financial support for meritorious students from underprivileged families to continue their education.",
    features: ["Merit-based selection", "Annual scholarships", "Higher education support"],
  },
  {
    title: "Digital Learning Centers",
    description: "Computer education centers in rural areas to bridge the digital divide and prepare students for modern careers.",
    features: ["Computer labs", "Internet access", "Digital literacy"],
  },
  {
    title: "Adult Literacy Programs",
    description: "Evening classes for adults who missed formal education opportunities.",
    features: ["Basic literacy", "Functional literacy", "Financial literacy"],
  },
];

const EducationPrograms = () => {
  return (
    <Layout>
      <PageHero
        title="Education Programs"
        subtitle="Empowering through quality education for all"
        breadcrumbs={[{ label: "Programs", path: "/education-programs" }, { label: "Education" }]}
      />

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Our Approach
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Education as the Foundation of Change
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe that education is the most powerful tool for breaking the cycle of 
                poverty. Our education programs focus on providing quality learning opportunities 
                to children, youth, and adults in underserved rural communities.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Through our various initiatives, we have supported over 15,000 students 
                and established 50+ learning centers across Telangana.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/donate">
                  <Button className="btn-primary">
                    Support Education
                  </Button>
                </Link>
                <Link to="/volunteer">
                  <Button className="btn-outline">
                    Volunteer as Teacher
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img src={ruralEducationImage} alt="Rural Education" className="w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-cream">
        <div className="container">
          <SectionTitle
            label="Our Programs"
            title="Education Initiatives"
            subtitle="Comprehensive programs to address education needs at every level"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="card-sharp p-8">
                <h3 className="font-heading text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <GraduationCap className="mx-auto mb-3 text-primary" size={40} />
              <div className="font-heading text-3xl font-bold text-secondary-foreground">15,000+</div>
              <div className="text-secondary-foreground/70 text-sm">Students Supported</div>
            </div>
            <div>
              <School className="mx-auto mb-3 text-primary" size={40} />
              <div className="font-heading text-3xl font-bold text-secondary-foreground">50+</div>
              <div className="text-secondary-foreground/70 text-sm">Learning Centers</div>
            </div>
            <div>
              <Award className="mx-auto mb-3 text-primary" size={40} />
              <div className="font-heading text-3xl font-bold text-secondary-foreground">5,000+</div>
              <div className="text-secondary-foreground/70 text-sm">Scholarships Given</div>
            </div>
            <div>
              <BookOpen className="mx-auto mb-3 text-primary" size={40} />
              <div className="font-heading text-3xl font-bold text-secondary-foreground">1,000+</div>
              <div className="text-secondary-foreground/70 text-sm">Completed Higher Education</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EducationPrograms;
