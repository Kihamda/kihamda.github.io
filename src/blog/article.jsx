import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";

const Article = memo(() => {
  const locate = useLocation();
  const id = locate.pathname.slice(6);
  const [contents, setContents] = useState();
  const [extras, setExtras] = useState([]);

  useEffect(() => {
    (async () => {
      // fetch data from API or local storage by id
      const [content, extra] = await getArticle(id);
      setContents(content);
      setExtras(extra);
    })();
  }, [locate]);

  return (
    <>
      <div className="card-body">
        <Markdown>{contents}</Markdown>
      </div>
      <div className="card-footer d-flex">
        <span className="me-auto">作成日時：{extras.created_at}</span>
        <span>共有：</span>
        <a
          href={`http://twitter.com/share?url=kihamda.github.io${locate.pathname}&text=${extras.title} - Kihamda&via=code_kihamda`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter(旧X)
        </a>
      </div>
    </>
  );
});

const getArticle = async (id) => {
  const article = fetch(
    `https://kihamda.github.io/blogcms/articles/${id}/text.md`
  ).then((data) => {
    return data.text();
  });
  const extra = fetch(
    `https://kihamda.github.io/blogcms/articles/${id}/extra.json`
  ).then((data) => {
    return data.json();
  });

  const txt = await article;
  const ext = await extra;
  return [txt, ext];
};

export { Article, getArticle };
