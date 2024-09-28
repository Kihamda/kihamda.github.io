import { memo, useEffect, useState } from "react";
import { getLatestArticle } from "./components/latests";
import { NavLink } from "react-router-dom";
import HTMLReactParser from "html-react-parser/lib/index";

const BlogHome = memo(() => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    (async () => {
      // fetch data from API or local storage by id
      const content = await getLatestArticle(10);
      let body = [];
      for (let i = 0; i < content.length; i++) {
        const element = content[i];
        body.push(
          <div className="card mb-3">
            <div className="card-body">
              <NavLink to={`/blog/${element._id}`} className="noAtag">
                <h3>{element.Title}</h3>
                <p>{new Date(element._modified * 1000).toLocaleString()}</p>
                <p>{HTMLReactParser(element.Text.slice(0, 100))}</p>
              </NavLink>
            </div>
          </div>
        );
      }
      setArticles(body);
    })();
  }, []);

  return <>{articles}</>;
});

export default BlogHome;
