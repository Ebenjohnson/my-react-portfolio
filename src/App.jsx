import { useState } from "react"
import Navbar from "./scenes/Navbar"



function App() {

  const [selectedPage, setSelectedPage] = useState('home')
  const [isTopOfPage, setTopOfPage] = useState('(min-width:1060px)')




  return  <div className="app bg-deep-blue">
    <Navbar>
      selectedPage ={selectedPage} setSelectedPage={setSelectedPage}
    </Navbar>
  </div>
 // (
  //   <>

  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
