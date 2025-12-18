import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

const defaultSEO = {
  title: "Swami Vivekananda Seva Brundam | Rural Development NGO in Telangana",
  description: "Swami Vivekananda Seva Brundam is a registered NGO working for rural development, education, healthcare, women empowerment, and youth skill development in Telangana since 2008.",
  keywords: "NGO Telangana, rural development, education programs, healthcare camps, women empowerment, youth development, donate NGO, volunteer India, CSR partnerships",
  image: "https://ysvsb.org/logo.png",
  type: "website",
};

export const SEO = ({ title, description, keywords, image, type = "website" }: SEOProps) => {
  const location = useLocation();
  const baseUrl = "https://ysvsb.org";
  const currentUrl = `${baseUrl}${location.pathname}`;

  const seo = {
    title: title ? `${title} | Swami Vivekananda Seva Brundam` : defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    image: image || defaultSEO.image,
    type,
    url: currentUrl,
  };

  useEffect(() => {
    // Update document title
    document.title = seo.title;

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
    updateMetaTag("description", seo.description);
    updateMetaTag("keywords", seo.keywords);
    updateMetaTag("title", seo.title);

    // Open Graph tags
    updateMetaTag("og:title", seo.title, "property");
    updateMetaTag("og:description", seo.description, "property");
    updateMetaTag("og:image", seo.image, "property");
    updateMetaTag("og:url", seo.url, "property");
    updateMetaTag("og:type", seo.type, "property");

    // Twitter tags
    updateMetaTag("twitter:title", seo.title);
    updateMetaTag("twitter:description", seo.description);
    updateMetaTag("twitter:image", seo.image);

    // Canonical URL
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", seo.url);
  }, [seo.title, seo.description, seo.keywords, seo.image, seo.type, seo.url]);

  return null;
};

