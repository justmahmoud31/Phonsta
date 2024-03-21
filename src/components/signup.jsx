import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
export default function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let Navigate = useNavigate();
  const formsubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/accounts", {
      name,
      email,
      password,
    });
    swal({
      title: "Done",
      icon: "success",
    });
    Navigate("/");
    let ath = document.getElementById("auth");
    ath.style.display = "none";
  };
  return (
    <>
      <div className="login-main mt-4">
        <div className="container  my-4 text-light  p-4" id="log-container">
          <h2 className="text-center  my-4 fw-bolder">Sign Up</h2>
          <form onSubmit={formsubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label ">
                Name
              </label>
              <input
                type="text"
                className="form-control my-2"
                id="name"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              ></input>
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
