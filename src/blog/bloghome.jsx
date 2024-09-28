import { memo, useEffect, useState } from "react";
import { getLatestArticleWithBody } from "./components/latests";
import { NavLink } from "react-router-dom";
import HTMLReactParser from "html-react-parser/lib/index";
import { Helmet } from "react-helmet";

const BlogHome = memo(() => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    (async () => {
      // fetch data from API or local storage by id
      const content = await getLatestArticleWithBody(10);
      let body = [];
      for (let i = 0; i < content.length; i++) {
        const element = content[i];
        body.push(
          <div className="card mb-3">
            <div className="card-body">
              <NavLink to={`/blog/${element._id}`} className="noAtag">
                <h3>{element.Title}</h3>
                <p>
                  {new Date(element._modified * 1000)
                    .toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .replaceAll("-", "/")}
                </p>
                <p>{HTMLReactParser(element.Text.slice(0, 100))}</p>
              </NavLink>
            </div>
          </div>
        );
      }
      setArticles(body);
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>Kihamda - ブログホーム</title>
      </Helmet>
      {articles}
      <div className="d-grid gap-2">
        <span className="text-center">
          最新の{articles.length}件を表示しています
        </span>
        <NavLink to="/blog/all" className="btn btn-primary">
          すべての記事を表示
        </NavLink>
      </div>
    </>
  );
});

export default BlogHome;
