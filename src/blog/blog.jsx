import { Route, Routes } from "react-router-dom";
import { Article } from "./article";
import NewArticles from "./lists";
import BlogHome from "./bloghome";
import AllArticles from "./all";

const Blog = () => {
  return (
    <div style={{ paddingTop: "4.5rem" }}>
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-md-8 col-12 mb-3">
            <Routes>
              <Route path="/" element={<BlogHome />} />
              <Route path="/:id" element={<Article />} />
              <Route path="/all" element={<AllArticles />} />
            </Routes>
          </div>
          <div className="col-md-4 col-12">
            <NewArticles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
