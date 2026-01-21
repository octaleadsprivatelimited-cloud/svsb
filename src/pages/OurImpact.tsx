import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Megaphone, Shield, GraduationCap, Heart, ArrowRight } from "lucide-react";

import socialAwarenessImage from "@/assets/social-awareness.jpg";

const initiatives = [
  {
    title: "Nasha Mukth Yuva – Anti-Drug & Non-Alcohol Awareness",
    description:
      "Conducting Nasha Mukth Yuva – Bharat Awareness Programs in colleges and educational institutions, focusing on anti-drug and non-alcohol messages. These programs guide youth to stay away from harmful habits and lead disciplined, healthy lives.",
    icon: Shield,
  },
  {
    title: "Youth Awareness Programs in Colleges",
    description:
      "Organizing various awareness programs to educate and empower youth on important social, health, and national issues, building a responsible, informed, and healthy society inspired by the ideals of Swami Vivekananda.",
    icon: GraduationCap,
  },
  {
    title: "Central Government Schemes Awareness",
    description:
      "Conducting awareness programs on Central Government Welfare Schemes, helping the public understand available benefits related to education, health, employment, and social security.",
    icon: Megaphone,
  },
  {
    title: "Public Health & Child Protection Awareness",
    description:
      "Organizing public health awareness programs on issues such as AIDS prevention, liver health, and general well-being, educating people about prevention, healthy lifestyles, and early care. Also conducting child protection awareness programs, emphasizing child rights, safety, education, and protection from abuse.",
    icon: Heart,
  },
];

const OurImpact = () => {
  return (
    <Layout>
      <PageHero
        title="Social Awareness"
        subtitle="Building a knowledgeable, healthy, and socially responsible community"
        breadcrumbs={[{ label: "Programs" }, { label: "Social Awareness" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Our Mission
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Social Awareness
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  Swami Vivekananda Seva Brundam organizes various awareness programs to educate and empower youth and the general public on important social, health, and national issues. Our aim is to build a responsible, informed, and healthy society inspired by the ideals of Swami Vivekananda.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We conduct <strong>Nasha Mukth Yuva – Bharat Awareness Programs</strong> in colleges and educational institutions, focusing on anti-drug and non-alcohol messages. These programs guide youth to stay away from harmful habits and lead disciplined, healthy lives.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our organization also conducts awareness programs on <strong>Central Government Welfare Schemes</strong>, helping the public understand available benefits related to education, health, employment, and social security.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In addition, we organize public health awareness programs on issues such as <strong>AIDS prevention, liver health, and general well-being</strong>, educating people about prevention, healthy lifestyles, and early care. We also actively conduct <strong>child protection awareness programs</strong>, emphasizing child rights, safety, education, and protection from abuse.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through these awareness initiatives, Swami Vivekananda Seva Brundam works towards creating a knowledgeable, healthy, and socially responsible community.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/donate">
                  <Button className="btn-primary">
                    Support Awareness Programs
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link to="/volunteer">
                  <Button className="btn-outline">
                    Become a Volunteer
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img src={socialAwarenessImage} alt="Social Awareness Programs" className="w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Key Initiatives</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive awareness programs to build a responsible and informed society
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <div key={index} className="card-sharp p-8">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{initiative.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{initiative.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurImpact;
