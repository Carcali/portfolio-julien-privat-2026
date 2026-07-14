import { SITE_URL, SITE_NAME } from "./Seo"
import portrait from "../../assets/global/photo-julien-privat-graphiste-developpeur-web-2026.jpg"

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  jobTitle: "Graphiste & Développeur web",
  description: "Graphiste et développeur web freelance. Identité de marque, sites web et direction artistique, avec une prédilection pour la viticulture, l'artisanat et le luxe.",
  url: SITE_URL,
  image: `${SITE_URL}${portrait}`,
  sameAs: [
    "https://www.linkedin.com/in/julien-privat-7a4990203/",
    "https://github.com/Carcali",
  ],
}

type CreativeWorkInput = {
  name: string
  description: string
  path: string
  image: string
  dateCreated?: string
  keywords?: string[]
}

export function creativeWorkSchema({ name, description, path, image, dateCreated, keywords }: CreativeWorkInput) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url: `${SITE_URL}${path}`,
    image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    creator: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
    ...(dateCreated ? { dateCreated } : {}),
    ...(keywords ? { keywords: keywords.join(", ") } : {}),
  }
}

type BreadcrumbItem = { name: string; path: string }

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}
