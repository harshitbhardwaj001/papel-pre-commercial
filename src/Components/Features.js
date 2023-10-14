import "./FeatureStyles.css";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Features(props) {
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
      <div key={props.id} className={props.section}>
        <img alt="" src={props.imgSrc} className={props.imgName} />
        <motion.div
          ref={ref}
          className="text1"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
          }}
          initial={mainControls}
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>{props.desc}</p>
          <h2>{props.title}</h2>
        </motion.div>
      </div>
    </>
  );
}

export default Features;
