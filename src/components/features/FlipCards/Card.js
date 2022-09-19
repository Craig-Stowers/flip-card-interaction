import styles from "./Card.module.css";
import frontFaceStyles from "./CardFaceFront.module.css";
import { useEffect, useState } from "react";
import FlipCard from "../../ui/FlipCard";
import CardFaceBack from "./CardFaceBack";
import CardFaceFront from "./CardFaceFront";

const Card = (props) => {
   const { id, front, back, disabled, completed } = props.data;
   const [isDisabled, setDisabled] = useState(true);

   useEffect(() => {
      let disabledState = disabled;
      let timer = setTimeout(() => {
         setDisabled(disabledState);
      }, 130);
      return () => {
         if (timer) clearTimeout(timer);
      };
   }, [disabled]);

   const handleFlipComplete = (isFlipped) => {
      if (isFlipped) props.onCardComplete(id);
   };

   return (
      <div className={styles.outerWrapper}>
         <div
            className={`${styles.innerWrapper} ${
               frontFaceStyles.innerWrapper
            } ${isDisabled ? styles.disabled : ""}`}
         >
            <FlipCard
               disabled={isDisabled}
               front={
                  <CardFaceFront
                     title={front.title}
                     image={front.asset}
                     completed={completed}
                     active={!isDisabled}
                  />
               }
               back={
                  <CardFaceBack
                     image={back.asset}
                     completed={completed}
                     title={back.title}
                     description={back.description}
                  />
               }
               onFlipComplete={handleFlipComplete}
            />
         </div>
      </div>
   );
};

export default Card;
