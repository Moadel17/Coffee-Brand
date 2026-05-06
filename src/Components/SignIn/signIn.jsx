import { useEffect, useRef, useContext } from "react";
import lottie from "lottie-web";
import "./signin.css";
import sign from "../../assets/animations/Login and Sign up.json";
import { Window } from "../../Context/windowWidth";

export default function SignIn() {
  const isWindow = useContext(Window);
  const animationRef = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationRef.current,
      animationData: sign,
      loop: true,
    });
  }, []);

  return (
    <section className="signin-section">
      <div
        className="sign-left"
        style={{ display: isWindow > 800 ? "block" : "none" }}>
        <div ref={animationRef} className="lottie" />
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
