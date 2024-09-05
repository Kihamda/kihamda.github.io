import { useLocation } from "react-router-dom";

const Article = () => {
  const locate = useLocation();
  const id = locate.pathname.slice(6);
  console.log(id);
};
const BlogList = () => {
  return <p>BLOG LIST</p>;
};
export { Article, BlogList };
