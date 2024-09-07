import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  return (
    <>
      <div
        className="d-grid align-content-center justify-content-center vh-100"
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent, #56A3A688, transparent)",
        }}
      >
        <div className="d-flex text-center flex-column justify-content-center">
          <h3>KIHAMDA</h3>
          <p>Fullstack Developer/High School Student</p>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-secondary me-1"
              onClick={() => nav("/about")}
            >
              ABOUT
            </button>
            <button
              className="btn btn-secondary ms-1"
              onClick={() => nav("/blog")}
            >
              BLOG
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
