import classes from "./index.module.css";

const LoadIcon = () => {
   return (
      <div className={classes.wrapper}>
         <div className={classes["lds-ring"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
   );
};

export default LoadIcon;
