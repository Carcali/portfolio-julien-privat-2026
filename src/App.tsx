import { Routes, Route } from "react-router-dom"
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
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"
import LegalsMentions from "./pages/LegalsMentions/LegalsMentions"

export default function App() {
  return (
    <Routes>
      {/* Layout principal */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="accueil" element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route path="projets" element={<Projects />} />
        <Route path="projets/brasserie-du-paon" element={<BrasserieDuPaon />} />
        <Route path="projets/blayaise-expertise-comptable" element={<BlayaiseExpertiseComptable />} />
        <Route path="projets/montgaillard" element={<Montgaillard />} />
        <Route path="projets/elfort-groupe" element={<ElfortGroupe />} />
        <Route path="projets/locavigne" element={<Locavigne />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mentions-legales" element={<LegalsMentions />} />
      </Route>
    </Routes>
  )
}