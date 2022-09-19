import { useState } from "react";

const withHoverBasicHOC = (BaseComponent, tag = "div", className = null) => {
   const NewComponent = (props) => {
      const [isHovered, setHovered] = useState(false);
      const updateHoverState = (hoverState) => {
         setHovered(hoverState);
      };
      const CustomTag = tag;

      return (
         <CustomTag
            className={className}
            onMouseEnter={() => updateHoverState(true)}
            onMouseLeave={() => updateHoverState(false)}
         >
            <BaseComponent {...props} hovered={isHovered} />
         </CustomTag>
      );
   };

   return NewComponent;
};

export default withHoverBasicHOC;
