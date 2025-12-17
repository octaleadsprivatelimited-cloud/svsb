import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";
import { useState } from "react";

import ruralEducationImage from "@/assets/rural-education.jpg";
import healthCampImage from "@/assets/health-camp.jpg";
import womenEmpowermentImage from "@/assets/women-empowerment.jpg";
import youthTrainingImage from "@/assets/youth-training.jpg";
import heroImage from "@/assets/hero-education.jpg";

const categories = ["All", "Education", "Healthcare", "Women", "Events"];

const galleryImages = [
  { src: ruralEducationImage, category: "Education", title: "Rural Education Program" },
  { src: healthCampImage, category: "Healthcare", title: "Medical Camp" },
  { src: womenEmpowermentImage, category: "Women", title: "Women Self Help Group" },
  { src: youthTrainingImage, category: "Education", title: "Computer Training Center" },
  { src: heroImage, category: "Education", title: "Village School" },
  { src: healthCampImage, category: "Healthcare", title: "Eye Check-up Camp" },
  { src: womenEmpowermentImage, category: "Women", title: "Skill Training Workshop" },
  { src: ruralEducationImage, category: "Education", title: "Learning Center" },
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
