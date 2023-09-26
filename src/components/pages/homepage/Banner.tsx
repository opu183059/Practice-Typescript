import { useState, useReducer } from "react";
// Application State
interface AppState {
  counter: number;
  random: number;
}

// Function
type Increment = { type: "increment"; payload: number };
type Decrement = { type: "decrement"; payload: number };
type Random = { type: "random" };

// Actions
type AppActions = Increment | Decrement | Random;

function appReducer(state: AppState, action: AppActions) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.payload };
    case "decrement":
      return { ...state, counter: state.counter - action.payload };
    case "random":
      return { ...state, random: Math.round(Math.random() * 20) };
    default:
      return state;
  }
}

const Banner = () => {
  const [value, setValue] = useState<number>(1);
  const [state, dispatch] = useReducer(appReducer, {
    counter: 0,
    random: 0,
  });

  return (
    <div
      id="home"
      className="bg-[url('https://img.freepik.com/premium-photo/clear-blue-sky-sunset-with-horizon-calm-ocean-sea-background-picturesque_31965-138504.jpg')] bg-cover bg-fixed"
    >
      <div className="section dark:bg-black/30">
        <div className="text-center container">
          <h1 className="headerOne dark:text-blue-200">
            Welcome to typescript practice
          </h1>
          <div className="flex gap-5 justify-center text-4xl text-blue-800 dark:text-blue-600 font-bold">
            <p>Value: {state.counter}</p>
            <p>Random: {state.random}</p>
          </div>
          <div className="mt-3">
            <label htmlFor="value">Set increment or decrement value: </label>
            <input
              onChange={(e) => {
                setValue(Number(e.target.value));
              }}
              type="number"
              name="value"
              id="value"
              className="w-20 px-2 no border-black border-[1px] rounded-md bg-transparent"
            />
          </div>
          <div className="flex justify-center gap-3 mt-3">
            <button
              onClick={() => dispatch({ type: "increment", payload: value })}
              className="btn bg-green-400 hover:bg-green-600 hover:text-white"
            >
              Increase Number
            </button>
            <button
              onClick={() => dispatch({ type: "decrement", payload: value })}
              className="btn bg-red-400 hover:bg-red-600 hover:text-white"
            >
              Decrease Number
            </button>
            <button
              className="btn bg-blue-400 hover:bg-blue-600 hover:text-white"
              onClick={() => dispatch({ type: "random" })}
            >
              Random Number
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
