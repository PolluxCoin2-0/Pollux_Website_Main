import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Footer from "./layout/Footer";

const Home = lazy(() => import("./pages/Home"));

const LoadingScreen = () => {
  return (
    <div>Loading...</div>
  );
};

function App() {
  return (
    <div className="bg-[#10022B]">
      <Router>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;