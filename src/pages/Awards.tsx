import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Award, Calendar } from "lucide-react";

const awards = [
  { year: "2018", title: "National Youth Award", org: "Government of India", description: "Awarded to Founder Shiva Kumar Gudlanaram for exceptional contribution to youth development and community service." },
  { year: "2020", title: "Best NGO Award", org: "Government of Telangana", description: "Recognition for outstanding work in rural development and community empowerment." },
  { year: "2021", title: "COVID Relief Excellence", org: "District Administration", description: "For exemplary relief work during the COVID-19 pandemic." },
  { year: "2023", title: "Education Excellence Award", org: "Rotary Club", description: "For contribution to rural education and scholarship programs." },
];

const Awards = () => {
  return (
    <Layout>
      <PageHero
        title="Awards & Recognition"
        subtitle="Acknowledgment of our work and dedication"
        breadcrumbs={[{ label: "Resources" }, { label: "Awards" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="card-sharp p-6 border-l-4 border-l-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="text-primary" size={28} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm text-primary font-medium mb-1">
                        <Calendar size={14} />
                        {award.year}
                      </div>
                      <h3 className="font-heading text-xl font-bold mb-1">{award.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">Awarded by: {award.org}</p>
                      <p className="text-muted-foreground">{award.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Awards;
