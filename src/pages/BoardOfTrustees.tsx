import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { TeamCard } from "@/components/common/Cards";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";
import teamMember5 from "@/assets/team-member-5.jpg";

const trustees = [
  { 
    name: "Shiva Kumar Gudlanaram", 
    role: "Founder & Managing Trustee", 
    image: teamMember4,
    description: "National Youth Awardee 2018, dedicated to rural development and community empowerment for over 14 years."
  },
  { 
    name: "Dr. Ramesh Kumar", 
    role: "", 
    image: teamMember1
  },
  { 
    name: "Dr. Padma Reddy", 
    role: "", 
    image: teamMember2
  },
  { 
    name: "Smt. Lakshmi Devi", 
    role: "", 
    image: teamMember3
  },
  { 
    name: "Sri Venkatesh Rao", 
    role: "", 
    image: teamMember5
  },
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
