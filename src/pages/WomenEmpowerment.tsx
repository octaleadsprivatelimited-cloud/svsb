import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Briefcase, Heart, ArrowRight } from "lucide-react";

import womenEmpowermentImage from "@/assets/women-empowerment.jpg";

const programs = [
  {
    title: "Self-Help Groups (SHGs)",
    description: "Formation and strengthening of women's self-help groups for collective savings and micro-enterprise development.",
  },
  {
    title: "Skill Training",
    description: "Vocational training in tailoring, handicrafts, food processing, and other income-generating activities.",
  },
  {
    title: "Micro-Finance Support",
    description: "Access to small loans for starting businesses and becoming financially independent.",
  },
  {
    title: "Leadership Development",
    description: "Training women to become community leaders and advocates for social change.",
  },
];

const WomenEmpowerment = () => {
  return (
    <Layout>
      <PageHero
        title="Women Empowerment"
        subtitle="Creating opportunities for women to lead and thrive"
        breadcrumbs={[{ label: "Programs" }, { label: "Women Empowerment" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={womenEmpowermentImage} alt="Women Empowerment" className="w-full shadow-lg" />
            </div>
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Empowering Women
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                When Women Rise, Communities Thrive
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Empowering women is central to our mission. Through self-help groups, skill 
                training, and micro-finance support, we help women become economically 
                independent and confident leaders in their communities.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="card-sharp p-4 text-center">
                  <Users className="mx-auto mb-2 text-primary" size={24} />
                  <div className="font-heading text-2xl font-bold">500+</div>
                  <div className="text-sm text-muted-foreground">SHGs Formed</div>
                </div>
                <div className="card-sharp p-4 text-center">
                  <Briefcase className="mx-auto mb-2 text-primary" size={24} />
                  <div className="font-heading text-2xl font-bold">2,000+</div>
                  <div className="text-sm text-muted-foreground">Women Entrepreneurs</div>
                </div>
              </div>
              <Link to="/donate">
                <Button className="btn-primary">
                  Support Women
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Initiatives</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {programs.map((program, index) => (
              <div key={index} className="card-sharp p-6 border-l-4 border-l-primary">
                <h3 className="font-heading text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-muted-foreground text-sm">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WomenEmpowerment;
