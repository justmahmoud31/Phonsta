import { Link } from "react-router-dom";
import "./Css/login.css";
import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";

export default function Login() {
  const [account, setaccount] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const formsubmit = (e) => {
    e.preventDefault();
    axios.get("http://localhost:3000/accounts").then((data) => {
      setaccount(data.data);
    });

    for (let i = 0; i < account.length; i++) {
      if (account[i].password === password) {
        swal({
          title: "Done",
          icon: "success",
        });
      } else {
        swal({
          title: "failed",
          icon: "error",
        });
      }
    }
    console.log(account);
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
