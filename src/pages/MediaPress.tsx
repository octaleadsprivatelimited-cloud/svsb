import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Newspaper, Download, ArrowRight, ExternalLink } from "lucide-react";

const pressReleases = [
  { date: "Dec 2023", title: "SVSB Launches New Digital Learning Centers in 10 Villages" },
  { date: "Nov 2023", title: "Annual Health Camp Benefits 2000+ Villagers" },
  { date: "Oct 2023", title: "Women Entrepreneurs Fair Showcases SHG Products" },
  { date: "Sep 2023", title: "SVSB Receives State Award for Rural Development" },
];

const publishedArticles = [
  {
    title: "Turning pain into purpose: Telangana youth campaigns for organ donation, organic agriculture",
    source: "The New Indian Express",
    date: "April 6, 2025",
    description: "National Youth Award winner Shiva Kumar Gudlanaram's journey from losing his parents to becoming a beacon of hope, campaigning for organ donation awareness and organic agriculture across rural Telangana.",
    url: "https://www.newindianexpress.com/states/telangana/2025/Apr/06/turning-pain-into-purpose-andhra-youth-campaigns-for-organ-donation-organic-agriculture",
    sourceLogo: "The New Indian Express"
  },
  {
    title: "Kalwakurthy lad receives 'National Youth Award'",
    source: "The Hans India",
    date: "April 5, 2025",
    description: "Shiva Kumar, President of Swamivivekananda Seva Brundam, was honored with the National Youth Award at Delhi Parliament by Union Minister Mansukh Mandaviya, being the only recipient from both Telugu states.",
    url: "https://www.thehansindia.com/telangana/kalwakurthy-lad-receives-national-youth-award-960127",
    sourceLogo: "The Hans India"
  },
  {
    title: "Serving The Society Since The Age Of 13: G Shivkumar's Insightful Journey Building his NGO",
    source: "Inspiration Unlimited (iU)",
    date: "March 21, 2017",
    description: "The inspiring story of G Shivkumar who started serving society at 13, building Yuva Swamivivekananda Seva Brundam and creating a wave of goodness to make the world a better place.",
    url: "https://www.iuemag.com/m17/aw/serving-the-society-g-shivakumar.php",
    sourceLogo: "Inspiration Unlimited"
  },
  {
    title: "Swamivivekananda Seva Brundam organizes health camp in Kalwakurthy",
    source: "Sakshi",
    date: "March 15, 2024",
    description: "Free medical camp organized by Swamivivekananda Seva Brundam provides health check-ups and medicines to over 500 villagers in Kalwakurthy region.",
    url: "#",
    sourceLogo: "Sakshi"
  },
  {
    title: "Tree plantation drive by youth organization in Nagarkurnool",
    source: "Eenadu",
    date: "June 5, 2024",
    description: "Swamivivekananda Seva Brundam conducts massive tree plantation drive on World Environment Day, planting over 2000 saplings across multiple villages in Nagarkurnool district.",
    url: "#",
    sourceLogo: "Eenadu"
  },
  {
    title: "Nasha Mukt Yuva program creates awareness among students",
    source: "Andhra Jyothy",
    date: "August 20, 2024",
    description: "Drug-free youth awareness program organized by Swamivivekananda Seva Brundam reaches over 1000 students, promoting healthy lifestyle and nation-building values.",
    url: "#",
    sourceLogo: "Andhra Jyothy"
  },
  {
    title: "Organ donation awareness campaign gains momentum in Telangana",
    source: "Deccan Chronicle",
    date: "September 10, 2024",
    description: "Swamivivekananda Seva Brundam's organ donation awareness campaign educates rural communities about the importance of organ donation, with hundreds registering as donors.",
    url: "#",
    sourceLogo: "Deccan Chronicle"
  },
  {
    title: "Youth development workshop empowers rural students",
    source: "Telangana Today",
    date: "October 5, 2024",
    description: "Leadership and skill development workshop conducted by Swamivivekananda Seva Brundam helps rural youth gain confidence and prepare for Viksit Bharat 2047 vision.",
    url: "#",
    sourceLogo: "Telangana Today"
  },
  {
    title: "Health camp benefits 2000+ villagers in remote areas",
    source: "Namaste Telangana",
    date: "November 12, 2024",
    description: "Comprehensive health camp organized by Swamivivekananda Seva Brundam provides free medical services, eye check-ups, and medicines to villagers in remote Telangana areas.",
    url: "#",
    sourceLogo: "Namaste Telangana"
  },
  {
    title: "Swamivivekananda Seva Brundam celebrates 12 years of service",
    source: "V6 News",
    date: "December 15, 2024",
    description: "Organization marks 12 years of dedicated service to society, impacting over 50,000 lives through various community development programs across Telangana.",
    url: "#",
    sourceLogo: "V6 News"
  },
  {
    title: "National Youth Awards 2022-23",
    source: "Press Information Bureau, Government of India",
    date: "2024",
    description: "Official announcement of National Youth Awards 2022-23, recognizing outstanding contributions to youth development and community service.",
    url: "https://pib.gov.in/PressReleasePage.aspx?PRID=2118541&reg=3&lang=2",
    sourceLogo: "PIB India"
  },
];

const MediaPress = () => {
  return (
    <Layout>
      <PageHero
        title="Media & Press"
        subtitle="News and updates from Swamivivekananda Seva Brundam"
        breadcrumbs={[{ label: "Resources" }, { label: "Media & Press" }]}
      />

      {/* Published Articles Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Published Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Media coverage and articles featuring our work, achievements, and impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {publishedArticles.map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-sharp p-6 hover:border-primary transition-all duration-300 group block"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Newspaper className="text-primary" size={18} />
                      <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                        {article.sourceLogo}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{article.date}</p>
                  </div>
                  <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" size={18} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                  <span>Read Article</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases & Media Kit Section */}
      <section className="py-20 bg-cream">
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
              <div className="card-sharp p-6 bg-background">
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
