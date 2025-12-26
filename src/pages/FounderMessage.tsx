import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Play } from "lucide-react";

import founderImage from "@/assets/team-member-4.jpg";

const FounderMessage = () => {
  return (
    <Layout>
      <PageHero
        title="Founder's Message"
        subtitle="A word from our visionary leader"
        breadcrumbs={[{ label: "About", path: "/about" }, { label: "Founder Message" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <img 
                  src={founderImage} 
                  alt="Shiva Kumar Gudlanaram" 
                  className="w-full shadow-sharp-primary mb-6"
                />
                <div className="card-sharp p-6 bg-cream">
                  <h3 className="font-heading text-xl font-bold mb-2">Shiva Kumar Gudlanaram</h3>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                    Founder & Managing Trustee
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award size={16} className="text-primary" />
                    <span>National Youth Awardee</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                A Message from the Founder
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
                "Service to Humanity is Service to God"
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  Dear Friends and Supporters,
                </p>
                <p>
                  It is with immense gratitude and humility that I share our journey with you. 
                  Swamivivekananda Seva Brundam was born from a simple yet profound belief – 
                  that true service begins when we see the divine in every human being.
                </p>
                <p>
                  Growing up in rural Telangana, I witnessed firsthand the challenges faced by 
                  our villages – limited access to quality education, inadequate healthcare, 
                  and scarce opportunities for economic advancement. These experiences ignited 
                  a fire within me to dedicate my life to serving my people.
                </p>
                <p>
                  What started as a small initiative to support a few children's education has 
                  now grown into a comprehensive development organization touching over 50,000 
                  lives across 1000+ villages/places. This transformation would not have been possible 
                  without the unwavering support of our donors, volunteers, partners, and most 
                  importantly, the communities we serve.
                </p>
                <p>
                  Our work is guided by the teachings of Swami Vivekananda, who said, "Arise, 
                  awake and stop not till the goal is reached." This philosophy drives us to 
                  continuously expand our reach, deepen our impact, and innovate our approaches.
                </p>
                <p>
                  We believe in empowering communities rather than creating dependency. Our 
                  programs are designed to build local capacity, foster leadership, and create 
                  sustainable change. We work with the people, not for them.
                </p>
                <p>
                  As we look to the future, our vision remains unchanged – a society where 
                  every individual has the opportunity to realize their full potential. We 
                  invite you to join us in this noble mission.
                </p>
                <p>
                  Together, we can build the India that our great leaders envisioned – an 
                  India where rural and urban, rich and poor, stand together as equals in 
                  dignity and opportunity.
                </p>
                <p className="font-semibold text-foreground">
                  With gratitude and determination,<br />
                  Shiva Kumar Gudlanaram
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <Link to="/about">
                  <Button className="btn-secondary">
                    About SVSB
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="btn-outline">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Videos
            </h2>
            <p className="text-muted-foreground">
              Watch our founder's message and organization highlights
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-sharp overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/OvO3Iq3Yzec"
                  title="Founder Video 1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="card-sharp overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/1m-Z_3kxLtw"
                  title="Founder Video 2"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="card-sharp overflow-hidden">
              <div className="aspect-video relative group cursor-pointer">
                {/* YouTube thumbnail as background */}
                <img
                  src="https://img.youtube.com/vi/HwpFat8u76c/maxresdefault.jpg"
                  alt="Founder Video 3"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to standard thumbnail if maxresdefault doesn't exist
                    e.currentTarget.src = "https://img.youtube.com/vi/HwpFat8u76c/hqdefault.jpg";
                  }}
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="bg-primary rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="text-primary-foreground" size={32} fill="currentColor" />
                  </div>
                </div>
                {/* Clickable link to YouTube */}
                <a
                  href="https://www.youtube.com/watch?v=HwpFat8u76c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                  aria-label="Watch Founder Video 3 on YouTube"
                />
              </div>
            </div>
            <div className="card-sharp overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/SDbdnQyV6Co"
                  title="Founder Video 4"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FounderMessage;
