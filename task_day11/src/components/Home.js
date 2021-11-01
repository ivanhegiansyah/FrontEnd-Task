import logo from "../img/logo-ALTA.png";
import profile from "../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
function Home() {
  return (
    <div>
      <nav
        className="navbar sticky-top navbar-expand-xl navbar-light"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <img
            src={logo}
            alt=""
            width="100.75"
            className="d-inline-block align-text-top"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarLight"
            aria-controls="navbarLight"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse show" id="navbarLight">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link active" href="index.html">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  EXPERIENCE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact_us.html">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluids">
        <div className="row align-items-center justify-content-center isi">
          <div className="col-4">
            <div className="text-center">
              <img
                alt="cewek"
                className="rounded-circle img-prof"
                width={355}
                src={profile}
              />
            </div>
          </div>
          <div className="col-6 content">
            <h4>Hi, my name is</h4>
            <h1 className="fw-bold display-1">Anne Sullivan</h1>
            <h2>I build things for the web</h2>
            <a
              className="btn btn-primary rounded-pill"
              id="btn-orange"
              href="contact_us.html"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
