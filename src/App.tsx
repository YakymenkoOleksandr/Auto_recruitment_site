import style from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { PropagateLoader } from "react-spinners";
const MainPage = lazy(() => import("./pages/MainPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

function App() {
  return (
    <Suspense
      fallback={
        <div className={style.wrapperForLoader} >
          <PropagateLoader
            size={"15px"}
            color={"#3cc0ef"}
            speedMultiplier={0.5}
          />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
