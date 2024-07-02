import { lazy, Suspense } from "react";

const Frame1 = lazy(() => import("../components/Home/Frame1"));
const Frame2 = lazy(() => import("../components/Home/Frame2/Frame2"));
const Frame3 = lazy(() => import("../components/Home/Frame3/Frame3"));
const Frame4 = lazy(() => import("../components/Home/Frame4"));
const Frame5 = lazy(() => import("../components/Home/Frame5/Frame5"));
const Frame6 = lazy(() => import("../components/Home/Frame6"));
const Frame7 = lazy(() => import("../components/Home/Frame7/Frame7"));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </Suspense>
  );
}

export default Home;
