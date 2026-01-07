import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Newspaper, Download, ArrowRight, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    url: "/articles/serving-society-since-13",
    sourceLogo: "Inspiration Unlimited"
  },
  {
    title: "Swamivivekananda Seva Brundam organizes health camp in Kalwakurthy",
    source: "Sakshi",
    date: "March 15, 2024",
    description: "Free medical camp organized by Swamivivekananda Seva Brundam provides health check-ups and medicines to over 500 villagers in Kalwakurthy region.",
    url: "/articles/health-camp-kalwakurthy",
    sourceLogo: "Sakshi"
  },
  {
    title: "Tree plantation drive by youth organization in Nagarkurnool",
    source: "Eenadu",
    date: "June 5, 2024",
    description: "Swamivivekananda Seva Brundam conducts massive tree plantation drive on World Environment Day, planting over 2000 saplings across multiple villages in Nagarkurnool district.",
    url: "/articles/tree-plantation-nagarkurnool",
    sourceLogo: "Eenadu"
  },
  {
    title: "Nasha Mukt Yuva program creates awareness among students",
    source: "Andhra Jyothy",
    date: "August 20, 2024",
    description: "Drug-free youth awareness program organized by Swamivivekananda Seva Brundam reaches over 1000 students, promoting healthy lifestyle and nation-building values.",
    url: "/articles/nasha-mukt-yuva",
    sourceLogo: "Andhra Jyothy"
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

// Newspaper clippings from gallery
const newspaperClippings = [
  { src: '/gallery/svsb-gallery-1.jpg', title: 'Seva Doots - Community Service', source: 'Newspaper Clipping' },
  { src: '/gallery/svsb-gallery-2.jpg', title: 'Media Coverage', source: 'Newspaper Clipping' },
  { src: '/gallery/svsb-gallery-3.jpg', title: 'Swasthya Mela - Health Camp', source: 'Newspaper Clipping' },
  { src: '/gallery/svsb-gallery-4.jpg', title: 'Organ Donation Campaign', source: 'Newspaper Clipping' },
  { src: '/gallery/svsb-gallery-5.jpg', title: 'Yuva Shakti - Youth Workshop', source: 'Newspaper Clipping' },
  { src: '/gallery/svsb-gallery-6.jpg', title: 'Vidya Utsav - Student Event', source: 'Newspaper Clipping' },
  { src: '/gallery/svsb-gallery-7.jpg', title: 'Social Awareness Campaign', source: 'Newspaper Clipping' },
  { src: '/gallery/svsb-gallery-8.jpg', title: 'Media Coverage', source: 'Newspaper Clipping' },
  { src: '/gallery/svsb-gallery-9.jpg', title: 'Media Coverage', source: 'Newspaper Clipping' },
  { src: '/gallery/svsb-gallery-10.jpg', title: 'Media Coverage', source: 'Newspaper Clipping' },
  { src: '/gallery/svsb-gallery-11.jpg', title: 'Media Coverage', source: 'Newspaper Clipping' },
  { src: '/gallery/svsb-gallery-12.jpg', title: 'Media Coverage', source: 'Newspaper Clipping' },
  { src: '/gallery/svsb-gallery-13.jpg', title: 'Media Coverage', source: 'Newspaper Clipping' },
  { src: '/gallery/svsb-gallery-14.jpg', title: 'Media Coverage', source: 'Newspaper Clipping' },
  { src: '/gallery/svsb-gallery-15.jpg', title: 'Media Coverage', source: 'Newspaper Clipping' },
  { src: '/gallery/svsb-gallery-16.jpg', title: 'Media Coverage', source: 'Newspaper Clipping' },
  { src: '/gallery/svsb-gallery-17.jpg', title: 'Media Coverage', source: 'Newspaper Clipping' },
  { src: '/gallery/svsb-gallery-18.jpg', title: 'Media Coverage', source: 'Newspaper Clipping' },
];

const MediaPress = () => {
  const [selectedClippingIndex, setSelectedClippingIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setSelectedClippingIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedClippingIndex(null);
  }, []);

  const goToPrevious = useCallback(() => {
    if (selectedClippingIndex === null || newspaperClippings.length === 0) return;
    const newIndex = selectedClippingIndex > 0 
      ? selectedClippingIndex - 1 
      : newspaperClippings.length - 1;
    setSelectedClippingIndex(newIndex);
  }, [selectedClippingIndex]);

  const goToNext = useCallback(() => {
    if (selectedClippingIndex === null || newspaperClippings.length === 0) return;
    const newIndex = selectedClippingIndex < newspaperClippings.length - 1 
      ? selectedClippingIndex + 1 
      : 0;
    setSelectedClippingIndex(newIndex);
  }, [selectedClippingIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedClippingIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedClippingIndex, goToPrevious, goToNext, closeLightbox]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedClippingIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedClippingIndex]);

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
            {publishedArticles.map((article, index) => {
              const isExternalUrl = article.url && article.url.startsWith("http");
              const isInternalUrl = article.url && article.url.startsWith("/");
              const hasValidUrl = isExternalUrl || isInternalUrl;
              
              if (isInternalUrl) {
                return (
                  <Link
                    key={index}
                    to={article.url}
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
                  </Link>
                );
              }
              
              return (
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Newspaper Clippings Section */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Newspaper Clippings</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Media coverage and press clippings featuring our work and achievements
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {newspaperClippings.map((clipping, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden cursor-pointer bg-background border border-border"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={clipping.src}
                  alt={clipping.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-primary text-sm uppercase tracking-wider mb-2">{clipping.source}</p>
                    <h4 className="text-secondary-foreground font-heading font-bold text-sm">{clipping.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl font-bold mb-6 text-center">Media Kit</h2>
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
              <h3 className="font-heading text-xl font-bold mb-4 text-center">Media Inquiries</h3>
              <p className="text-muted-foreground mb-4 text-center">
                For press inquiries, interview requests, or media partnerships, 
                please contact:
              </p>
              <p className="text-foreground text-center">
                <strong>Email:</strong> info@ysvsb.org<br />
                <strong>Phone:</strong> +91 70135 70447
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Newspaper Clippings */}
      <AnimatePresence>
        {selectedClippingIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 overflow-auto"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center max-w-7xl w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={newspaperClippings[selectedClippingIndex].src}
                alt={newspaperClippings[selectedClippingIndex].title}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-primary text-sm uppercase tracking-wider mb-2">
                  {newspaperClippings[selectedClippingIndex].source}
                </p>
                <h3 className="text-white font-heading text-xl font-bold">
                  {newspaperClippings[selectedClippingIndex].title}
                </h3>
                <p className="text-white/70 text-sm mt-2">
                  {selectedClippingIndex + 1} of {newspaperClippings.length}
                </p>
              </div>
            </motion.div>

            {newspaperClippings.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-3 hover:bg-white/10 rounded-full z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={40} />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-3 hover:bg-white/10 rounded-full z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight size={40} />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default MediaPress;
