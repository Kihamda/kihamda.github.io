import { memo, useEffect, useState } from "react";
import parse from "html-react-parser";

const About = memo(() => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    (async () => {
      // fetch data from API
      const url = process.env.REACT_APP_CMSURL;
      const article = fetch(url + `/content/items/about?&sort={order:1}`)
        .then((data) => data.json())
        .catch(() => {
          return [];
        });
      const txt = await article;
      let list = [];
      for (let i of txt) {
        list.push(
          <div
            className="d-flex flex-wrap vh-100 justify-content-center align-content-center"
            style={{
              borderBottom: i === txt[txt.length - 1] ? "" : "0.3rem dotted",
            }}
          >
            <div className="w-100">{parse(i.content)}</div>
          </div>
        );
      }
      setContent(list);
    })();
    return () => {
      // cleanup
    };
  }, []);
  return <div className="container">{content}</div>;
});

export default About;
