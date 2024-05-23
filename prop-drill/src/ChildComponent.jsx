/* eslint-disable react/prop-types */

import { useContext } from "react";
import { GrandContext } from "./GrandParentComponent";

//--------------------------without context-----------------------
// export const ChildComponent = ({data , handleClick}) => {
//   return (
//     <div className="box">
//       <h3>ChildComponent</h3>
//       <p>{data}</p>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   );
// };

//--------------------------with context-----------------------
export const ChildComponent = ({ handleClick }) => {
  const value = useContext(GrandContext);
  return (
    <div className="box">
      <h3>ChildComponent</h3>
      <p>{value}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};
