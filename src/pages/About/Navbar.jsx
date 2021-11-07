import { useHistory } from "react-router-dom";

function Navbar({ activePage }) {
  let history = useHistory();

  function handleHome() {
    history.push("/");
  }

  function handleApp() {
    history.push("/about/about-app");
  }

  function handleAuthor() {
    history.push("/about/about-author");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav text-start ms-2">
            <div
              style={{ cursor: "pointer" }}
              onClick={handleHome}
              className="nav-link pe-5 py-3"
            >
              Home
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={handleApp}
              className={`nav-link pe-5 py-3 ${
                activePage === "App" ? "active" : ""
              }`}
              aria-current={activePage === "App" ? "page" : "page"}
            >
              About App
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={handleAuthor}
              className={`nav-link pe-5 py-3 ${
                activePage === "Author" ? "active" : ""
              }`}
              aria-current={activePage === "Author" ? "page" : ""}
            >
              About Author
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
