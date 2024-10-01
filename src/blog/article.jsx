import parse from "html-react-parser";
import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Comment from "./comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowsRotate,
  faArrowUpFromBracket,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { Helmet } from "react-helmet";

const Article = memo(() => {
  const locate = useLocation();
  const [id, setId] = useState(locate.pathname.slice(6));
  const [contents, setContents] = useState();
  useEffect(() => {
    setId(locate.pathname.slice(6));
  }, [locate]);

  useEffect(() => {
    (async () => {
      // fetch data from API or local storage by id
      const content = await getArticle(id);
      setContents(content);
    })();
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{contents?.Title + " - Kihamda"}</title>
        <meta property="og:title" content={contents?.Title} />
        <meta property="og:description" content={contents?.Text} />
        <meta
          property="og:url"
          content={`https://kihamda.github.io${locate.pathname}`}
        />
      </Helmet>
      <div className="card mb-3">
        <div className="card-body">
          {contents ? (
            <>
              <h1>{contents.Title}</h1>
              {parse(contents.Text, {
                replace: (domNode) => {
                  if (domNode.name === "img") {
                    return (
                      <img
                        src={"https://cms.kihamda.net" + domNode.attribs.src}
                        alt={domNode.attribs.alt}
                        width="100%"
                      />
                    );
                  }
                  return domNode;
                },
              })}
            </>
          ) : (
            "Loading"
          )}
        </div>
        <div className="card-footer d-flex">
          <div className="d-flex me-auto flex-wrap">
            <span className="me-3">
              <FontAwesomeIcon icon={faPenToSquare} />
              {contents
                ? " " +
                  new Date(contents._created * 1000)
                    .toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .replaceAll("-", "/")
                : ""}
            </span>
            <span>
              <FontAwesomeIcon icon={faArrowsRotate} />
              {contents
                ? " " +
                  new Date(contents._modified * 1000)
                    .toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .replaceAll("-", "/")
                : ""}
            </span>
          </div>

          <span>
            <FontAwesomeIcon icon={faArrowUpFromBracket} />：
          </span>
          <a
            href={`http://x.com/share?url=kihamda.net${locate.pathname}&text= - Kihamda&via=code_kihamda`}
            target="_blank"
            rel="noopener noreferrer"
            className="noAtag me-2"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <span
            onClick={() => {
              navigator.clipboard.writeText(`kihamda.net${locate.pathname}`);
            }}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faClipboard} />
          </span>
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
