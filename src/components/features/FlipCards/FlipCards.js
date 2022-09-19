import { useEffect, useState } from "react";
import Card from "./Card"

const FlipCards = ({cards, onAllCardsComplete}) => {
   const [cardData, setCardData] = useState([]);

   // copy and extend the data provided by JSON file
   useEffect(() => {
      const extendedData = cards.map((card, i) => {
         return {
            ...card,
            disabled: i === 0 ? false : true,
            completed: false,
         };
      });
      setCardData(extendedData);
   }, [cards]);

   // check all cards complete after every interaction
   useEffect(() => {
      if(!cardData.length)return;
      const isCompleted = cardData.every((e) => e.completed);
      isCompleted && onAllCardsComplete();
   }, [cardData, onAllCardsComplete]);

   // complete card after flip and unlock next card
   const handleCardFlipComplete = (index) => {
      //fix json index
      const arrIndex = index - 1;
      const newCardData = [...cardData];
      newCardData[arrIndex] = {
         ...cardData[arrIndex],
         completed: true,
      };

      if (arrIndex < cardData.length - 1) {
         newCardData[arrIndex + 1] = {
            ...cardData[arrIndex + 1],
            disabled: false,
         };
      }
      setCardData(newCardData);
   };

   return (
      <div style={{}}>
         {cardData.map((card) => {
            return (
               <Card
                  data={card}
                  key={"card" + card.id}
                  onCardComplete={handleCardFlipComplete}
               />
            );
         })}
      </div>
   );
};

export default FlipCards;
