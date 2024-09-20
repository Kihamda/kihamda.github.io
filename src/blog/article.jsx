import parse from "html-react-parser";
import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Comment from "./comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Article = memo(() => {
  const locate = useLocation();
  const id = locate.pathname.slice(6);
  const [contents, setContents] = useState();

  useEffect(() => {
    (async () => {
      // fetch data from API or local storage by id
      const content = await getArticle(id);
      setContents(content);
    })();
  }, [id]);

  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          {contents ? (
            <>
              <h1>{contents.Title}</h1>
              {parse(contents.Text)}
            </>
          ) : (
            "Loading"
          )}
        </div>
        <div className="card-footer d-flex">
          <span className="me-auto">
            <FontAwesomeIcon icon={faPenToSquare} />
            {contents
              ? " " + new Date(contents._created * 1000).toDateString()
              : ""}
          </span>
          <span>共有：</span>
          <a
            href={`http://twitter.com/share?url=kihamda.github.io${locate.pathname}&text= - Kihamda&via=code_kihamda`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </div>
      <Comment id={id} />
    </>
  );
});

const getArticle = async (id) => {
  const url = process.env.REACT_APP_CMSURL;
  const article = fetch(url + `/content/item/Articles/${id}`)
    .then((data) => data.json())
    .catch(() => {
      return { Text: "<h1>Not Found</h1>" };
    });
  const txt = await article;
  return txt;
};

export { Article };
