import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="d-grid justify-content-center align-content-center vh-100">
      <div className="d-flex flex-column text-center">
        <h3>Contact</h3>
        <span className="d-flex justify-content-center noAtag">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="me-1 flex-wrap align-self-center"
          />
          work@kihamda.net
        </span>
      </div>
      <a
        href="https://x.com/code_kihamda"
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex justify-content-center noAtag"
      >
        <FontAwesomeIcon
          icon={faXTwitter}
          className="me-1 flex-wrap align-self-center"
        />
        @code_kihamda
      </a>
    </div>
  );
};

export default Contact;
