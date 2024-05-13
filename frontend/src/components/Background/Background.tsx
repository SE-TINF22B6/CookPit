import { useEffect } from "react";
import "../Background/Background.css";

export default function Background() {
  useEffect(() => {
    const handleResize = () => {
      const winWidth = window.innerWidth;
      const bgWrapper = document.getElementById("background_wrapper");

      //default width of pillar
      let pillarWidth = 130;

      if (winWidth <= 401) {
        pillarWidth = 76;
      } else if (winWidth <= 768) {
        pillarWidth = 100;
      } else if (winWidth <= 1024) {
        pillarWidth = 110;
      } else if (winWidth <= 1440) {
        pillarWidth = 120;
      }

      let numOfPillar = Math.ceil(winWidth / pillarWidth);

      while (bgWrapper?.firstChild) {
        bgWrapper.removeChild(bgWrapper.firstChild);
      }

      for (let index = 0; index < numOfPillar; index++) {
        const div = document.createElement("div");
        div.className = "oval";
        bgWrapper?.appendChild(div);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div id="background_wrapper"></div>;
}
