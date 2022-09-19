import "./App.css";
import { useEffect } from "react";
import useFetchJson from "./hooks/UseFetchJson";
import DesignThinking from "./pages/DesignThinking/DesignThinking";

function App() {
   const { data, error } = useFetchJson("/data.json");
   if (error) console.log(error);

   useEffect(() => {
      if (data && data.title) document.title = data.title;
   }, [data]);

   return (
      <div className="App">
         <DesignThinking data={data} />
      </div>
   );
}

export default App;