import { useEffect, useState, useRef, useCallback } from "react";

export default function useAllImagesLoaded() {
   const [isRendered, setRendered] = useState(false);
   const element = useRef(null);
   const [isComplete, setComplete] = useState(false);

   useEffect(() => {
      if (!element.current) return;
      const imageElements = Array.from(element.current.querySelectorAll("img"));
      const imagesStatus = imageElements.map(() => false);

      const testAllComplete = () => {
         const result = imagesStatus.every((e) => e);
         if (result) setComplete(true);
      };

      const onImageComplete = (img) => {
         const index = imageElements.indexOf(img.target);
         imagesStatus[index] = true;
         testAllComplete();
      };

      for (let i = 0; i < imageElements.length; i++) {
         if (imageElements[i].complete) {
            imagesStatus[i] = true;
            continue;
         }
         imageElements[i].addEventListener("load", onImageComplete);
         imageElements[i].addEventListener("error", onImageComplete);
      }
      testAllComplete();

      return () => {
         for (let i = 0; i < imageElements.length; i++) {
            imageElements[i].removeEventListener("load", onImageComplete);
            imageElements[i].removeEventListener("error", onImageComplete);
         }
      };
   }, [isRendered]);

   //callback function passed as ref so hook only run after element is rendered
   return [
      useCallback((ref) => {
         element.current = ref;
         setRendered(true);
      }, []),
      isComplete,
   ];
}
