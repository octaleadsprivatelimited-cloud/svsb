import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Award, Calendar, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import award images
import awardNewspaper1 from "@/assets/awards/award-newspaper-1.jpg";
import awardNewspaper2 from "@/assets/awards/award-newspaper-2.jpg";
import awardPresident from "@/assets/awards/award-president.jpg";
import awardGovernor from "@/assets/awards/award-governor.jpg";
import awardNewspaper3 from "@/assets/awards/award-newspaper-3.jpg";
import awardCertificate from "@/assets/awards/award-certificate.jpg";
import awardCeremony1 from "@/assets/awards/award-ceremony-1.jpg";
import awardCeremony2 from "@/assets/awards/award-ceremony-2.jpg";
import awardNewspaper4 from "@/assets/awards/award-newspaper-4.jpg";
import awardNewspaper5 from "@/assets/awards/award-newspaper-5.jpg";

const awards = [
  { year: "2018", title: "National Youth Award", org: "Government of India", description: "Awarded to Founder Shiva Kumar Gudlanaram for exceptional contribution to youth development and community service." },
  { year: "2020", title: "Best NGO Award", org: "Government of Telangana", description: "Recognition for outstanding work in rural development and community empowerment." },
  { year: "2021", title: "COVID Relief Excellence", org: "District Administration", description: "For exemplary relief work during the COVID-19 pandemic." },
  { year: "2023", title: "Education Excellence Award", org: "Rotary Club", description: "For contribution to rural education and scholarship programs." },
];

const galleryImages = [
  { src: awardNewspaper1, title: "Sunday Express Feature - Turning Pain Into Purpose", category: "Media Coverage" },
  { src: awardNewspaper2, title: "Eenadu Coverage - National Youth Award 2025", category: "Media Coverage" },
  { src: awardPresident, title: "Meeting with Former President Ram Nath Kovind", category: "Recognition" },
  { src: awardGovernor, title: "Governor Felicitates National Youth Awardee", category: "Recognition" },
  { src: awardNewspaper3, title: "Eenadu - Governor Appreciation", category: "Media Coverage" },
  { src: awardCertificate, title: "Award Certificate Presentation", category: "Ceremonies" },
  { src: awardCeremony1, title: "Award Ceremony with District Officials", category: "Ceremonies" },
  { src: awardCeremony2, title: "World Human Rights Association Recognition", category: "Recognition" },
  { src: awardNewspaper4, title: "Animal Welfare Initiative Coverage", category: "Media Coverage" },
  { src: awardNewspaper5, title: "Youth Benchmark in Serving Needy People", category: "Media Coverage" },
];

const Awards = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <Layout>
      <PageHero
        title="Awards & Recognition"
        subtitle="Acknowledgment of our work and dedication"
        breadcrumbs={[{ label: "Resources" }, { label: "Awards" }]}
      />

      {/* Awards List Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="card-sharp p-6 border-l-4 border-l-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="text-primary" size={28} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm text-primary font-medium mb-1">
                        <Calendar size={14} />
                        {award.year}
                      </div>
                      <h3 className="font-heading text-xl font-bold mb-1">{award.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">Awarded by: {award.org}</p>
                      <p className="text-muted-foreground">{award.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Award Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Moments of recognition and media coverage celebrating our journey of service
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-square overflow-hidden cursor-pointer bg-background border border-border"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-xs text-primary-foreground/80 bg-primary px-2 py-1 mb-2 inline-block">
                      {image.category}
                    </span>
                    <h3 className="text-sm font-medium text-background line-clamp-2">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-background hover:text-primary transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                <span className="text-xs text-primary-foreground bg-primary px-2 py-1 mb-2 inline-block">
                  {galleryImages[selectedImage].category}
                </span>
                <h3 className="text-lg font-medium text-background">
                  {galleryImages[selectedImage].title}
                </h3>
              </div>
            </motion.div>

            {/* Navigation arrows */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-background hover:text-primary transition-colors p-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev! - 1));
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-background hover:text-primary transition-colors p-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev! + 1));
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Awards;
