import { IoCartOutline } from "react-icons/io5";
import "./home.css";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import { Window } from "../../Context/windowWidth";

export default function Home() {
  const isWindow = useContext(Window);
  const [animationData, setAnimationData] = useState(null);

  // ✅ تحميل اللوتي من public
  useEffect(() => {
    fetch("/animations/Coffee Shop Barista.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <section className="home">
      {/* LEFT */}
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

      {/* RIGHT */}
      <motion.div
        className="home-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}>
        {animationData && (
          <Lottie
            animationData={animationData}
            loop
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </motion.div>
    </section>
  );
}
