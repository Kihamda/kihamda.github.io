import { Route, Routes } from "react-router-dom";
import { Article, BlogList } from "./article";

const Blog = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3 d-none d-lg-block">
            <h2>カテ��リー</h2>
            <ul>
              <li>
                <a href="#">カテ��リー1</a>
              </li>
              <li>
                <a href="#">カテ��リー2</a>
              </li>
              <li>
                <a href="#">カテ��リー3</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-12">
            <Routes>
              <Route path="/" element={<BlogList />} />
              <Route path="/:id" element={<Article />} />
            </Routes>
          </div>
          <div className="col-md-3 d-none d-lg-block">
            <h2>カテ��リー</h2>
            <ul>
              <li>
                <a href="#">カテ��リー1</a>
              </li>
              <li>
                <a href="#">カテ��リー2</a>
              </li>
              <li>
                <a href="#">カテ��リー3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
