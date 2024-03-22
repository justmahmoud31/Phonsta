import { Link } from "react-router-dom";
import "./Css/Hero.css";
export default function Hero() {
  return (
    <>
      <div className="Hero-container">
        <div className="container">
           <div className="hero-main-text">
           <div className="hero-header">
            <h1 className="text-center fw-bolder">Welcome To Your Place</h1>
            </div>
            <div className="hero-text">
                <p className="text-center fw-bold">Here You can Find Every thing you wish for just click</p>
            </div>
            <div className="hero-buttons text-center">
                <Link to={'/explore'} className="btn btn-outline-dark mx-1 fw-bold">See More</Link>
                <Link to={'./contact'} className="btn btn-dark mx-1 dw-bold">Know how to pay</Link>
            </div>
           </div>
        </div>
      </div>
    </>
  );
}
