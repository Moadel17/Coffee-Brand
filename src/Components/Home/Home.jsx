import { IoCartOutline } from "react-icons/io5";
import "./home.css";
import bg from "../../Coffee Shop Barista.json";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { Window } from "../../Context/windowWidth";
import lottie from "lottie-web";

export default function Home() {
  const isWindow = useContext(Window) || 0;
  const animationRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationRef.current,
      animationData: bg,
      loop: true,
      autoplay: true,
    });

    return () => anim.destroy(); // مهم عشان memory leak
  }, []);

  const homeLeft = (
    <div
      className="home-left"
      style={{
        textAlign: isWindow >= 953 ? "left" : "center",
        width: isWindow >= 953 ? "50%" : "100%",
      }}>
      <motion.h2
        initial={{ opacity: 0, y: -50, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.5, duration: 1 }}>
        Brew Your Morning with Coffee
      </motion.h2>

      <motion.p
        style={{
          fontSize:
            isWindow >= 859
              ? "20px"
              : isWindow > 755
                ? "18px"
                : isWindow > 688
                  ? "16px"
                  : "14px",
        }}
        initial={{ opacity: 0, y: -50, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.5, duration: 1 }}>
        Handpicked Beans, Crafted for You for the bold flavors and smooth
        experience.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.5, duration: 1 }}>
        <IoCartOutline /> Shop Now
      </motion.button>
    </div>
  );

  const homeRight = (
    <motion.div
      className="home-right"
      style={{
        width: isWindow >= 953 ? "50%" : "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ delay: 0.5, duration: 0.7, ease: "easeIn" }}>
      <div ref={animationRef} />
    </motion.div>
  );

  return (
    <section className="home">
      {homeLeft}
      {homeRight}
    </section>
  );
}
