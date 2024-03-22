import { Link, useNavigate } from "react-router-dom";
import "./Css/login.css";
import { useState } from "react";
import swal from "sweetalert";

export default function Login() {

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  let Navigate = useNavigate();
  const formsubmit = (e) => {
    e.preventDefault();
      if (email.includes('@gmail.com')) {
        swal({
          title: "Done",
          icon: "success",
        });
        Navigate("/");
        let ath = document.getElementById("auth");
        ath.style.display = "none";
      } else {
        swal({
          title: "failed",
          icon: "error",
        });
      }
    console.log(email);
    console.log(password);
  };

  return (
    <>
      <div className="login-main mt-4">
        <div className="container  my-4 text-light  p-4" id="log-container">
          <h2 className="text-center  my-4 fw-bolder">Login</h2>
          <form onSubmit={formsubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>
            <Link className="text-black" to={"./signup"}>
              forget password
            </Link>
            <button type="submit" className="btn btn-dark w-100 my-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
