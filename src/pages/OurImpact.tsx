import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, GraduationCap, Heart, MapPin, Building, ArrowRight, Leaf, Gift } from "lucide-react";

const impactStats = [
  { value: "50,000+", label: "Lives Transformed", icon: Users },
  { value: "15,000+", label: "Students Educated", icon: GraduationCap },
  { value: "100+", label: "Food Donations", icon: Gift },
  { value: "1000+", label: "Programs", icon: MapPin },
];

const impactAreas = [
  {
    title: "Education",
    stats: [
      "15,000+ students supported with quality education",
      "50+ learning centers established",
      "5,000+ scholarships distributed",
      "1,000+ students completed higher education",
    ],
  },
  {
    title: "Healthcare",
    stats: [
      "200+ medical camps conducted",
      "50,000+ free medical check-ups",
      "10,000+ eye surgeries facilitated",
      "Health awareness in 1000+ villages/places",
    ],
  },
  {
    title: "Environment Protection",
    stats: [
      "100+ tree plantation drives conducted",
      "50,000+ trees planted across communities",
      "200+ cleanliness and awareness campaigns",
      "Water conservation initiatives in 100+ villages",
    ],
  },
  {
    title: "Youth Development",
    stats: [
      "3,000+ youth trained in computer skills",
      "2,000+ placed in jobs",
      "500+ entrepreneurs supported",
      "100+ youth leadership programs",
    ],
  },
];

const OurImpact = () => {
  return (
    <Layout>
      <PageHero
        title="Our Impact"
        subtitle="Measuring the difference we make in rural communities"
        breadcrumbs={[{ label: "Our Impact" }]}
      />

      {/* Impact Stats */}
      <section className="py-20 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="mx-auto mb-4 text-primary-foreground" size={48} />
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact by Area */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionTitle
            label="Impact Areas"
            title="Creating Holistic Change"
            subtitle="Our integrated approach ensures sustainable development across all sectors"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="card-sharp p-8 border-l-4 border-l-primary">
                <h3 className="font-heading text-2xl font-bold mb-6">{area.title}</h3>
                <ul className="space-y-3">
                  {area.stats.map((stat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{stat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container text-center">
          <h3 className="font-heading text-2xl font-bold text-secondary-foreground mb-4">
            Be Part of This Impact Story
          </h3>
          <p className="text-secondary-foreground/80 mb-6 max-w-2xl mx-auto">
            Join us in our mission to transform more lives. Your support can help us 
            expand our reach to more villages and communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/donate">
              <Button className="btn-primary">
                <Heart className="mr-2" size={18} />
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurImpact;
