import { Box } from '@mui/material'
import './App.css'
import Manager from './components/Manager'
import ba from "./images/9.jpg"
function App() {
  return (
    
    <> 
  <Box
     sx={{
           position: 'absolute', 
           top: 0, 
           left: 0,
           width: '100vw', 
           height: '100vh', 
           backgroundImage: `url(${ba})`, 
           backgroundSize: 'cover', 
           backgroundPosition: 'center', 
           backgroundRepeat: 'repeat-y',
           zIndex: 0, 
           minHeight: '100vh',
           overflowY: 'auto' 
       }}
     >
      <Manager></Manager>
    </Box>
    </>
  )
}

export default App



