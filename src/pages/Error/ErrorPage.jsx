import { useHistory } from "react-router-dom";
// import styles from "./ErrorPage.module.css";
import error from "./errors.png";

export default function NotFound() {
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };
  return (
    <div className="position-absolute start-50 translate-middle-x">
      <img src={error} alt="error" />
      <h1 className="fw-light m-3">Page Not Found</h1>
      <button onClick={goHome} className="btn btn-primary">
        Return to Home
      </button>
    </div>
  );
}
