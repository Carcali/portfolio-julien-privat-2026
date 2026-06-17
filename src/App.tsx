import type { RouteRecord } from "vite-react-ssg"

import MainLayout from "./layouts/MainLayout"

// Pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import BrasserieDuPaon from "./pages/Projects/BrasserieDuPaon/BrasserieDuPaon"
import BlayaiseExpertiseComptable from "./pages/Projects/BlayaiseExpertiseComptable/BlayaiseExpertiseComptable"
import Montgaillard from "./pages/Projects/Montgaillard/Montgaillard"
import ElfortGroupe from "./pages/Projects/ElfortGroupe/ElfortGroupe"
import Locavigne from "./pages/Projects/Locavigne/Locavigne"
import AlineaBoutique from "./pages/Projects/AlineaBoutique/AlineaBoutique"
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"
import LegalsMentions from "./pages/LegalsMentions/LegalsMentions"
import Logofolio from "./pages/Projects/Logofolio/Logofolio"
import LeTempsDesFleurs from "./pages/Projects/LeTempsDesFleurs/LeTempsDesFleurs"
import NotFound from "./pages/NotFound/NotFound"

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "accueil", element: <Home /> },
      { path: "a-propos", element: <About /> },
      { path: "projets", element: <Projects /> },
      { path: "projets/brasserie-du-paon", element: <BrasserieDuPaon /> },
      { path: "projets/blayaise-expertise-comptable", element: <BlayaiseExpertiseComptable /> },
      { path: "projets/montgaillard", element: <Montgaillard /> },
      { path: "projets/elfort-groupe", element: <ElfortGroupe /> },
      { path: "projets/locavigne", element: <Locavigne /> },
      { path: "projets/alinea-boutique", element: <AlineaBoutique /> },
      { path: "projets/logofolio", element: <Logofolio /> },
      { path: "projets/le-temps-des-fleurs", element: <LeTempsDesFleurs /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "mentions-legales", element: <LegalsMentions /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]