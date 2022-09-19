import styles from "./TickIcon.module.css";

const TickIcon = ({ completed }) => {
   return (
      <div className={styles.tickIcon}>
         {!completed && (
            <img
               className={styles.unmarked}
               src={"./assets/incomplete.png"}
               alt={"unmarked"}
            />
         )}

         <img
            className={`${styles.marked} ${completed ? styles.show : ""}`}
            src={"./assets/complete.png"}
            alt={"tick"}
         />
      </div>
   );
};

export default TickIcon;
