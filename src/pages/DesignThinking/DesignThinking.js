import styles from "./DesignThinking.module.css";
import { useEffect, useState } from "react";
import IsLoadingHOC from "../../components/helpers/IsLoadingHOC";
import useAllImagesLoaded from "../../hooks/useAllImagesLoaded";
import FlipCards from "../../components/features/FlipCards/FlipCards";
import Banner from "../../components/features/Banner/Banner";

const DesignThinking = ({ data, isLoading, setLoading }) => {
   const [wrapper, imagesLoaded] = useAllImagesLoaded();
   const [allCardsComplete, setAllCardsComplete] = useState(false);

   useEffect(() => {
      if (imagesLoaded) setLoading(false);
   }, [imagesLoaded, setLoading]);

   const handleAllCardsComplete = () => {
      setAllCardsComplete(true);
   };

   if (!data) return <></>;
   return (
      <div
         ref={wrapper}
         className={`${styles.wrapper} ${!isLoading && styles.show}`}
      >
         <Banner data={data.introductionContent} bannerStyle={"introduction"} />
         <div className={styles.moduleWrapper}>
            <FlipCards
               cards={data.flipCards}
               onAllCardsComplete={handleAllCardsComplete}
            />
         </div>
         <Banner
            data={data.conclusionContent}
            bannerStyle={"conclusion"}
            visible={allCardsComplete}
         />
      </div>
   );
};

export default IsLoadingHOC(DesignThinking);
