import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { TeamCard } from "@/components/common/Cards";
import founderImage from "@/assets/founder.jpg";

const trustees = [
  { name: "Shiva Kumar Gudlanaram", role: "Founder & Managing Trustee", image: founderImage },
  { name: "Dr. Ramesh Kumar", role: "Trustee - Healthcare", image: founderImage },
  { name: "Smt. Lakshmi Devi", role: "Trustee - Women Programs", image: founderImage },
  { name: "Sri. Venkat Rao", role: "Trustee - Education", image: founderImage },
];

const BoardOfTrustees = () => {
  return (
    <Layout>
      <PageHero
        title="Board of Trustees"
        subtitle="Meet the dedicated leaders guiding our mission"
        breadcrumbs={[{ label: "About", path: "/about" }, { label: "Board of Trustees" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our Board of Trustees comprises experienced professionals and community leaders 
              who provide strategic direction and governance to ensure our mission is fulfilled 
              with integrity and excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustees.map((trustee, index) => (
              <TeamCard key={index} {...trustee} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BoardOfTrustees;
