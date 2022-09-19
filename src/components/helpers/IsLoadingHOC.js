import { useState, useRef, useEffect } from "react";
import LoadIcon from "../ui/LoadIcon";

const IsLoadingHOC = (WrappedComponent) => {
   const HOC = (props) => {
      const [isLoading, setLoading] = useState(true);
      const timer = useRef(null);
      const setLoadingState = (isComponentLoading) => {
         timer.current = setTimeout(() => {
            setLoading(isComponentLoading);
         }, 500);
      };

      useEffect(() => {
         return () => {
            if (timer.current) clearTimeout(timer.current);
         };
      }, []);

      return (
         <>
            {isLoading && <LoadIcon />}
            <WrappedComponent
               {...props}
               setLoading={setLoadingState}
               isLoading={isLoading}
            />
         </>
      );
   };
   return HOC;
};

export default IsLoadingHOC;
