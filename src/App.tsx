import './App.css'
import { RouterProvider } from 'react-router'
import { router } from './router'
import Manager from './components/Manager'
import { Provider } from 'react-redux'
import store from './components/reduxStore'

function App() {


  return (
    <>

      <Provider store={store}>
        <Manager></Manager>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  )
}

export default App
