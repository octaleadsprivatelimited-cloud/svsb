import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Stethoscope, Eye, Baby, ArrowRight } from "lucide-react";

import healthCampImage from "@/assets/health-camp.jpg";

const services = [
  {
    icon: Stethoscope,
    title: "General Health Camps",
    description: "Regular medical check-ups, consultations, and free medicines for villagers.",
  },
  {
    icon: Eye,
    title: "Eye Care Programs",
    description: "Eye screening camps and free cataract surgeries for the elderly.",
  },
  {
    icon: Baby,
    title: "Maternal & Child Health",
    description: "Pre-natal care, child immunization, and nutrition programs.",
  },
  {
    icon: Heart,
    title: "Health Awareness",
    description: "Education on hygiene, nutrition, and preventive healthcare.",
  },
];

const HealthCamps = () => {
  return (
    <Layout>
      <PageHero
        title="Health & Medical Camps"
        subtitle="Bringing quality healthcare to rural communities"
        breadcrumbs={[{ label: "Programs" }, { label: "Health Camps" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Healthcare Access
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Healthcare for Every Village
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Access to basic healthcare remains a challenge in many rural areas. Our medical 
                camps bring doctors, medicines, and health services directly to villages, 
                ensuring that no one is left behind.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We have conducted over 200 medical camps, providing free check-ups and 
                treatment to more than 50,000 villagers.
              </p>
              <Link to="/donate">
                <Button className="btn-primary">
                  Support Healthcare
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
            <div>
              <img src={healthCampImage} alt="Health Camp" className="w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services tailored for rural communities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card-sharp p-6 text-center hover:border-primary transition-colors">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HealthCamps;
