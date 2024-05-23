import { ParentComponent } from "./ParentComponent";
import { createContext } from "react";

//--------------------------without context-----------------------
// export const GrandParentComponent = () => {
//   const data = "Hello from Grandparent";
//   return (
//     <div className="box">
//       <h2>GrandParentComponent</h2>
//       <ParentComponent data={data} />
//     </div>
//   );
// };

//--------------------------with context-----------------------
export const GrandContext = createContext();

export const GrandParentComponent = () => {
  const data = "Hello from Grandparent";
  return (
    <div className="box">
      <h2>GrandParentComponent</h2>
      <GrandContext.Provider value={data}>
        <ParentComponent />
      </GrandContext.Provider>
    </div>
  );
};
