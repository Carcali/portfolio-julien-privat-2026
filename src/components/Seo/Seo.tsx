import { Head } from "vite-react-ssg"
import defaultImage from "../../assets/global/photo-julien-privat-graphiste-developpeur-web-2026.jpg"

export const SITE_URL = "https://www.julien-privat.com"
export const SITE_NAME = "Julien PRIVAT"

type SeoProps = {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
  type?: "website" | "article"
  noindex?: boolean
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

function Seo({ title, description, path, image = defaultImage, imageAlt = SITE_NAME, type = "website", noindex = false, jsonLd }: SeoProps) {
  const url = `${SITE_URL}${path}`
  const absoluteImage = image.startsWith("http") ? image : `${SITE_URL}${image}`
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Head>
  )
}

export default Seo
