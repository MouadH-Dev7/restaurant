import { useEffect } from "react";

function Seo({ title, description, path = "/", image }) {
  useEffect(() => {
    const baseUrl = "https://restaurant.mouadh-dev.workers.dev";
    const url = `${baseUrl}${path}`;
    const fallbackImage =
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsDs_yUjcUzuyZ8vsvPjf1tiyTuT-UoQK797-66aKn2340YSMVFexh2kqqUAH4Rgh7u79FVlIzO_9AoustP_2juIKlLkMyWp5P-PUH726i_Dddh66IO1xEavkYmRbUXB14wQuin3N1pjgZMmeVAGsGNYpMewjuT5RCgJukLSVrURK1dyTWeA2SwvXZzNjQrUSSn0qKlZVz5PCIs_pYzzefO5O97J1ruX_0xfZJ4fua1jcZ2fdxdywbpL9pq320JZYzkobDVJ0FjeI";
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

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    upsert('meta[name="description"]', "name", description);
    upsert('meta[property="og:title"]', "property", title);
    upsert('meta[property="og:description"]', "property", description);
    upsert('meta[property="og:url"]', "property", url);
    upsert('meta[property="og:image"]', "property", finalImage);
    upsert('meta[name="twitter:title"]', "name", title);
    upsert('meta[name="twitter:description"]', "name", description);
    upsert('meta[name="twitter:image"]', "name", finalImage);
  }, [description, image, path, title]);

  return null;
}

export default Seo;
