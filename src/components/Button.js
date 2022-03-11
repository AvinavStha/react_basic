import React from "react";
import "./button.css";
import { ArrowDownward } from "@material-ui/icons";
import { Info } from "@material-ui/icons";



const STYLES = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--rounded--solid",
    "btn--transparent--solid",
    "btn--boxShadow--solid",
    "btn--link--solid"



];
const SIZES = [
    "btn--medium",
    "btn--large"
];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
     /* what it basically does is call the sizes array and the value that is demanded and if not send the first array element*/
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle
     : STYLES[0];
     /* what it basically does is call the styles array and the value that is demanded and if not send the first array element*/
     const checkButtonSize = SIZES.includes(buttonSize) /*includes: it basically checks if the value that we pass is included or not in the size array*/
    ? buttonSize
     : STYLES[0];
     /*ternary operator basically checks 1= true or false check garne 2 = return if true 3 = return if false */

  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
      {children}
    </button>
  ); //template string
};

// const Button = (props) => {
//   return (
//     <>
//       <div className="Button_Types">
//         <button className="AddButton" onClick={clickMe}>
//           {props.name}
//         </button>
//       </div>
//       <div className="Button_Types">
//         <button className="MinusButton" onClick={clickMe}>
//           Minus
//         </button>
//       </div>
//       <div className="Button_Types">
//         <button className="AddButton" disabled>
//           Disable
//         </button>
//       </div>
//       <div className="Button_Types">
//         <a href="http://avinavstha.github.io/AviPortfolio">
//           <button className="AddButton">Link</button>
//         </a>
//       </div>
//       <div className="Button_Types">
//         <button className="DownloadButton">
//           <ArrowDownward
//             style={{
//               height: "30px",
//               width: "30px",
//             }}
//           />
//           Download
//         </button>
//         <button className="DownloadButton">
//           <ArrowDownward />
//         </button>
//       </div>
//       <div className="Button_Types">
//         <button className="informationButton">
//           <Info />
//         </button>
//       </div>
//       <div className="Button_Types">
//         <button className="TransparentButton" onClick={clickMe}>
//           transparent
//         </button>
//       </div>
//       <div className="Button_Types">
//         <button className="RoundedCornerButton" onClick={clickMe}>
//           Rounded Corner Button
//         </button>
//       </div>
//     </>
//   );
// };

// export default Button;
