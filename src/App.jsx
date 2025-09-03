import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from './Root.jsx'

const router = createBrowserRouter ([
  {
    path : '/',
    element : <Root/>,
    children : [{
      path : 'a-propos',
      element : <div>Page A Propos</div>
    }]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
