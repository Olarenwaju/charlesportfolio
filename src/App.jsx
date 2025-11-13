import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Parseat from "./pages/Parseat";
import Plugtent from "./pages/Plugtent";
import Starhomes from "./pages/Starhomes";
import Cashblast from "./pages/Cashblast";
import Custommailers from "./pages/Custommailers";
import Easypilot from "./pages/Easypilot";
import Contactme from "./pages/Contactme";
import Onijekuje from "./pages/Onijekuje";
import ScrollToTop from "./components/ScrollToTop";
import Hostrrr from "./pages/Hostrrr";


const App = () => {
  return (
    <div>
      
      <Router>
        <ScrollToTop /> 
        <Header />
        <Routes>

          <Route
            exact path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About/>}
          />

          <Route
            path="/parseat"
            element={<Parseat/>}
          />   

          <Route
            path="/plugtent"
            element={<Plugtent/>}
          />    

          <Route
            path="/starhomes"
            element={<Starhomes/>}
          />    

          <Route
            path="/cashblast"
            element={<Cashblast/>}
          />  

          <Route
            path="/custommailers"
            element={<Custommailers/>}
          />    

          <Route
            path="/easypilot"
            element={<Easypilot/>}
          />    
          
          <Route
            path="/onijekuje"
            element={<Onijekuje/>}
          />  

          <Route
            path="/hostrrr"
            element={<Hostrrr/>}
          />  

          <Route
            path="/contact"
            element={<Contactme/>}
          />    


        </Routes>
      </Router>
    </div>
    
  )
}

export default App;