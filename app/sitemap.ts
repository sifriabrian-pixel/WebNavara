import type { MetadataRoute } from "next";
import { tratamientos } from "@/content/tratamientos";

// [PENDIENTE-CLIENTE] Reemplazar por el dominio final una vez que esté definido.
const BASE_URL = "https://www.navara.com.py";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/tratamientos", "/promociones", "/nosotros", "/contacto"].map(
    (path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
    })
  );

  const treatmentRoutes = tratamientos.map((t) => ({
    url: `${BASE_URL}/tratamientos/${t.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...treatmentRoutes];
}
