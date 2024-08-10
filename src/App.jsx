import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Parseat from "./pages/Parseat";



const App = () => {
  return (
    <div> 
      <Router>
        <Header />
        <Routes>

          <Route
            index
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

        </Routes>
      </Router>
    </div>
    
  )
}

export default App;