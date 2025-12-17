import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  "CSR compliant under Companies Act 2013",
  "Tax benefits under Section 80G",
  "Regular impact reports and updates",
  "Recognition and branding opportunities",
  "Site visits and field engagement",
  "Employee volunteering programs",
];

const CSRPartnerships = () => {
  return (
    <Layout>
      <PageHero
        title="CSR Partnerships"
        subtitle="Partner with us for meaningful corporate social responsibility"
        breadcrumbs={[{ label: "Get Involved" }, { label: "CSR Partnerships" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Corporate Partnerships
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Create Lasting Impact Through CSR
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Partner with Swami Vivekananda Seva Brundam to fulfill your Corporate Social 
                Responsibility objectives while creating meaningful change in rural communities. 
                Our programs are fully compliant with CSR guidelines under the Companies Act 2013.
              </p>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button className="btn-primary">
                  Partner With Us
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
            <div className="card-sharp p-8 bg-secondary text-secondary-foreground">
              <Building className="mb-6 text-primary" size={48} />
              <h3 className="font-heading text-2xl font-bold mb-4">CSR Focus Areas</h3>
              <ul className="space-y-3 text-secondary-foreground/80">
                <li>• Education & Skill Development</li>
                <li>• Healthcare & Medical Camps</li>
                <li>• Women Empowerment</li>
                <li>• Rural Development</li>
                <li>• Environmental Sustainability</li>
                <li>• Disaster Relief & Response</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CSRPartnerships;
