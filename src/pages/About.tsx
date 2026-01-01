import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Award, Heart, Users, GraduationCap, ArrowRight, Shield, Sparkles, TrendingUp, Leaf, BookOpen } from "lucide-react";

import ruralEducationImage from "@/assets/rural-education.jpg";

const timeline = [
  { year: "2012", title: "Foundation", description: "Swamivivekananda Seva Brundam was established with a vision to serve humanity and empower communities through selfless service" },
  { year: "2014", title: "Environment Protection Activities", description: "Launched comprehensive tree plantation drives, cleanliness programs, and environmental awareness campaigns to build greener communities" },
  { year: "2016", title: "Youth Development Programs", description: "Initiated comprehensive youth empowerment initiatives including leadership training, skill development, and Nasha Mukt Yuva programs" },
  { year: "2018", title: "Social Awareness Programmes", description: "Expanded community awareness initiatives on social welfare, government schemes, health, sanitation, and ethical living practices" },
  { year: "2020", title: "Covid Response", description: "Provided essential support, food supplies, and relief to thousands of families during the challenging pandemic period" },
  { year: "2024", title: "Helping Poor And Health Camps", description: "Intensified efforts in healthcare services, medical camps, and support for underprivileged communities across Telangana" },
  { year: "2025", title: "National Recognisazation", description: "Achieved national recognition for outstanding service, dedication, and transformative impact in community development" },
];

const values = [
  { 
    icon: Heart, 
    title: "Seva (Selfless Service)", 
    description: "We believe in serving humanity with compassion, humility, and dedication, following Swami Vivekananda's ideal of \"Service to man is service to God.\"" 
  },
  { 
    icon: Shield, 
    title: "Integrity & Discipline", 
    description: "We uphold honesty, ethical conduct, and personal discipline in every activity, ensuring trust and accountability." 
  },
  { 
    icon: Sparkles, 
    title: "Youth Empowerment", 
    description: "We strive to inspire and guide youth to become responsible, confident, and value-based citizens committed to nation-building." 
  },
  { 
    icon: Users, 
    title: "Social Responsibility & Compassion", 
    description: "We work to uplift the needy, protect the environment, and promote a drug-free, healthy, and harmonious society." 
  },
];

const About = () => {
  return (
    <Layout>
      <PageHero
        title="About Us"
        subtitle="Empowering rural communities through sustainable development since 2012"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                A Journey of Service and Compassion
              </h2>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Swamivivekananda Seva Brundam was founded in the year 2012 with the belief that "Service to man is service to God." Inspired by the teachings and life of Swami Vivekananda, our organization began as a small group of dedicated individuals who wanted to make a meaningful difference in the lives of people in our community.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What started as simple acts of service—helping the needy, supporting education, organizing health camps, and promoting spiritual values—gradually grew into a committed volunteer movement. Over the years, our members have worked tirelessly to uplift the underprivileged, spread cultural and moral values, and encourage youth participation in nation-building activities.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, Swamivivekananda Seva Brundam continues to stand as a beacon of selfless service, unity, and social responsibility, carrying forward Swamiji's message of strength, compassion, and human excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={ruralEducationImage} 
                alt="Swamivivekananda Seva Brundam" 
                className="w-full shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 text-primary-foreground">
                <div className="font-heading text-4xl font-bold">14+</div>
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
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  To create a compassionate, service-minded, and empowered society inspired by the values of Swami Vivekananda. We aspire to build a community where every individual, especially the youth, is encouraged to serve the needy, protect the environment, and contribute positively to the nation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a future where social responsibility, human values, education, and unity guide people toward collective growth and harmony. Through dedicated service, awareness, and empowerment, our vision is to help shape a stronger, greener, and more inclusive nation for generations to come and an empowered society with Nasha Mukth Yuva, where every young person is free from drugs and dedicated to service, values, and nation-building.
                </p>
              </div>
            </div>
            <div className="card-sharp p-10 border-t-4 border-t-secondary">
              <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center mb-6">
                <Award className="text-secondary" size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  To serve humanity with compassion and dedication, following the ideals of Swami Vivekananda. We are committed to uplifting poor and needy individuals by providing food, clothing, and essential support.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We work towards protecting the environment through plantation drives, cleanliness programs, and awareness activities. Our organization conducts health camps, organ donation awareness programs, and other wellness initiatives for community well-being.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We focus on empowering youth through leadership development, value-based programs, and motivation to participate in nation-building. We also strive to spread awareness about government schemes, helping people access welfare benefits.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Additionally, we support students by encouraging co-curricular activities, skill-building, and educational development. Through these efforts, we aim to build a stronger, healthier, and more service-oriented society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionTitle
            label="Our Core Values"
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

      {/* Strategic Goals */}
      <section className="py-20 bg-cream">
        <div className="container">
          <SectionTitle
            label="Strategic Goals"
            title="Our Strategic Goals"
            subtitle="Key focus areas that guide our initiatives and programs"
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="card-sharp p-8 border-l-4 border-l-primary">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">1. Community Upliftment & Welfare</h3>
              <p className="text-muted-foreground leading-relaxed">
                To continually support poor and needy communities through food distribution, essential donations, health services, and awareness about government welfare schemes.
              </p>
            </div>

            <div className="card-sharp p-8 border-l-4 border-l-primary">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">2. Youth Development & Drug-Free Society</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower youth through leadership training, value-based education, skill development, and Nasha Mukth Yuva initiatives that promote a drug-free, disciplined, and motivated younger generation.
              </p>
            </div>

            <div className="card-sharp p-8 border-l-4 border-l-primary">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-4">
                <Leaf className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">3. Environmental Protection & Sustainability</h3>
              <p className="text-muted-foreground leading-relaxed">
                To build a greener and healthier future through continuous plantation drives, cleanliness initiatives, environmental awareness programs, and sustainable community practices.
              </p>
            </div>

            <div className="card-sharp p-8 border-l-4 border-l-primary">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">4. Education & Holistic Student Growth</h3>
              <p className="text-muted-foreground leading-relaxed">
                To encourage students' academic and co-curricular development by providing support, guidance, activities, and opportunities that nurture creativity, confidence, and life skills.
              </p>
            </div>
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
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0 md:pr-6">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Registered Under
                  </h4>
                  <p className="text-foreground">Andhra Pradesh Societies Registration Act, 2001</p>
                  <p className="text-muted-foreground text-sm mt-1">Govt of Telangana</p>
                </div>
                <div className="border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0 md:px-6">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Registration Number
                  </h4>
                  <p className="text-foreground font-semibold text-lg">670/2016</p>
                </div>
                <div className="md:pl-6">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Status
                  </h4>
                  <p className="text-primary font-semibold">Active & Compliant</p>
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
