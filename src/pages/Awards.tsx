import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Award, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import new award images
import award1 from "@/assets/awards/20250406_100138.jpg";
import award2 from "@/assets/awards/20250813_082531.jpg";
import award3 from "@/assets/awards/1743410358840.jpg";
import award4 from "@/assets/awards/b5b00b9d_205425_5.jpg";
import award5 from "@/assets/awards/d5b851bd_01-crop--098dcd.jpg";
import award6 from "@/assets/awards/FB_IMG_1705996728421.jpg";
import award7 from "@/assets/awards/FB_IMG_1724327069118.jpg";
import award8 from "@/assets/awards/FB_IMG_1731395668744.jpg";
import award9 from "@/assets/awards/FB_IMG_1731581538533.jpg";
import award10 from "@/assets/awards/FB_IMG_1731581609232.jpg";
import award11 from "@/assets/awards/FB_IMG_1731581649047.jpg";
import award12 from "@/assets/awards/FB_IMG_1731581866935.jpg";
import award13 from "@/assets/awards/FB_IMG_1731581873767.jpg";
import award14 from "@/assets/awards/IMG_20191210_161635.jpg";
import award15 from "@/assets/awards/IMG_20241023_072655.jpg";
import award16 from "@/assets/awards/IMG_20250131_221952.jpg";
import award17 from "@/assets/awards/IMG_20250713_112435.jpg";
import award18 from "@/assets/awards/IMG_20250809_210235.jpg";
import award19 from "@/assets/awards/IMG-20250110-WA0024.jpg";
import award20 from "@/assets/awards/IMG-20250423-WA0001.jpg";

const awards = [
  { year: "2018", title: "National Youth Award", org: "Government of India", description: "Awarded to Founder Shiva Kumar Gudlanaram for exceptional contribution to youth development and community service." },
  { year: "2020", title: "Best NGO Award", org: "Government of Telangana", description: "Recognition for outstanding work in rural development and community empowerment." },
  { year: "2021", title: "COVID Relief Excellence", org: "District Administration", description: "For exemplary relief work during the COVID-19 pandemic." },
  { year: "2023", title: "Education Excellence Award", org: "Rotary Club", description: "For contribution to rural education and scholarship programs." },
];

const galleryImages = [
  { src: award1, title: "Award Recognition", category: "Awards" },
  { src: award2, title: "Award Ceremony", category: "Awards" },
  { src: award3, title: "Recognition Event", category: "Awards" },
  { src: award4, title: "Award Presentation", category: "Awards" },
  { src: award5, title: "Honor Ceremony", category: "Awards" },
  { src: award6, title: "Award Recognition", category: "Awards" },
  { src: award7, title: "Award Ceremony", category: "Awards" },
  { src: award8, title: "Recognition Event", category: "Awards" },
  { src: award9, title: "Award Presentation", category: "Awards" },
  { src: award10, title: "Honor Ceremony", category: "Awards" },
  { src: award11, title: "Award Recognition", category: "Awards" },
  { src: award12, title: "Award Ceremony", category: "Awards" },
  { src: award13, title: "Recognition Event", category: "Awards" },
  { src: award14, title: "Award Presentation", category: "Awards" },
  { src: award15, title: "Honor Ceremony", category: "Awards" },
  { src: award16, title: "Award Recognition", category: "Awards" },
  { src: award17, title: "Award Ceremony", category: "Awards" },
  { src: award18, title: "Recognition Event", category: "Awards" },
  { src: award19, title: "Award Presentation", category: "Awards" },
  { src: award20, title: "Honor Ceremony", category: "Awards" },
];

const Awards = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const goToPrevious = useCallback(() => {
    if (selectedImage === null || galleryImages.length === 0) return;
    const newIndex = selectedImage > 0 
      ? selectedImage - 1 
      : galleryImages.length - 1;
    setSelectedImage(newIndex);
  }, [selectedImage]);

  const goToNext = useCallback(() => {
    if (selectedImage === null || galleryImages.length === 0) return;
    const newIndex = selectedImage < galleryImages.length - 1 
      ? selectedImage + 1 
      : 0;
    setSelectedImage(newIndex);
  }, [selectedImage]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, goToPrevious, goToNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="w-full h-full object-contain max-h-[90vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="text-xs text-primary bg-primary/20 px-2 py-1 mb-2 inline-block">
                  {galleryImages[selectedImage].category}
                </span>
                <h3 className="text-lg font-medium text-white">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-white/70 text-sm mt-2">
                  {selectedImage + 1} of {galleryImages.length}
                </p>
              </div>
            </motion.div>

            {/* Navigation arrows */}
            {galleryImages.length > 1 && (
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

export default Awards;
