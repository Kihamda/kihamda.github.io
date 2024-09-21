import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate();
  return (
    <div className="d-grid align-content-center justify-content-center vh-100">
      <div className="d-flex text-center flex-column justify-content-center">
        <h3>NotFound</h3>
        <p>該当するURLのページは見つかりませんでした</p>

        <div className="d-flex justify-content-center">
          <button className="btn btn-secondary me-1" onClick={() => nav("/")}>
            HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
