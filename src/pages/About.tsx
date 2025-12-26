import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Award, Heart, Users, GraduationCap, ArrowRight } from "lucide-react";

import ruralEducationImage from "@/assets/rural-education.jpg";

const timeline = [
  { year: "2008", title: "Foundation", description: "SVSB was established with a focus on rural education" },
  { year: "2010", title: "Health Initiative", description: "Launched first medical camp serving 500+ villagers" },
  { year: "2013", title: "Women Empowerment", description: "Started self-help groups and skill training programs" },
  { year: "2016", title: "Youth Development", description: "Established computer training centers in 10 villages" },
  { year: "2020", title: "COVID Response", description: "Provided relief to 10,000+ families during pandemic" },
  { year: "2024", title: "Expanding Impact", description: "Now serving 100+ villages with integrated programs" },
];

const values = [
  { icon: Heart, title: "Compassion", description: "We serve with love and empathy, treating every individual with dignity." },
  { icon: Users, title: "Community First", description: "Our programs are designed by and for the communities we serve." },
  { icon: Target, title: "Integrity", description: "We maintain complete transparency in all our operations and finances." },
  { icon: GraduationCap, title: "Excellence", description: "We strive for excellence in every program and initiative we undertake." },
];

const About = () => {
  return (
    <Layout>
      <PageHero
        title="About Us"
        subtitle="Empowering rural communities through sustainable development since 2008"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Who We Are
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                A Legacy of Service and Empowerment
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Swami Vivekananda Seva Brundam was established with a vision to create meaningful 
                change in rural communities across India. Founded by National Youth Awardee 
                Shiva Kumar Gudlanaram, the organization has been working at the grassroots level 
                for over 15 years.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Initially started to support rural education, it has expanded into education, 
                healthcare, women empowerment, skill development, youth leadership, and sustainable 
                rural development. The trust believes in community-driven and sustainable solutions 
                to create long-term social impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, SVSB operates across 100+ villages in Telangana, directly impacting over 
                50,000 lives through our various programs and initiatives.
              </p>
            </div>
            <div className="relative">
              <img 
                src={ruralEducationImage} 
                alt="Rural Education Program" 
                className="w-full shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 text-primary-foreground">
                <div className="font-heading text-4xl font-bold">15+</div>
                <div className="text-sm uppercase tracking-wider">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-sharp p-10 border-t-4 border-t-primary">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A society where every individual, especially from rural and underprivileged 
                communities, has access to quality education, healthcare, and opportunities 
                for sustainable livelihoods.
              </p>
            </div>
            <div className="card-sharp p-10 border-t-4 border-t-secondary">
              <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center mb-6">
                <Award className="text-secondary" size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower rural youth, women, and communities through integrated development 
                programs focusing on education, skill development, health awareness, and 
                sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionTitle
            label="Our Values"
            title="Principles That Guide Us"
            subtitle="Our work is driven by a set of core values that define who we are"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card-sharp p-8 text-center group hover:border-primary transition-colors">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                  <value.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionTitle
            label="Our Journey"
            title="Milestones of Impact"
            subtitle="A timeline of our growth and achievements over the years"
            light
          />
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-secondary-foreground/20 hidden md:block" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="card-sharp p-6 bg-card inline-block">
                      <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                      <h4 className="font-heading text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary hidden md:block" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration & Compliance */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionTitle
            label="Legal Status"
            title="Registration & Compliance"
            subtitle="We maintain complete transparency and comply with all regulatory requirements"
          />
          <div className="max-w-3xl mx-auto">
            <div className="card-sharp p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0 md:pr-6">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Registered Under
                  </h4>
                  <p className="text-foreground">Indian Trusts Act, 1882</p>
                </div>
                <div className="md:pl-6">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Registration Number
                  </h4>
                  <p className="text-foreground">SVSB/REG/2008/XXXX</p>
                </div>
              </div>
              <div className="border-t border-border mt-6 pt-6">
                <p className="text-muted-foreground text-sm text-center">
                  All donations are eligible for tax exemption under Section 80G of the Income Tax Act.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-2">
                Want to Know More?
              </h3>
              <p className="text-primary-foreground/80">
                Explore our programs, meet our team, or get in touch with us.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/board-of-trustees">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Meet Our Team
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="btn-outline-light">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
