import { Route, Routes } from "react-router-dom";
import { Article } from "./article";
import NewArticles from "./lists";
import BlogHome from "./bloghome";

const Blog = () => {
  return (
    <div style={{ paddingTop: "4.5rem" }}>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8 col-12">
            <div className="card">
              <Routes>
                <Route path="/" element={<BlogHome />} />
                <Route path="/:id" element={<Article />} />
              </Routes>
            </div>
          </div>
          <div className="col-md-4 d-none d-lg-block">
            <NewArticles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
