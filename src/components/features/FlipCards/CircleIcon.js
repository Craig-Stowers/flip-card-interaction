import classes from "./CircleIcon.module.css"


const CircleIcon = (props) => {
   return (
      <div className={classes.frontCircle}>
         <img className={classes.frontImage} src={props.image} />
      </div>
   );
};

export default CircleIcon;
