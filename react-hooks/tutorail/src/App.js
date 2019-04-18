import React, {
  Component,
  useState,
  useEffect,
  createContext,
  useContext
} from "react";
import "./App.css";

// useState
// const App = () => {
//   // no need to bind because components are now closures where the inner functions have access to the outer functions variables/ scope
//   const [isActive, setActive] = useState(false);
//   const buttonText = isActive ? "Active" : "InActive";

//   // setActive(!isActive); // you are access this var without worrying about this.state.isActive
//   // hooks have simplified state, you don't need a need a class, constructor, super, or object.

//   return <button onClick={() => setActive(!isActive)}>{buttonText}</button>;
// };

// const App = () => {
//   const [count, setCount] = useState(0);
//   // example of a basic counter
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>increase</button>
//       <button onClick={() => setCount(count - 1)}>decrease</button>
//       <button onClick={() => setCount(0)}>reset</button>
//       <h1>{count}</h1>
//     </div>
//   );
// };

// #######################################################################

// const App = () => {
//   const [city, setCity] = useState("");
//   const [country, setCountry] = useState("");

//   const handleCityChange = e => setCity(e.target.value);
//   const handleCountryChange = e => setCountry(e.target.value);

//   return (
//     <form action="">
//       <div>
//         <input
//           type="text"
//           placeholder="city"
//           value={city}
//           onChange={handleCityChange}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="country"
//           value={country}
//           onChange={handleCountryChange}
//         />
//       </div>
//       <div>{`You live in${city}, ${country}`}</div>
//     </form>
//   );
// };

// useEffectHook (didMount, didUpdate, didUnmount) one or more step
// every time the component renders or re-renders, or unmounts
// #######################################################################

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState("pink");
//   const handleIncrease = () => setCount(count + 1);
//   const handleDecrease = () => setCount(count - 1);
//   const handleColorChange = () => {
//     const newColor = color === "green" ? "pink" : "green";
//     setColor(newColor);
//   };

//   useEffect(() => {
//     console.log("I will only run on mounting");
//     return () => {
//       console.log("I will only run on un-mounting");
//     };
//   }, [color]); // will only run these functions again it you pass the var here
//   // can also be empty

//   return (
//     <div>
//       <button onClick={handleIncrease}>increase</button>
//       <button onClick={handleDecrease}>decrease</button>
//       <button onClick={handleColorChange}>change color</button>
//       <h1 style={{ color }}>{count}</h1>
//     </div>
//   );
// };

// const App = () => {
//   const [displayCounter, setDisplayCounter] = useState(false);
//   const handleDisplayCounter = () => setDisplayCounter(!displayCounter);

//   return (
//     <div>
//       <button onClick={handleDisplayCounter}>display</button>
//       {displayCounter ? <Counter /> : null}
//     </div>
//   );
// };
// #######################################################################

// const App = () => {
//   const [userText, setUserText] = useState("");
//   const handleUserKeyPress = e => {
//     const { key, keyCode } = e;

//     if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
//       setUserText(`${userText}${key}`);
//     }
//   };
//   useEffect(() => {
//     window.addEventListener("keydown", handleUserKeyPress);
//     return () => {
//       window.removeEventListener("keydown", handleUserKeyPress);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>type text and it will show up below</h1>
//       <blockquote>{userText}</blockquote>
//     </div>
//   );
// };

// #######################################################################
// #################### ContextTypes ###############################
// #######################################################################
// const NameContext = createContext();

// const App = () => {
//   const [name, setName] = useState("andra");

//   return (
//     <div>
//       <NameContext.Provider value={name}>
//         <Child />
//       </NameContext.Provider>
//     </div>
//   );
// };

// const Child = () => {
//   return (
//     <section className={"child"}>
//       <GrandChild />
//     </section>
//   );
// };

// const GrandChild = () => {
//   return (
//     <section className={"grand child"}>
//       <Button />
//     </section>
//   );
// };

// const Button = () => {
//   const name = useContext(NameContext);
//   return <button>{name}</button>;
// };

// #######################################################################
// #################### CustomHooks ###############################
// #######################################################################

// const useCounter = startingValue => {
//   const [count, setCount] = useState(startingValue);
//   const increase = () => setCount(count + 1);
//   const decrease = () => setCount(count - 1);
//   return { increase, decrease, count };
// };

// const Display = ({ start }) => { // share the same functionality a lot like HOC
//   const { increase, decrease, count } = useCounter(start);
//   return (
//     <div>
//       <button onClick={increase}>increase</button>
//       <button onClick={decrease}>decrease</button>
//       <h1>{count}</h1>
//     </div>
//   );
// };

// const FancyDisplay = ({ start }) => { // share the same functionality a lot like HOC
//   const { increase, decrease, count } = useCounter(start);
//   return (
//     <div>
//       <h1 onClick={increase}>increase</h1>
//       <button onClick={decrease}>decrease</button>
//       <h1>{count}</h1>
//     </div>
//   );
// };

// const App = () => (
//   <div>
//     <Display start={20} />
//     <Display start={10} />
//     <FancyDisplay start={10} />
//   </div>
// );

const useInput = () => {
  const [input, setInput] = useState("");
  const onChange = e => setInput(e.target.value);

  return {
    onChange,
    input
  };
};

// const Input = ({ type, placeholder }) => {
//   const { input, handleOnchange } = useInput();
//   return (
//     <div>
//       <input type={type} onChange={handleOnchange} placeholder={placeholder} />
//       <div>{`${placeholder} ${input}`}</div>
//     </div>
//   );
// };

const App = () => {
  const { input: name, onChange: handleNameChange } = useInput();
  const { input: lastName, onChange: handleLastNameChange } = useInput();
  const { input: age, onChange: handleAgeChange } = useInput();
  console.log(name, "name");

  return (
    <div>
      <form action="">
        <input type="text" placeholder="Name" onChange={handleNameChange} />
        {/* <input type="text" placeholder="andra" {...useInput()} /> */}
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleLastNameChange}
        />
        <input type="number" placeholder="age" onChange={handleAgeChange} />
      </form>
      <div>name {name}</div>
      <div>lastName {lastName}</div>
      <div>age {age}</div>
    </div>
  );
};

export default App;
