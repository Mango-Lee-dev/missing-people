import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Report } from "./pages/report";
import { Search } from "./pages/search";
import { Resources } from "./pages/resources";
import { SuccessStories } from "./pages/success-stories";
import { Layout } from "./components/layout";
import { Login } from "./pages/login";
import { Analysis } from "./pages/analysis";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/search" element={<Search />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
