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
                  I am <strong>Shiva Kumar Gudlanaram</strong>, Founder of <strong>Swami Vivekananda Seva Brundam</strong>, National Youth Awardee. This organization was born from a deep concern for the real challenges faced by our society and a strong belief that sustainable change is possible only through collective effort, discipline, and service.
                </p>
                <p>
                  Inspired by the teachings of Swami Vivekananda, we believe that service to society is the highest form of worship. Our focus is on <strong>practical solutions</strong> that improve lives at the grassroots level. We work towards <strong>environment protection</strong> by promoting tree plantation, cleanliness drives, water conservation, and awareness on sustainable living, understanding that protecting nature is essential for the future of our nation.
                </p>
                <p>
                  <strong>Youth development</strong> is at the heart of our mission. India's youth are its greatest strength, and through skill development programs, leadership training, and value-based guidance, we aim to prepare responsible and confident citizens who can contribute meaningfully to the vision of <strong>Viksit Bharat 2047</strong>.
                </p>
                <p>
                  We strongly support <strong>self-employment and entrepreneurship</strong>, especially for rural youth and women, by encouraging skill-based livelihoods, small businesses, and traditional occupations. Alongside this, we work for <strong>agriculture development</strong> by supporting farmers with awareness programs, sustainable farming practices, and community-based initiatives that strengthen rural economies.
                </p>
                <p>
                  Recognizing the importance of health, Swami Vivekananda Seva Brundam organizes <strong>health camps</strong>, medical awareness programs, and preventive healthcare initiatives to ensure basic health support reaches underserved communities.
                </p>
                <p>
                  Our journey is driven by sincerity, transparency, and commitment to nation-building. With the support of dedicated volunteers, well-wishers, and partners, we continue to work towards a self-reliant, healthy, and environmentally conscious India.
                </p>
                <p>
                  I invite you to be a part of this mission and contribute to building a stronger, inclusive, and developed Bharat.
                </p>
                <p className="font-semibold text-foreground">
                  With sincere commitment,<br />
                  <strong>Shiva Kumar Gudlanaram</strong><br />
                  Founder<br />
                  <em>Swami Vivekananda Seva Brundam</em>
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
