const Comment = ({ id }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span>コメント欄</span>
      </div>
      <div className="card-body">
        <p>コメントを��してみまし��う</p>
        <form>
          <div className="mb-3">
            <label htmlFor="commentText" className="form-label">
              コメント内容
            </label>
            <textarea
              className="form-control"
              id="commentText"
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            コメントする
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comment;
