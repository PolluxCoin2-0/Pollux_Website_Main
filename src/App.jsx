import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import Footer from "./layout/Footer";

const Home = lazy(() => import("./pages/Home"));

const LoadingScreen = () => {
  return (
    <div>Loading...</div>
  );
};
function App() {
  const [footerVisible, setFooterVisible] = useState(false);

  const handleHomeLoad = () => {
    setTimeout(() => {
      setFooterVisible(true);
    }, 2000); // Set footer visibility after 2 seconds
  };

  return (
    <div className="bg-[#10022B]">
      <Router>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home onLoad={handleHomeLoad} />} />
          </Routes>
        </Suspense>
        {footerVisible && <Footer />}
      </Router>
    </div>
  );
}

export default App;
