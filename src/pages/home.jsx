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
        <div className="d-flex text-center flex-column">
          <h3>KIHAMDA</h3>
          <p>Fullstack Developer</p>
          <button className="btn btn-secondary" onClick={() => nav("/about")}>
            ABOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
