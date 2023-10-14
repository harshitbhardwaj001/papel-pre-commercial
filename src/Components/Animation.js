import "./Animation.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Animation() {
  const containerRef = useRef(null);
  useEffect(() => {
    console.log("Animation Mounted");
    const container = containerRef.current;
    if (container) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container, // Use the container ref here
          start: "50% 50%",
          end: "100% 50%",
          scrub: 2,
          pin: true,
        },
      });
      tl.to(
        ".top",
        {
          top: "-60%",
        },
        "a",
      ).to(
        ".bottom",
        {
          bottom: "-60%",
        },
        "a",
      );
    }

    return () => {
      console.log("Animation Unmounted");
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <div>
      {/* <div className="main-p"></div> */}
      <div className="main" ref={containerRef} id="about">
        <div className="top">
          <h1 className="top-h">Papel is...</h1>
        </div>
        <div className="center">
          <img alt="" src="./assets/img/recycle_illustration.svg" />
          <h2>
            <span className="blue">India’s first carton bottles which are</span>{" "}
            <span className="black">100% recyclable.</span>
          </h2>
        </div>
        <div className="bottom">
          <h1 className="bottom-h">Papel is...</h1>
        </div>
      </div>
    </div>
  );
}

export default Animation;
