import "./App.css";
import MainPage from "./pages/MainPage.tsx";
import NotFound from "./pages/NotFound.tsx"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
