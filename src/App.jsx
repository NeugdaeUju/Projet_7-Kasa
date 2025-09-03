import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from './Root.jsx'
import PageError from './pages/PageError.jsx'
import LogementPage from "./pages/LogementPage.jsx"

const router = createBrowserRouter ([
  {
    path : '/',
    element : <Root/>,
    errorElement : <PageError/>,
    children : [{
      path : 'a-propos',
      element : <div>Page A Propos</div>
    },
    {
      path : ':id',
      element : <LogementPage/>
    },
  ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
