import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import donatingFoodClothsImage from "@/assets/donating-food-cloths.jpg";

const activities = [
  {
    title: "Remaining Food Collection",
    description:
      "Collecting safe, hygienic leftover food from functions, marriages, and social events to prevent wastage and redirect it to people in need.",
  },
  {
    title: "Food Donation to the Needy",
    description:
      "Distributing collected food with care to poor people, homeless individuals, orphanages, and old-age homes so no one sleeps hungry.",
  },
  {
    title: "Old Clothes Collection Drive",
    description:
      "Organising clothes collection drives where donated clothes are cleaned, sorted, and prepared for respectful distribution.",
  },
  {
    title: "Clothes Distribution in Slum Areas",
    description:
      "Reaching slum areas and economically weaker sections to provide clothing support, helping people live with dignity and comfort.",
  },
];

const YouthDevelopment = () => {
  return (
    <Layout>
      <PageHero
        title="Donating Food & Cloths"
        subtitle="Ensuring no food is wasted and everyone is treated with dignity"
        breadcrumbs={[{ label: "Programs" }, { label: "Donating Food & Cloths" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Service Activities
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Donating Food & Cloths
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We focus on reducing food wastage by collecting remaining, hygienic food from function halls,
                marriage events, and social gatherings. This food is carefully handled and distributed to poor
                people, homeless individuals, orphanages, and old-age homes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Along with food service, we organize old clothes collection drives. Donated clothes are cleaned,
                sorted, and distributed to people living in slum areas and economically weaker sections, helping
                them live with dignity and comfort.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Through these activities, Swami Vivekananda Seva Brundam strives to create a caring society where
                no one goes hungry and everyone is treated with respect. We welcome the support of volunteers and
                donors to join us in this noble mission of service.
              </p>
              <div className="flex flex-wrap gap-4 mb-2">
                <Link to="/donate">
                  <Button className="btn-primary">
                    Support Food & Cloth Donation
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
              <img src={donatingFoodClothsImage} alt="Food and Clothes Donation" className="w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Key Activities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {activities.map((activity, index) => (
              <div key={index} className="card-sharp p-6 hover:border-primary transition-colors">
                <h3 className="font-heading text-lg font-bold mb-2">{activity.title}</h3>
                <p className="text-muted-foreground text-sm">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default YouthDevelopment;
