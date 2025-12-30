import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import all gallery images
import img1 from "@/assets/gallery/FB_IMG_1589556442752.jpg";
import img2 from "@/assets/gallery/FB_IMG_1589556515707.jpg";
import img3 from "@/assets/gallery/FB_IMG_1707392981507.jpg";
import img4 from "@/assets/gallery/FB_IMG_1707393194803.jpg";
import img5 from "@/assets/gallery/FB_IMG_1707393205634.jpg";
import img6 from "@/assets/gallery/FB_IMG_1731571065678.jpg";
import img7 from "@/assets/gallery/FB_IMG_1731571070600.jpg";
import img8 from "@/assets/gallery/FB_IMG_1731577899565.jpg";
import img9 from "@/assets/gallery/FB_IMG_1731577914655.jpg";
import img10 from "@/assets/gallery/FB_IMG_1731577936177.jpg";
import img11 from "@/assets/gallery/FB_IMG_1731578930806.jpg";
import img12 from "@/assets/gallery/FB_IMG_1731578940003.jpg";
import img13 from "@/assets/gallery/FB_IMG_1731578950556.jpg";
import img14 from "@/assets/gallery/FB_IMG_1731578957005.jpg";
import img15 from "@/assets/gallery/FB_IMG_1731578971235.jpg";
import img16 from "@/assets/gallery/FB_IMG_1731579025048.jpg";
import img17 from "@/assets/gallery/FB_IMG_1731579483745.jpg";
import img18 from "@/assets/gallery/FB_IMG_1731579647404.jpg";
import img19 from "@/assets/gallery/FB_IMG_15970424250680277.jpg";
import img20 from "@/assets/gallery/IMG_20190214_115332.jpg";
import img21 from "@/assets/gallery/IMG_20190331_113706.jpg";
import img22 from "@/assets/gallery/IMG_20190412_111301.jpg";
import img23 from "@/assets/gallery/IMG_20190413_182110.jpg";
import img24 from "@/assets/gallery/IMG_20190413_182122.jpg";
import img25 from "@/assets/gallery/IMG_20190526_151013.jpg";
import img26 from "@/assets/gallery/IMG_20190604_222647.jpg";
import img27 from "@/assets/gallery/IMG_20240208_131855.jpg";
import img28 from "@/assets/gallery/IMG_20240208_131914.jpg";
import img29 from "@/assets/gallery/IMG_20240208_131959.jpg";
import img30 from "@/assets/gallery/IMG_20240208_132137.jpg";
import img31 from "@/assets/gallery/IMG_20240208_150503.jpg";
import img32 from "@/assets/gallery/IMG_20240208_150619.jpg";
import img33 from "@/assets/gallery/IMG_20250203_180300.jpg";
import img34 from "@/assets/gallery/IMG_20250923_174113.jpg";
import img35 from "@/assets/gallery/IMG_20250923_174254.jpg";
import img36 from "@/assets/gallery/IMG_20250923_180309.jpg";
import img37 from "@/assets/gallery/IMG-20190814-WA0024.jpg";
import img38 from "@/assets/gallery/IMG-20241002-WA0009.jpg";
import img39 from "@/assets/gallery/IMG-20241002-WA0011.jpg";
import img40 from "@/assets/gallery/IMG-20241018-WA0011.jpg";
import img41 from "@/assets/gallery/IMG-20241028-WA0004.jpg";
import img42 from "@/assets/gallery/IMG-20250110-WA0017.jpg";
import img43 from "@/assets/gallery/IMG-20250121-WA0023.jpg";
import img44 from "@/assets/gallery/IMG-20250121-WA0026.jpg";
import img45 from "@/assets/gallery/IMG-20250123-WA0004.jpg";
import img46 from "@/assets/gallery/IMG-20250909-WA0004.jpg";
import img47 from "@/assets/gallery/IMG-20250909-WA0005.jpg";
import img48 from "@/assets/gallery/IMG-20250909-WA0006.jpg";
import img49 from "@/assets/gallery/IMG-20250909-WA0008.jpg";
import img50 from "@/assets/gallery/IMG-20250909-WA0010.jpg";
import img51 from "@/assets/gallery/IMG_20190604_222647(1).jpg";
import img52 from "@/assets/gallery/IMG_7444_1.jpg";
import img53 from "@/assets/gallery/IMG_7456.jpg";
import img54 from "@/assets/gallery/IMG-20250128-WA0011.jpg";
import img55 from "@/assets/gallery/IMG-20250128-WA0015.jpg";
import img56 from "@/assets/gallery/IMG-20250128-WA0023.jpg";

// Import svsb gallery images - using public folder paths to avoid import issues
const svsbGallery1 = '/gallery/svsb-gallery-1.jpg';
const svsbGallery2 = '/gallery/svsb-gallery-2.jpg';
const svsbGallery3 = '/gallery/svsb-gallery-3.jpg';
const svsbGallery4 = '/gallery/svsb-gallery-4.jpg';
const svsbGallery5 = '/gallery/svsb-gallery-5.jpg';
const svsbGallery6 = '/gallery/svsb-gallery-6.jpg';
const svsbGallery7 = '/gallery/svsb-gallery-7.jpg';
const svsbGallery8 = '/gallery/svsb-gallery-8.jpg';
const svsbGallery9 = '/gallery/svsb-gallery-9.jpg';
const svsbGallery10 = '/gallery/svsb-gallery-10.jpg';
const svsbGallery11 = '/gallery/svsb-gallery-11.jpg';
const svsbGallery12 = '/gallery/svsb-gallery-12.jpg';
const svsbGallery13 = '/gallery/svsb-gallery-13.jpg';
const svsbGallery14 = '/gallery/svsb-gallery-14.jpg';
const svsbGallery15 = '/gallery/svsb-gallery-15.jpg';
const svsbGallery16 = '/gallery/svsb-gallery-16.jpg';
const svsbGallery17 = '/gallery/svsb-gallery-17.jpg';
const svsbGallery18 = '/gallery/svsb-gallery-18.jpg';

// All gallery images with categories
const galleryImages = [
  { src: img1, category: "Community", title: "Seva Activities" },
  { src: img2, category: "Community", title: "Community Service" },
  { src: img3, category: "Events", title: "Community Event" },
  { src: img4, category: "Events", title: "Community Gathering" },
  { src: img5, category: "Community", title: "Seva Activities" },
  { src: img6, category: "Events", title: "Community Program" },
  { src: img7, category: "Community", title: "Service Activities" },
  { src: img8, category: "Events", title: "Community Event" },
  { src: img9, category: "Community", title: "Seva Activities" },
  { src: img10, category: "Events", title: "Community Program" },
  { src: img11, category: "Community", title: "Service Activities" },
  { src: img12, category: "Events", title: "Community Gathering" },
  { src: img13, category: "Community", title: "Seva Activities" },
  { src: img14, category: "Events", title: "Community Event" },
  { src: img15, category: "Community", title: "Service Activities" },
  { src: img16, category: "Events", title: "Community Program" },
  { src: img17, category: "Community", title: "Seva Activities" },
  { src: img18, category: "Events", title: "Community Gathering" },
  { src: img19, category: "Community", title: "Service Activities" },
  { src: img20, category: "Education", title: "Education Program" },
  { src: img21, category: "Education", title: "Learning Activities" },
  { src: img22, category: "Education", title: "Educational Event" },
  { src: img23, category: "Education", title: "Learning Program" },
  { src: img24, category: "Education", title: "Education Initiative" },
  { src: img25, category: "Healthcare", title: "Health Camp" },
  { src: img26, category: "Healthcare", title: "Medical Services" },
  { src: img27, category: "Healthcare", title: "Health Program" },
  { src: img28, category: "Healthcare", title: "Medical Camp" },
  { src: img29, category: "Healthcare", title: "Health Services" },
  { src: img30, category: "Healthcare", title: "Medical Program" },
  { src: img31, category: "Healthcare", title: "Health Initiative" },
  { src: img32, category: "Healthcare", title: "Medical Services" },
  { src: img33, category: "Women", title: "Women Empowerment" },
  { src: img34, category: "Women", title: "Women's Program" },
  { src: img35, category: "Women", title: "Women Empowerment" },
  { src: img36, category: "Women", title: "Women's Initiative" },
  { src: img37, category: "Events", title: "Community Event" },
  { src: img38, category: "Events", title: "Community Program" },
  { src: img39, category: "Events", title: "Community Gathering" },
  { src: img40, category: "Events", title: "Community Event" },
  { src: img41, category: "Community", title: "Seva Activities" },
  { src: img42, category: "Community", title: "Service Activities" },
  { src: img43, category: "Community", title: "Community Service" },
  { src: img44, category: "Community", title: "Seva Activities" },
  { src: img45, category: "Community", title: "Service Activities" },
  { src: img46, category: "Events", title: "Community Event" },
  { src: img47, category: "Events", title: "Community Program" },
  { src: img48, category: "Events", title: "Community Gathering" },
  { src: img49, category: "Events", title: "Community Event" },
  { src: img50, category: "Events", title: "Community Program" },
  { src: img51, category: "Events", title: "Community Event" },
  { src: img52, category: "Community", title: "Seva Activities" },
  { src: img53, category: "Community", title: "Service Activities" },
  { src: img54, category: "Events", title: "Community Program" },
  { src: img55, category: "Events", title: "Community Gathering" },
  { src: img56, category: "Events", title: "Community Event" },
  { src: svsbGallery1, category: "Events", title: "Seva Doots - Community Service" },
  { src: svsbGallery2, category: "Environment", title: "Green Bharat - Plantation Drive" },
  { src: svsbGallery3, category: "Healthcare", title: "Swasthya Mela - Health Camp" },
  { src: svsbGallery4, category: "Awareness", title: "Organ Donation Campaign" },
  { src: svsbGallery5, category: "Youth", title: "Yuva Shakti - Youth Workshop" },
  { src: svsbGallery6, category: "Education", title: "Vidya Utsav - Student Event" },
  { src: svsbGallery7, category: "Awareness", title: "Social Awareness Campaign" },
  { src: svsbGallery8, category: "Events", title: "Community Event" },
  { src: svsbGallery9, category: "Events", title: "Community Program" },
  { src: svsbGallery10, category: "Events", title: "Community Gathering" },
  { src: svsbGallery11, category: "Events", title: "Community Event" },
  { src: svsbGallery12, category: "Events", title: "Community Program" },
  { src: svsbGallery13, category: "Events", title: "Community Gathering" },
  { src: svsbGallery14, category: "Events", title: "Community Event" },
  { src: svsbGallery15, category: "Events", title: "Community Program" },
  { src: svsbGallery16, category: "Events", title: "Community Gathering" },
  { src: svsbGallery17, category: "Events", title: "Community Event" },
  { src: svsbGallery18, category: "Events", title: "Community Program" },
];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [currentFilteredIndex, setCurrentFilteredIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setCurrentFilteredIndex(index);
    setSelectedImageIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
    setCurrentFilteredIndex(null);
  }, []);

  const goToPrevious = useCallback(() => {
    if (currentFilteredIndex === null || galleryImages.length === 0) return;
    const newIndex = currentFilteredIndex > 0 
      ? currentFilteredIndex - 1 
      : galleryImages.length - 1; // Loop to last
    setCurrentFilteredIndex(newIndex);
    setSelectedImageIndex(newIndex);
  }, [currentFilteredIndex]);

  const goToNext = useCallback(() => {
    if (currentFilteredIndex === null || galleryImages.length === 0) return;
    const newIndex = currentFilteredIndex < galleryImages.length - 1 
      ? currentFilteredIndex + 1 
      : 0; // Loop to first
    setCurrentFilteredIndex(newIndex);
    setSelectedImageIndex(newIndex);
  }, [currentFilteredIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedImageIndex === null) return;

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
  }, [selectedImageIndex, goToPrevious, goToNext, closeLightbox]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImageIndex]);

  return (
    <Layout>
      <PageHero
        title="Gallery"
        subtitle="A glimpse into our work and impact"
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-primary text-sm uppercase tracking-wider mb-2">{image.category}</p>
                    <h4 className="text-secondary-foreground font-heading font-bold">{image.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 overflow-auto"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X size={32} />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center max-w-7xl w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[currentFilteredIndex || 0].src}
                alt={galleryImages[currentFilteredIndex || 0].title}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-primary text-sm uppercase tracking-wider mb-2">
                  {galleryImages[currentFilteredIndex || 0].category}
                </p>
                <h3 className="text-white font-heading text-xl font-bold">
                  {galleryImages[currentFilteredIndex || 0].title}
                </h3>
                <p className="text-white/70 text-sm mt-2">
                  {currentFilteredIndex !== null ? currentFilteredIndex + 1 : 1} of {galleryImages.length}
                </p>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
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

export default Gallery;
