import "./App.css";
import { useState } from "react";

////************************************** Start up
// set up App.test.jsx => make button in App.jsx

////*********************** logRoles` method for debugging roles

////********************************************** Test Behavior when Clicking Button

// function App() {
//   return (
//     <div>
//       <button className="red">Change to blue</button>
//     </div>
//   );
// }

// export default App;

/////*************************************** Click Button To Change Color

// function App() {
//   const [buttonColor, setButtonColor] = useState("red");
//   const newButtonColor = buttonColor === "red" ? "blue" : "red";

//   return (
//     <div>
//       <button
//         className={buttonColor}
//         onClick={() => setButtonColor(newButtonColor)}
//       >
//         Change to {newButtonColor}
//       </button>
//     </div>
//   );
// }

// export default App;

////************************************ Test Initial Condition of Button and Checkbox

// function App() {
//   const [buttonColor, setButtonColor] = useState("red");
//   const newButtonColor = buttonColor === "red" ? "blue" : "red";

//   return (
//     <div>
//       <button
//         className={buttonColor}
//         onClick={() => setButtonColor(newButtonColor)}
//       >
//         Change to {newButtonColor}
//       </button>
//       <br />
//       <label htmlFor="disabled-button-checkbox">disabled button</label>
//       <input
//         type="checkbox"
//         id="disabled-button-checkbox"
//         defaultChecked={false}
//       />
//     </div>
//   );
// }

// export default App;

////******************************************  Test final Condition

// function App() {
//   const [buttonColor, setButtonColor] = useState("red");
//   const [isChecked, setIsChecked] = useState(false);
//   const newButtonColor = buttonColor === "red" ? "blue" : "red";

//   return (
//     <div>
//       <button
//         className={buttonColor}
//         onClick={() => setButtonColor(newButtonColor)}
//         disabled={isChecked}
//       >
//         Change to {newButtonColor}
//       </button>
//       <br />
//       <label htmlFor="disabled-button-checkbox">disabled button</label>
//       <input
//         type="checkbox"
//         id="disabled-button-checkbox"
//         defaultChecked={false}
//         checked={isChecked}
//         onChange={() => setIsChecked((prev) => !prev)}
//       />
//     </div>
//   );
// }

// export default App;

////******************************** Code Quiz! Disabled Button Turns Gray

// function App() {
//   const [buttonColor, setButtonColor] = useState("red");
//   const [isChecked, setIsChecked] = useState(false);
//   const newButtonColor = buttonColor === "red" ? "blue" : "red";

//   return (
//     <div>
//       <button
//         className={`${isChecked ? "grey" : buttonColor}`}
//         onClick={() => setButtonColor(newButtonColor)}
//         disabled={isChecked}
//       >
//         Change to {newButtonColor}
//       </button>
//       <br />
//       <label htmlFor="disabled-button-checkbox">disabled button</label>
//       <input
//         type="checkbox"
//         id="disabled-button-checkbox"
//         defaultChecked={false}
//         checked={isChecked}
//         onChange={() => setIsChecked((prev) => !prev)}
//       />
//     </div>
//   );
// }

// export default App;

////******************************* Unit tests functions

function App() {
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const [isChecked, setIsChecked] = useState(false);
  const newButtonColor =
    buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";

  return (
    <div>
      <button
        className={`${isChecked ? "grey" : buttonColor}`}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isChecked}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <label htmlFor="disabled-button-checkbox">disabled button</label>
      <input
        type="checkbox"
        id="disabled-button-checkbox"
        defaultChecked={false}
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
    </div>
  );
}

export default App;
