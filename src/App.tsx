import { Box } from '@mui/material'
import './App.css'
import Manager from './components/Manager'
import ba from "./images/9.jpg"
function App() {
  return (
    
    <> 
  <Box
     sx={{
           position: 'fixed', 
           top: 0, 
           left: 0,
           width: '100vw', 
           height: '100vh', 
           backgroundImage: `url(${ba})`, 
           backgroundSize: 'cover', 
           backgroundPosition: 'center', 
           backgroundRepeat: 'no-repeat',
           zIndex: 0, 
       }}
     >
      <Manager></Manager>
    </Box>
    </>
  )
}

export default App
