import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom"
import Header from './components/components_allPages/Header.jsx'
import PageError from './components/pages/PageError.jsx'
import Apropos from './components/pages/Page_Apropos/Apropos.jsx'
import LogementPage from "./components/pages/Page_Logement/LogementPage.jsx"
import Accueil from './components/pages/Page_Accueils/Accueil'

function Layout() {
  return (<>
    <Header />
    <Outlet />
  </>)
  
}

const router = createBrowserRouter ([
  {
    path : '/',
    element : <Layout />,
    errorElement : <PageError/>,
    children : [
    {
      index : true, 
      element : <Accueil />
    },
    {
      path : 'a-propos',
      element : <Apropos/>
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
