import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, CheckCircle, ArrowRight, Heart } from "lucide-react";

const volunteerRoles = [
  {
    title: "Education Volunteer",
    description: "Help teach children in our learning centers or mentor students",
    commitment: "4-6 hours/week",
  },
  {
    title: "Healthcare Support",
    description: "Assist in organizing and conducting medical camps",
    commitment: "During camp events",
  },
  {
    title: "Skill Training",
    description: "Share your professional skills with rural youth and women",
    commitment: "Flexible",
  },
  {
    title: "Documentation",
    description: "Help with photography, videography, and content creation",
    commitment: "Project-based",
  },
  {
    title: "Fundraising",
    description: "Support our fundraising campaigns and donor relations",
    commitment: "4-8 hours/week",
  },
  {
    title: "Administrative Support",
    description: "Help with office work, data entry, and coordination",
    commitment: "Flexible",
  },
];

const benefits = [
  "Certificate of Volunteering",
  "Experience in grassroots development",
  "Networking with like-minded individuals",
  "Skill development opportunities",
  "Meaningful contribution to society",
  "Reference letters for dedicated volunteers",
];

const Volunteer = () => {
  return (
    <Layout>
      <PageHero
        title="Volunteer Programs"
        subtitle="Join our team of dedicated volunteers making a difference"
        breadcrumbs={[{ label: "Get Involved", path: "/volunteer" }, { label: "Volunteer" }]}
      />

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
              Join Our Mission
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Become a Changemaker
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Volunteering with Swamivivekananda Seva Brundam is an opportunity to make a 
              tangible impact in the lives of rural communities. Whether you have a few hours 
              a week or want to commit to a long-term engagement, we have meaningful roles 
              for everyone.
            </p>
            <Link to="/contact">
              <Button className="btn-primary">
                <Users className="mr-2" size={18} />
                Register as a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-20 bg-cream">
        <div className="container">
          <SectionTitle
            label="Opportunities"
            title="Volunteer Roles"
            subtitle="Find a role that matches your skills and interests"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerRoles.map((role, index) => (
              <div key={index} className="card-sharp p-6 hover:border-primary transition-colors">
                <h3 className="font-heading text-xl font-bold mb-3">{role.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{role.description}</p>
                <div className="text-sm text-primary font-medium">
                  Commitment: {role.commitment}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Benefits
              </span>
              <h2 className="font-heading text-3xl font-bold mb-6">
                What You Gain
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-sharp p-8 bg-secondary text-secondary-foreground">
              <h3 className="font-heading text-2xl font-bold mb-4">Ready to Start?</h3>
              <p className="text-secondary-foreground/80 mb-6">
                Fill out our volunteer registration form and our team will get in 
                touch with you to discuss opportunities that match your interests.
              </p>
              <Link to="/contact">
                <Button className="btn-primary w-full">
                  Apply Now
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Volunteer;
