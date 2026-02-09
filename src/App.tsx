import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"

// Pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
// import ProjectDetail from "./pages/Projects/ProjectDetail"
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"

export default function App() {
  return (
    <Routes>
      {/* Layout principal */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route index element={<About />} />
        <Route index element={<Projects />} />
        <Route index element={<Services />} />
        <Route index element={<Contact />} />
      </Route>
    </Routes>
  )
}