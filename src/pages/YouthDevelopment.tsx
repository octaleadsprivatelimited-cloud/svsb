import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, Wrench, Briefcase, ArrowRight } from "lucide-react";

import youthTrainingImage from "@/assets/youth-training.jpg";

const skills = [
  { icon: Monitor, title: "Computer Skills", description: "Basic to advanced computer courses including MS Office, internet, and programming basics." },
  { icon: Wrench, title: "Technical Training", description: "Electrical, plumbing, carpentry, and other technical vocational skills." },
  { icon: Briefcase, title: "Soft Skills", description: "Communication, interview preparation, and workplace readiness training." },
];

const YouthDevelopment = () => {
  return (
    <Layout>
      <PageHero
        title="Youth Skill Development"
        subtitle="Preparing rural youth for a brighter future"
        breadcrumbs={[{ label: "Programs" }, { label: "Youth Development" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Building Skills
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Transforming Youth, Transforming India
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our youth development programs equip young people with modern skills, 
                computer knowledge, and vocational training to help them secure better 
                employment opportunities and become self-reliant.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="card-sharp p-4 text-center flex-1 min-w-[140px]">
                  <div className="font-heading text-2xl font-bold text-primary">3,000+</div>
                  <div className="text-sm text-muted-foreground">Youth Trained</div>
                </div>
                <div className="card-sharp p-4 text-center flex-1 min-w-[140px]">
                  <div className="font-heading text-2xl font-bold text-primary">2,000+</div>
                  <div className="text-sm text-muted-foreground">Jobs Placed</div>
                </div>
              </div>
              <Link to="/donate">
                <Button className="btn-primary">
                  Support Youth Training
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
            <div>
              <img src={youthTrainingImage} alt="Youth Training" className="w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Training Programs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="card-sharp p-6 text-center hover:border-primary transition-colors">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default YouthDevelopment;
