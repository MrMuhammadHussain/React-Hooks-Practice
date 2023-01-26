import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Prodect from "./components/Prodect"



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route  path="/" element={ <Home  />} />
        <Route  path="/about" element={ <About    />} />
        <Route  path="/contact" element={ <Contact  />} />
        <Route path="*" element={<div><h1> Page Not Found 404 </h1></div>} />
        <Route path="/prodect/:id"element={<Prodect />} />

        
      
      </Routes>
    </Router>
    
  )
}

export default App 