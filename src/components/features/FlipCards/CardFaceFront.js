import { useState, useEffect } from "react";
import cardFaceStyles from "./CardFace.module.css";
import frontStyles from "./CardFaceFront.module.css";
import TickIcon from "./TickIcon";

const CardFaceFront = ({ title, active, image, completed }) => {
   //control css classes with state: disabled, starting, idle, active
   const [cardState, setCardState] = useState("disabled");

   useEffect(() => {
      if (active) {
         setCardState("starting");
      }
   }, [active]);

   return (
      <div
         className={`${cardFaceStyles.cardFaceWrapper} ${frontStyles.wrapper}`}
      >
         <div className={cardFaceStyles.cardFace}>
            <TickIcon completed={completed} />
            <div className={`${frontStyles.circleWrapper}`}>
               <div
                  className={`${frontStyles.circle} ${frontStyles[cardState]}`}
                  onAnimationEnd={(e) => {
                     if (cardState === "starting") {
                        //css animations require time between classes so prior animation doesnt interfere transition
                        setCardState("idle");
                        setTimeout(() => {
                           setCardState("active");
                        }, 10);
                     }
                  }}
               >
                  <img src={image} alt={`${title} graphic`}/>
               </div>
            </div>
            <div
               className={`${frontStyles.term} ${
                  cardState !== "disabled" ? frontStyles.active : ""
               }`}
            >
               <h2>{title}</h2>
            </div>
         </div>
      </div>
   );
};

export default CardFaceFront;
