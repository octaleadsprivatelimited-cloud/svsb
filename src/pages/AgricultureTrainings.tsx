import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sprout, Leaf, Wrench, Briefcase, ArrowRight } from "lucide-react";

import agricultureImage from "@/assets/agriculture-trainings.jpg";

const initiatives = [
  {
    title: "Agriculture Training for Youth & Farmers",
    description:
      "Organizing agriculture training programs for school and college youth as well as farmers to promote modern, sustainable, and profitable farming practices. Educating participants on latest farming techniques, use of improved seeds, soil health management, water conservation, and eco-friendly technologies to increase crop productivity.",
    icon: Sprout,
  },
  {
    title: "Organic & Natural Farming Education",
    description:
      "Special focus on organic and natural farming methods, encouraging chemical-free agriculture for healthy food and environmental protection. Training participants on sustainable farming practices that protect soil health and biodiversity.",
    icon: Leaf,
  },
  {
    title: "Latest Farming Techniques & Technology",
    description:
      "Educating participants on modern farming techniques, improved seeds, soil health management, water conservation, and eco-friendly technologies to increase crop productivity and sustainability.",
    icon: Wrench,
  },
  {
    title: "Agri-Business & Income Generation Ideas",
    description:
      "Guiding youth and farmers on agri-business and agripreneurship ideas, helping them understand value-added farming, marketing, government support, and income-generating opportunities in the agriculture sector.",
    icon: Briefcase,
  },
];

const AgricultureTrainings = () => {
  return (
    <Layout>
      <PageHero
        title="Agriculture Trainings"
        subtitle="Strengthening agriculture and empowering rural communities through knowledge-based training"
        breadcrumbs={[{ label: "Programs" }, { label: "Education Programs" }, { label: "Agriculture Trainings" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Our Mission
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Agriculture Trainings
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  Swami Vivekananda Seva Brundam is committed to strengthening agriculture and empowering rural communities through knowledge-based training programs. We organize agriculture training programs for school and college youth as well as farmers to promote modern, sustainable, and profitable farming practices.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our programs educate participants on <strong>latest farming techniques</strong>, use of improved seeds, soil health management, water conservation, and eco-friendly technologies to increase crop productivity. Special focus is given to <strong>organic and natural farming methods</strong>, encouraging chemical-free agriculture for healthy food and environmental protection.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We also guide youth and farmers on <strong>agri-business and agripreneurship ideas</strong>, helping them understand value-added farming, marketing, government support, and income-generating opportunities in the agriculture sector.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through these initiatives, Swami Vivekananda Seva Brundam aims to inspire youth to take up agriculture as a respected profession and support farmers in achieving sustainable livelihoods.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/donate">
                  <Button className="btn-primary">
                    Support Agriculture Training
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
              <img src={agricultureImage} alt="Agriculture Trainings" className="w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Training Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive agriculture training to empower youth and farmers
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

export default AgricultureTrainings;

