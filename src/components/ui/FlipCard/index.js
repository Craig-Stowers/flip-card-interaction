import { useState, useRef } from "react";
import classes from "./FlipCard.module.css";

const FlipCard = ({ front, back, onFlipComplete, disabled }) => {
   const innerRef = useRef(null);
   const [isFlipped, setFlipped] = useState(false);
  
   const handleTransitionEnd = (e) => {
      if (e.target !== innerRef.current) return;
      onFlipComplete(isFlipped);
   };

   const handleClick = () => {
      if (disabled) return;
      setFlipped(!isFlipped);
   };

   return (
      <div className={classes.outer} onClick={handleClick}>
         <div
            ref={innerRef}
            onTransitionEnd={handleTransitionEnd}
            className={classes.inner}
            style={{ transform: `rotateY(${isFlipped ? 180 : 0}deg)` }}
         >
            <div className={classes.front}>{front}</div>
            <div className={classes.back}>{back}</div>
         </div>
      </div>
   );
};

export default FlipCard;
