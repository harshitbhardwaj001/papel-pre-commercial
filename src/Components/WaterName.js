import "./WaterStyles.css";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
function WaterName() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  return (
    <>
      <div className="section">
        <motion.div
          ref={ref}
          className="text"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial={mainControls}
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1>What is your water name?</h1>
          <p>
            Ever Wonder if your water is just hydrating you or igniting a
            revolution within? Curiosity flows within us- Where does your water
            come from? How does it shape the world? Is it helping the
            environment? Is it bringing a change? If not. Change the way you
            drink.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          className="imgBox"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial={mainControls}
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img alt="image1" src="/assets/img/What.png" />
          {/* <img alt="image2" src="./assets/img/img1.jpg" /> */}
        </motion.div>
      </div>
    </>
  );
}

export default WaterName;
