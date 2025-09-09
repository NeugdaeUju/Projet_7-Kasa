import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from './components/components_allPages/Header.jsx'
import PageError from './components/pages/PageError.jsx'
import Apropos from './components/pages/Page_Apropos/Apropos.jsx'
import LogementPage from "./components/pages/LogementPage.jsx"
import Accueil from './components/pages/Page_Accueils/Accueil.jsx'


const router = createBrowserRouter ([
  {
    path : '/',
    element : <>
      <Header />
    </>,
    errorElement : <PageError/>,
    children : [{
      path : 'a-propos',
      element : <div><Apropos/></div>
    },
    {
      path : '/id',
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
