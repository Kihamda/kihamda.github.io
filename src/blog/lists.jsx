import { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NewArticles = memo(() => {
  const [contents, setContents] = useState();

  useEffect(() => {
    (async () => {
      // fetch data from API or local storage by id
      const content = await getLatestArticle();
      let body = [];
      for (let i = 0; i < content.length; i++) {
        const element = content[i];
        body.push(
          <li>
            <NavLink to={`/blog/${element._id}`}>{element.Title}</NavLink>
          </li>
        );
      }
      setContents(body);
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

const getLatestArticle = async () => {
  const url = process.env.REACT_APP_CMSURL;
  const article = fetch(
    url + `/content/items/Articles?limit=5&sort={_created:true}`
  )
    .then((data) => data.json())
    .catch(() => {
      return { Text: "<h1>Not Found</h1>" };
    });
  const txt = await article;
  return txt;
};

export default NewArticles;
