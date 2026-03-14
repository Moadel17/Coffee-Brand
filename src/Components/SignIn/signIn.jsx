import Lottie from "lottie-react";
import "./signin.css";
import sign from "../../../public/animations/Login and Sign up.json";
import { useContext } from "react";
import { Window } from "../../Context/windowWidth";

export default function SignIn() {
  const isWindow = useContext(Window);

  return (
    <section className="signin-section">
      <div
        className="sign-left"
        style={{ display: isWindow > 800 ? "block" : "none" }}>
        <Lottie className="lottie" animationData={sign} />
      </div>

      <div
        className="sign-right"
        style={{ width: isWindow > 800 ? "50%" : "100%" }}>
        <h3>Sign Up For An Instant</h3>
        <h5>%15 Discount</h5>
        <p>on your first order</p>
        <div className="form-fill">
          <input type="email" placeholder="Enter Your Email" />
          <button>Shop Now</button>
        </div>
      </div>
    </section>
  );
}
