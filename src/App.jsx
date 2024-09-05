import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Blog from "./blog/blog";

function App() {
  return (
    <div className="App" data-bs-theme="auto">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
