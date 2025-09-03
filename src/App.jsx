import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter ([
  {
    path : '/',
    element : <div>Accueil</div>
  },
  {
    path : '/a-propos',
    element : <div>A Propos</div>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
