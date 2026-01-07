import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, TreePine, Recycle, Sprout, ArrowRight } from "lucide-react";

import eventImg2 from "@/assets/gallery/IMG-20241028-WA0004.jpg";

const initiatives = [
  {
    title: "Plantation & Greenery Development",
    description:
      "Organizing plantation programs to increase greenery and create a healthy environment for future generations. Saplings are planted in public places, schools, and open areas with community participation.",
    icon: TreePine,
  },
  {
    title: "Swachh Bharat Street Cleaning Programs",
    description:
      "Conducting street cleaning programs as part of the Swachh Bharat Mission to promote cleanliness and hygiene in villages and urban areas. These activities encourage people to maintain clean surroundings and prevent the spread of diseases.",
    icon: Recycle,
  },
  {
    title: "Plastic-Free Society Awareness",
    description:
      "Conducting awareness programs on creating a plastic-free society, educating people about the harmful effects of plastic on health and the environment. Through rallies, campaigns, and community meetings, we motivate citizens to reduce plastic usage and adopt eco-friendly alternatives.",
    icon: Sprout,
  },
  {
    title: "Environmental Protection Initiatives",
    description:
      "Comprehensive environmental protection initiatives that build a clean, green, and sustainable society through community participation and awareness programs.",
    icon: Leaf,
  },
];

const SustainableDevelopment = () => {
  return (
    <Layout>
      <PageHero
        title="Environment Protection"
        subtitle="Building a clean, green, and sustainable society"
        breadcrumbs={[{ label: "Programs" }, { label: "Environment Protection" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Our Mission
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Environment Protection
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  Swami Vivekananda Seva Brundam actively works towards <strong>environmental protection and social responsibility</strong>. We organize plantation programs to increase greenery and create a healthy environment for future generations. Saplings are planted in public places, schools, and open areas with community participation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As part of the <strong>Swachh Bharat Mission</strong>, our volunteers conduct street cleaning programs to promote cleanliness and hygiene in villages and urban areas. These activities encourage people to maintain clean surroundings and prevent the spread of diseases.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We also conduct awareness programs on creating a <strong>plastic-free society</strong>, educating people about the harmful effects of plastic on health and the environment. Through rallies, campaigns, and community meetings, we motivate citizens to reduce plastic usage and adopt eco-friendly alternatives.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through these initiatives, Swami Vivekananda Seva Brundam strives to build a clean, green, and sustainable society.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/donate">
                  <Button className="btn-primary">
                    Support Environment Protection
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link to="/volunteer">
                  <Button className="btn-outline">
                    Join as Volunteer
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img src={eventImg2} alt="Environment Protection" className="w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Key Initiatives</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs to protect and preserve our environment
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

export default SustainableDevelopment;

