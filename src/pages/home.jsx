import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  return (
    <>
      <Helmet>
        <title>Kihamda - HOME</title>
      </Helmet>
      <style type="text/css">
        {"#header{background-color:transparent !important;}"}
      </style>
      <div
        className="d-grid align-content-center justify-content-center vh-100"
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent, #56A3A688, transparent)",
        }}
      >
        <div className="d-flex text-center flex-column justify-content-center">
          <img
            src="icon.webp"
            alt="My Logo"
            style={{
              width: "50%",
              height: "auto",
              borderRadius: "20px",
              filter: "drop-shadow(0 0 2px rgba(0, 0, 0, 0.5))",
            }}
            className="mb-3 align-self-center"
          />
          <h3>KIHAMDA</h3>
          <p>Fullstack Developer/High School Student</p>
          <p>
            趣味でゲーム開発やWeb技術の勉強をしています
            <br />
            詳しくは下のボタンから
          </p>
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
