import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { AboutPage } from "./pages/AboutPage";
import { Home } from "./pages/Home";
import { ProjectsPage } from "./pages/ProjectsPage";
import { Certificates } from "./components/Certificates";

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
          <Route
            path="/certificates"
            element={
              <div className="landing-page">
                <Certificates slice={false} />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
