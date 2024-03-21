import "./Css/Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  // const fixednavbar = document.getElementById("navbarfixed");
  // if (fixednavbar.style.top > 0) {
  //   fixednavbar.style.backgroundColor = "#eee";
  // }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        id="navbarfixed"
      >
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand fw-bolder fs-4" href="#">
            Phonesita
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-2 fw-bold">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"./explore"}>
                  Explore
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"./contact"}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="ms-auto" id="auth">
              <Link className="btn btn-outline-dark mx-1" to={"./login"}>
                Login
              </Link>
              <Link className="btn btn-dark mx-1" to={"./signup"}>
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
