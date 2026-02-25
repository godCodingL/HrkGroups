import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export function SEOHead({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
}: SEOHeadProps) {
  useEffect(() => {
    // Set page title
    document.title = `${title} | HRK Groups`;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Set keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      } else {
        const meta = document.createElement("meta");
        meta.name = "keywords";
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    // Set Open Graph tags
    if (ogImage) {
      const ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (ogImageMeta) {
        ogImageMeta.setAttribute("content", ogImage);
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:image");
        meta.content = ogImage;
        document.head.appendChild(meta);
      }
    }

    if (ogUrl) {
      const ogUrlMeta = document.querySelector('meta[property="og:url"]');
      if (ogUrlMeta) {
        ogUrlMeta.setAttribute("content", ogUrl);
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:url");
        meta.content = ogUrl;
        document.head.appendChild(meta);
      }
    }

    // Set canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", ogUrl || window.location.href);
    } else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = ogUrl || window.location.href;
      document.head.appendChild(link);
    }
  }, [title, description, keywords, ogImage, ogUrl]);

  return null;
}
