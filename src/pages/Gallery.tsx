import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { useState } from "react";

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
import img52 from "@/assets/gallery/IMG_7444 (1).JPG";
import img53 from "@/assets/gallery/IMG_7456.JPG";
import img54 from "@/assets/gallery/IMG-20250128-WA0011.jpg";
import img55 from "@/assets/gallery/IMG-20250128-WA0015.jpg";
import img56 from "@/assets/gallery/IMG-20250128-WA0023.jpg";

const categories = ["All", "Education", "Healthcare", "Women", "Events", "Community"];

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
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <Layout>
      <PageHero
        title="Gallery"
        subtitle="A glimpse into our work and impact"
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 font-medium text-sm uppercase tracking-wider transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden cursor-pointer"
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
    </Layout>
  );
};

export default Gallery;
