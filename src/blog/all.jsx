import { useEffect, useState } from "react";
import { getLatestArticle } from "./components/latests";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    (async () => {
      const list = await getLatestArticle();
      let article = [];
      for (let i = 0; i < list.length; i++) {
        const element = list[i];
        article.push(
          <tr key={element._id}>
            <td>{element.Title}</td>
            <td>
              {new Date(element._modified * 1000)
                .toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
                .replaceAll("-", "/")}
            </td>
          </tr>
        );
      }

      setArticles(article);
    })();
  }, []);
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h3>すべての記事</h3>
        <table className="table table-striped ">
          <thead>
            <tr>
              <th>記事タイトル</th>
              <th>作成日</th>
            </tr>
          </thead>
          <tbody>{articles}</tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArticles;
