import { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getLatestArticle } from "./components/latests";

const NewArticles = memo(() => {
  const [contents, setContents] = useState();

  useEffect(() => {
    (async () => {
      const content = await getLatestArticle(5);
      let body = [];
      for (let i = 0; i < content.length; i++) {
        const element = content[i];
        body.push(
          <li key={element._id}>
            <NavLink to={`/blog/${element._id}`}>{element.Title}</NavLink>
          </li>
        );

        setContents(body);
      }
      // fetch data from API or local storage by id
    })();
  }, []);
  return (
    <div className="card">
      <div className="card-header">新着記事</div>
      <div className="card-body">
        <ul>{contents}</ul>
      </div>
    </div>
  );
});

export default NewArticles;
