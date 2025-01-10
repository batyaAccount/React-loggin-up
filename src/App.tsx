import './App.css'
import { RouterProvider } from 'react-router'
import { router } from './router'
import Manager from './components/Manager'

function App() {


  return (
    <>
      <Manager></Manager>
      <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
