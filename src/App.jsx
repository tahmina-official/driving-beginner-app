import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./pages/Dashboard";
import DrivingGuide from "./pages/DrivingGuide";
import MockExam from "./pages/MockExam";
import PracticeMode from "./pages/PracticeMode";
import RoadSigns from "./pages/RoadSigns";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("dmv-dark-mode", false);

  return (
    <div className={darkMode ? "app app--dark" : "app"}>
      <BrowserRouter>
        <Navbar dark={darkMode} setDark={setDarkMode} />

        <main className="page-shell">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/guide" element={<DrivingGuide />} />
            <Route path="/practice" element={<PracticeMode />} />
            <Route path="/signs" element={<RoadSigns />} />
            <Route path="/exam" element={<MockExam />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
