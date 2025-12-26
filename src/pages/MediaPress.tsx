import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Newspaper, Download, ArrowRight } from "lucide-react";

const pressReleases = [
  { date: "Dec 2023", title: "SVSB Launches New Digital Learning Centers in 10 Villages" },
  { date: "Nov 2023", title: "Annual Health Camp Benefits 2000+ Villagers" },
  { date: "Oct 2023", title: "Women Entrepreneurs Fair Showcases SHG Products" },
  { date: "Sep 2023", title: "SVSB Receives State Award for Rural Development" },
];

const MediaPress = () => {
  return (
    <Layout>
      <PageHero
        title="Media & Press"
        subtitle="News and updates from Swami Vivekananda Seva Brundam"
        breadcrumbs={[{ label: "Resources" }, { label: "Media & Press" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">Press Releases</h2>
              <div className="space-y-4">
                {pressReleases.map((item, index) => (
                  <div key={index} className="card-sharp p-4 flex items-center justify-between hover:border-primary transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                        <Newspaper className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                        <p className="font-medium">{item.title}</p>
                      </div>
                    </div>
                    <ArrowRight className="text-muted-foreground" size={18} />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">Media Kit</h2>
              <div className="card-sharp p-6 bg-cream">
                <p className="text-muted-foreground mb-6">
                  Download our media kit for logos, photos, and information about SVSB 
                  for press and publication purposes.
                </p>
                <Button 
                  className="btn-secondary"
                  asChild
                >
                  <a 
                    href="https://drive.google.com/file/d/1xqCyEoLQvaVzQEB24vNWlhMGSw-zNjwO/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2" size={18} />
                    Download Media Kit
                  </a>
                </Button>
              </div>
              
              <div className="mt-8">
                <h3 className="font-heading text-xl font-bold mb-4">Media Inquiries</h3>
                <p className="text-muted-foreground mb-4">
                  For press inquiries, interview requests, or media partnerships, 
                  please contact:
                </p>
                <p className="text-foreground">
                  <strong>Email:</strong> info@ysvsb.org<br />
                  <strong>Phone:</strong> +91 70135 70447
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MediaPress;
