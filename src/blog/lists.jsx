import { NavLink } from "react-router-dom";

const NewArticles = () => {
  return (
    <div className="card">
      <div className="card-header">新着記事</div>
      <div className="card-body">
        <ul>
          <li>
            <NavLink to={"/blog/ba28e36a39373946670000d6"}>記事１</NavLink>
          </li>
          <li>
            <NavLink to={"/blog/2"}>記事２</NavLink>
          </li>
          <li>
            <NavLink to={"/blog/3"}>記事3</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NewArticles;
