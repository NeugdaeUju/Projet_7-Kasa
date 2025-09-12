import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from './components/components_allPages/Header.jsx'
import PageError from './components/pages/PageError.jsx'
import Apropos from './components/pages/Page_Apropos/Apropos.jsx'
import LogementPage from "./components/pages/LogementPage.jsx"
import Accueil from './components/pages/Page_Accueils/Accueil.jsx'
import logementListe from '../src/assets/logements.json'

const id = logementListe.id

const router = createBrowserRouter ([
  {
    path : '/',
    element : <>
      <Header />
      <Accueil />
    </>,
    errorElement : <PageError/>,
    children : [{
      path : 'a-propos',
      element : <div><Apropos/></div>
    },
    {
      path : '/logement/:id',
      element : <LogementPage/>
    },
  ]
  }
])

function App() {
  return <>
  <RouterProvider router={router}/>
  </>
}

export default App
