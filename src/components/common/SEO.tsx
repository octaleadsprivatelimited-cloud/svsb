import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
  structuredData?: object;
}

const defaultSEO = {
  title: "Swamivivekananda Seva Brundam | Rural Development NGO in Telangana",
  description: "Swamivivekananda Seva Brundam is a registered NGO working for rural development, education, healthcare, and youth skill development in Telangana since 2012.",
  keywords: "NGO Telangana, rural development, education programs, healthcare camps, youth development, donate NGO, volunteer India, CSR partnerships",
  image: "https://ysvsb.org/logo.png",
  type: "website",
};

export const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  type = "website",
  noindex = false,
  structuredData
}: SEOProps) => {
  const location = useLocation();
  const baseUrl = "https://ysvsb.org";
  const currentUrl = `${baseUrl}${location.pathname}`;

  const seo = {
    title: title ? `${title} | Swamivivekananda Seva Brundam` : defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    image: image || defaultSEO.image,
    type,
    url: currentUrl,
  };

  useEffect(() => {
    // Update document title (max 60 characters recommended by Google)
    document.title = seo.title.length > 60 ? seo.title.substring(0, 57) + "..." : seo.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Primary meta tags
    updateMetaTag("description", seo.description.length > 160 ? seo.description.substring(0, 157) + "..." : seo.description);
    updateMetaTag("keywords", seo.keywords);
    
    // Robots meta tag
    updateMetaTag("robots", noindex ? "noindex, nofollow" : "index, follow");
    
    // Author
    updateMetaTag("author", "Swamivivekananda Seva Brundam");
    
    // Language
    updateMetaTag("language", "English");
    
    // Geo tags
    updateMetaTag("geo.region", "IN-TG");
    updateMetaTag("geo.placename", "Telangana");

    // Open Graph tags (required for social sharing)
    updateMetaTag("og:title", seo.title, "property");
    updateMetaTag("og:description", seo.description, "property");
    updateMetaTag("og:image", seo.image, "property");
    updateMetaTag("og:url", seo.url, "property");
    updateMetaTag("og:type", seo.type, "property");
    updateMetaTag("og:site_name", "Swamivivekananda Seva Brundam", "property");
    updateMetaTag("og:locale", "en_IN", "property");

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", seo.title);
    updateMetaTag("twitter:description", seo.description);
    updateMetaTag("twitter:image", seo.image);
    updateMetaTag("twitter:url", seo.url);

    // Canonical URL (prevents duplicate content issues)
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", seo.url);

    // Add structured data (JSON-LD) if provided
    if (structuredData) {
      // Remove existing structured data script if any
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [seo.title, seo.description, seo.keywords, seo.image, seo.type, seo.url, noindex, structuredData]);

  return null;
};

