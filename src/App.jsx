import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from './Root.jsx'
import PageError from './PageError.jsx'

const router = createBrowserRouter ([
  {
    path : '/',
    element : <Root/>,
    errorElement : <PageError/>,
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
