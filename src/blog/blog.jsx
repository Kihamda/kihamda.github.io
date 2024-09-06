import { Route, Routes } from "react-router-dom";
import { Article, BlogList } from "./article";

const Blog = () => {
  return (
    <div style={{ paddingTop: "4.5rem" }}>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8 col-12">
            <div className="card">
              <div className="card-body">
                <Routes>
                  <Route path="/" element={<BlogList />} />
                  <Route path="/:id" element={<Article />} />
                </Routes>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-none d-lg-block">
            <div className="card">
              <div className="card-header">記事一覧</div>
              <div className="card-body">
                <ul>
                  <li>
                    <a href="#">記事1</a>
                  </li>
                  <li>
                    <a href="#">記事2</a>
                  </li>
                  <li>
                    <a href="#">記事3</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
