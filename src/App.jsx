import { BrowserRouter, Routes , Route } from "react-router-dom"
import Header from './components/components_allPages/Header.jsx'
import PageError from './components/pages/PageError.jsx'
import Apropos from './components/pages/Page_Apropos/Apropos.jsx'
import LogementPage from "./components/pages/Page_Logement/LogementPage.jsx"
import Accueil from './components/pages/Page_Accueils/Accueil'
import Footer from './components/components_allPages/Footer.jsx'

function App() {
  return <>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="a-propos" element={<Apropos />} />
      <Route path="logement/:id" element={<LogementPage />} />
      <Route path="*" element={<PageError />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  </>
}

export default App
