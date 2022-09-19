const TriangleSVG = (props) => {
   return (
      <svg
         width="100%"
         height="100%"
         viewBox={"0 0 100 100"}
         preserveAspectRatio={"none"}
      >
         <polygon
            points={"0,100 100,0 100,100 0,100"}
            // style={props.polygonStyle}
         />
      </svg>
   );
};

export default TriangleSVG;
