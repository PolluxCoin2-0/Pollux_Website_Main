import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./layout/Footer";

function App() {

  return (
    <div className="bg-[#10022B]">
     <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
     </Router>
    </div>
  )
}

export default App
