import './App.css'
import Home from './Components/Home'
//import Signup from './Components/Signup'
import DataProvider from './context/DataProvider'
import { Container } from 'react-bootstrap'

function App() {
  

  return (
    // <>
    // <Container
    // className="d-flex align-items-center justify-content-center"
    // style={{minHeight: "100vh"}} >
    //   <div className='w-100' style={{maxWidth: "400px"}}>
    //   <Signup/>
    //   </div>
    // </Container>
    // </>

    <DataProvider>
       <Home/>
    </DataProvider>
  )
}

export default App


// <DataProvider>
//       <Home/>
//     </DataProvider>