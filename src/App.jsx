import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Blog from "./blog/blog";
import About from "./pages/about";
import Myapp from "./pages/myapp";
import NotFound from "./pages/notfound";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="myapp" element={<Myapp />} />
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
