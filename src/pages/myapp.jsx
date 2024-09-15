import { memo, useEffect, useState } from "react";

const Myapp = memo(() => {
  const [content, setContent] = useState();
  useEffect(() => {
    getApps().then((e) => {
      let list = [];
      for (let i of e) {
        list.push(<Card data={i} />);
      }
      setContent(list);
    });
  }, []);
  return (
    <div className="container" style={{ paddingTop: "4.5rem" }}>
      <div className="row">{content}</div>
    </div>
  );
});

const Card = memo(({ data }) => {
  return (
    <div className="card col-12 col-md-6 col-lg-4">
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.description}</p>
        <a href={data.url} className="btn btn-primary">
          詳細
        </a>
      </div>
    </div>
  );
});

const getApps = async () => {
  // fetch data from API
  const url = process.env.REACT_APP_CMSURL;
  const article = fetch(url + `/content/items/Software?&sort={_created:true}`)
    .then((data) => data.json())
    .catch(() => {
      return [];
    });
  const txt = await article;
  return txt;
};

export default Myapp;
