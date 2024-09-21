import { useState, memo, useEffect } from "react";

const Comment = memo(({ id }) => {
  const [name, setName] = useState();
  const [text, setText] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      const url = process.env.REACT_APP_CMSURL;
      const response = await fetch(
        url + `/content/items/Comment?filter={"link._id":"${id}"}`
      );
      const data = await response.json();
      let tmp = [];
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        tmp.push(
          <div className="list-group-item" key={element._id}>
            <h5 className="mb-3">
              {i + 1} : 「{element.name}」さん
            </h5>
            <p style={{ whiteSpace: "pre" }}>{element.body}</p>
          </div>
        );
      }
      setComments(tmp);
    })();
  }, [id]);

  const send = async () => {
    const url = process.env.REACT_APP_CMSURL;
    if (name && text) {
      const sendto = fetch(url + "/content/item/Comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            body: text,
            name: name,
            link: { _model: "Articles", _id: id },
          },
        }),
      });
      // 入力をクリアする
      setName("");
      setText("");
    }
  };
  return (
    <div className="card">
      <div className="card-header">
        <span>コメント欄</span>
      </div>
      <div className="card-body">
        <div className="accordion mb-3">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                type="button"
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                新規コメント
              </button>
            </h2>
            <div className="accordion-collapse collapse" id="flush-collapseOne">
              <div className="accordion-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="commentAuthor" className="form-label">
                      表示名
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="commentAuthor"
                      required
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="commentText" className="form-label">
                      コメント内容
                    </label>
                    <textarea
                      className="form-control"
                      id="commentText"
                      rows="3"
                      required
                      value={text}
                      onChange={(event) => setText(event.target.value)}
                    ></textarea>
                  </div>
                  <button onClick={() => send()} className="btn btn-primary">
                    投稿
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="list-group">{comments}</div>
      </div>
    </div>
  );
});

export default Comment;
