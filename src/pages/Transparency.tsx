import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Shield, FileText, Users, Eye } from "lucide-react";

const compliance = [
  { icon: Shield, title: "Registered Society", description: "Registered under AP Societies Registration Act, 2001" },
  { icon: FileText, title: "80G Certification", description: "All donations are tax-exempt under Section 80G" },
  { icon: Users, title: "Govt of Telangana", description: "Reg No: 670/2016" },
  { icon: Eye, title: "Annual Audits", description: "Audited financial statements published annually" },
];

const Transparency = () => {
  return (
    <Layout>
      <PageHero
        title="Transparency & Compliance"
        subtitle="Our commitment to accountability and ethical governance"
        breadcrumbs={[{ label: "Transparency & Compliance" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground leading-relaxed">
              At Swamivivekananda Seva Brundam, we believe transparency is fundamental to 
              building trust with our donors, partners, and the communities we serve. We 
              maintain the highest standards of financial accountability and ethical governance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {compliance.map((item, index) => (
              <div key={index} className="card-sharp p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="card-sharp p-8 max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl font-bold mb-6 text-center">Registration Details</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-muted-foreground">Registered Under</p>
                <p className="font-bold">Andhra Pradesh Societies Registration Act, 2001</p>
                <p className="text-muted-foreground text-xs mt-1">Govt of Telangana</p>
              </div>
              <div>
                <p className="text-muted-foreground">Registration No.</p>
                <p className="font-bold text-lg text-primary">670/2016</p>
              </div>
              <div>
                <p className="text-muted-foreground">80G Registration</p>
                <p className="font-bold">Available for Tax Benefits</p>
              </div>
              <div>
                <p className="text-muted-foreground">PAN Number</p>
                <p className="font-bold">Available on Request</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Transparency;
