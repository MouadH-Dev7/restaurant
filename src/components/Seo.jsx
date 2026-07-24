import { useEffect } from "react";

function Seo({ title, description, path = "/", image }) {
  useEffect(() => {
    const fallbackImage = "/og-image.svg";
    const finalImage = image || fallbackImage;

    document.title = title;

    const upsert = (selector, attr, value) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        if (attr === "name") element.setAttribute("name", selector.match(/"(.*)"/)[1]);
        if (attr === "property") element.setAttribute("property", selector.match(/"(.*)"/)[1]);
        document.head.appendChild(element);
      }
      element.setAttribute("content", value);
    };

    upsert('meta[name="description"]', "name", description);
    upsert('meta[property="og:title"]', "property", title);
    upsert('meta[property="og:description"]', "property", description);
    upsert('meta[property="og:image"]', "property", finalImage);
    upsert('meta[name="twitter:title"]', "name", title);
    upsert('meta[name="twitter:description"]', "name", description);
    upsert('meta[name="twitter:image"]', "name", finalImage);
  }, [description, image, path, title]);

  return null;
}

export default Seo;
