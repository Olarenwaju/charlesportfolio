import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Parseat from "./pages/Parseat";
import Plugtent from "./pages/Plugtent";



const App = () => {
  return (
    <div> 
      <Router>
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

        </Routes>
      </Router>
    </div>
    
  )
}

export default App;