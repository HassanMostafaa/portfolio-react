import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { AboutPage } from "./pages/AboutPage";
import { Home } from "./pages/Home";
import { ProjectsPage } from "./pages/ProjectsPage";

function App() {
  return (
    <div className="App">
      {/* pages */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
