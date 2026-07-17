export type ServiceCategory = "Print" | "Digital" | "Développement web"

export interface ServiceItem {
  id: string
  category: ServiceCategory
  label: string
  keywords?: string[]
}

export const SERVICES: ServiceItem[] = [
  // ── Print ──────────────────────────────────────────────
  { id: "print-logotype", category: "Print", label: "Logotype", keywords: ["logo", "identité visuelle"] },
  { id: "print-charte", category: "Print", label: "Charte graphique", keywords: ["identité de marque", "brand guidelines", "chartre graphique"] },
  { id: "print-cdv", category: "Print", label: "Cartes de visites", keywords: ["carte de visite", "business card"] },
  { id: "print-posters", category: "Print", label: "Posters / Affiches", keywords: ["affiche", "poster"] },
  { id: "print-livres", category: "Print", label: "Livres / Catalogues / Brochures", keywords: ["catalogue", "brochure", "plaquette", "livre"] },
  { id: "print-depliants", category: "Print", label: "Dépliants", keywords: ["flyer", "dépliant", "tract"] },
  { id: "print-produits", category: "Print", label: "Produits dérivés", keywords: ["goodies", "merchandising", "produit dérivé"] },
  { id: "print-evenementiel", category: "Print", label: "Évènementiel (cartons d’invitations, roll-up, kakémono…)", keywords: ["invitation", "roll-up", "kakemono", "salon", "évènement", "evenement"] },
  { id: "print-packaging", category: "Print", label: "Packaging", keywords: ["emballage", "packaging", "boite"] },
  { id: "print-agendas", category: "Print", label: "Agendas", keywords: ["agenda", "planner"] },
  { id: "print-calendriers", category: "Print", label: "Calendriers", keywords: ["calendrier"] },
  { id: "print-signaletique", category: "Print", label: "Signalétique", keywords: ["panneau", "enseigne directionnelle", "signalétique"] },
  { id: "print-vitrines", category: "Print", label: "Vitrines / Enseignes", keywords: ["enseigne", "vitrine", "façade", "devanture"] },
  { id: "print-creation", category: "Print", label: "Toute création graphique imprimable", keywords: ["impression", "print", "création graphique"] },
  { id: "print-prepresse", category: "Print", label: "Notions de pré-presse et de colorimétrie", keywords: ["pré-presse", "prepresse", "colorimétrie", "impression"] },

  // ── Digital ────────────────────────────────────────────
  { id: "digital-maintenance", category: "Digital", label: "Gestion et maintenance complète du site (maintenance des mises à jours, actualisation des différents contenus, maintenance sécurité…)", keywords: ["maintenance site", "mise à jour", "sécurité", "maintenance web"] },
  { id: "digital-seo", category: "Digital", label: "Optimisation du référencement naturel", keywords: ["seo", "référencement", "google", "visibilité"] },
  { id: "digital-contenus", category: "Digital", label: "Création de contenus dédiés aux sites et à différents intervenants pour le digital", keywords: ["rédaction", "contenu web", "copywriting"] },
  { id: "digital-ecommerce-produits", category: "Digital", label: "Ajouts et gestions des produits, des stocks et des commandes pour les e-commerces", keywords: ["e-commerce", "ecommerce", "boutique en ligne", "stock", "commande", "produit"] },
  { id: "digital-reseaux", category: "Digital", label: "Gestion des réseaux sociaux : créer du contenu, un planning de posts, répondre aux commentaires, faire du référencement, gérer la relation client/entreprise.", keywords: ["réseaux sociaux", "reseaux sociaux", "instagram", "facebook", "community management", "social media"] },
  { id: "digital-da", category: "Digital", label: "Assurance d’une direction artistique et du respect de la charte graphique", keywords: ["direction artistique", "cohérence visuelle", "da"] },

  // ── Développement web ──────────────────────────────────
  { id: "dev-wordpress", category: "Développement web", label: "Création de sites vitrines Wordpress", keywords: ["wordpress", "site vitrine", "site internet"] },
  { id: "dev-frontend", category: "Développement web", label: "Développement frontend", keywords: ["site web", "développement", "developpement", "react", "code"] },
  { id: "dev-uiux", category: "Développement web", label: "UI / UX design", keywords: ["interface", "expérience utilisateur", "ux", "ui", "maquette"] },
  { id: "dev-maquettes", category: "Développement web", label: "Maquettes de sites / applications", keywords: ["maquette", "prototype", "figma", "wireframe"] },
  { id: "dev-tests", category: "Développement web", label: "Tests fonctionnels", keywords: ["tests", "qa", "recette"] },
  { id: "dev-e2e", category: "Développement web", label: "Tests end-to-end Playwright", keywords: ["tests automatisés", "playwright", "e2e"] },
  { id: "dev-styles", category: "Développement web", label: "Reformatage de styles", keywords: ["css", "refonte graphique", "style"] },
  { id: "dev-ecommerce-aide", category: "Développement web", label: "Aide à la gestion d’un e-commerce", keywords: ["boutique en ligne", "e-commerce", "ecommerce"] },
  { id: "dev-ecommerce-mise-en-place", category: "Développement web", label: "Accompagnement pour la mise en place d’un e-commerce", keywords: ["créer une boutique", "shopify", "woocommerce", "vente en ligne"] },
  { id: "dev-assets", category: "Développement web", label: "Créations de librairies d’assets visuels prêts à l’emploi pour applications", keywords: ["design system", "assets", "librairie visuelle"] },
]
