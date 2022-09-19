import cardFaceStyles from "./CardFace.module.css";
import backStyles from "./CardFaceBack.module.css";
import TriangleSVG from "../../ui/TriangleSVG";
import TickIcon from "./TickIcon";

const CardFaceBack = ({ title, description, image, completed }) => {
   return (
      <div className={`${cardFaceStyles.cardFaceWrapper} ${backStyles.wrapper}`}>
         <div className={cardFaceStyles.cardFace}>
            <TickIcon completed={completed} />
            <div className={backStyles.cardTop}>
               <div className={backStyles.info}>
                  <h2>{title}</h2>
                  <hr></hr>
                  <div
                     className={backStyles.description}
                     // !!TODO: sanitize html content before injection
                     dangerouslySetInnerHTML={{ __html: description }}
                  />
               </div>
            </div>

            <div className={backStyles.circleWrapper}>
               <div className={backStyles.circle}>
                  <img src={image} alt={`${title} graphic`}/>
               </div>
            </div>
            <div className={backStyles.triangleWrapper}>
               <TriangleSVG position={"bottom-right"} />
            </div>
            <img
               className={backStyles.backArrowImg}
               src={"/assets/back_arrow.png"}
               alt={"Back arrow"}
            />
         </div>
      </div>
   );
};

export default CardFaceBack

