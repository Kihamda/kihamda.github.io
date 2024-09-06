import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";

const Article = () => {
  const locate = useLocation();
  const id = locate.pathname.slice(6);
  const [contents, setContents] = useState();

  useEffect(() => {
    (async () => {
      console.log("useEffect in Article");
      // fetch data from API or local storage by id
      const [content, extra] = await getArticle(id);
      setContents(content);
    })();
  }, [locate]);

  console.log(id);
  return <Markdown>{contents}</Markdown>;
};
const BlogList = () => {
  return <p>BLOG LIST</p>;
};

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

export { Article, BlogList, getArticle };
