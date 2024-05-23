/* eslint-disable react/prop-types */
import { ChildComponent } from "./ChildComponent";

//--------------------------without context-----------------------
// export const ParentComponent = (props) => {
// const handleClick = () => {
//   console.log("Button Clicked");
// };
//   return (
//     <div className="box">
//         <h3>ParentComponent</h3>
//         <ChildComponent data={props.data} handleClick={handleClick}/>
//     </div>
//   )
// }

//--------------------------with context-----------------------
export const ParentComponent = () => {
  const handleClick = () => {
    console.log("Button Clicked");
  };
  return (
    <div className="box">
      <h3>ParentComponent</h3>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
};
