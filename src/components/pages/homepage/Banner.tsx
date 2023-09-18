import { useState, useReducer } from "react";
// Application State
interface AppState {
  counter: number;
  random: number;
}

// Actions
type Increment = { type: "increment"; payload: number };
type Random = { type: "random" };
type AppActions = Increment | Random;

function appReducer(state: AppState, action: AppActions) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.payload };
    case "random":
      return { ...state, random: Math.ceil(Math.random() * 20) };
    default:
      return state;
  }
}

const Banner = () => {
  const [count, setcount] = useState<number>(0);
  const [state, dispatch] = useReducer(appReducer, { counter: 0, random: 0 });

  return (
    <div className="section bg-[url('https://img.freepik.com/premium-photo/clear-blue-sky-sunset-with-horizon-calm-ocean-sea-background-picturesque_31965-138504.jpg')] bg-cover">
      <div className="text-center container">
        <h1 className="headerOne">Welcome to typescript practice {count}</h1>
        <p className="textOne"></p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => {
              setcount(count + 1);
            }}
            className="px-3 py-2 bg-green-400 rounded"
          >
            Increase Number
          </button>
          <button
            onClick={() => {
              setcount(count - 1);
            }}
            className="px-3 py-2 bg-red-400 rounded"
          >
            Decrease Number
          </button>
        </div>
        {/* <form className="flex flex-col justify-center">
          <label htmlFor="">Change the page name</label>
          <input type="text" className="w-72 mx-auto" />
          <input type="submit" />
        </form> */}

        <div className="flex justify-center gap-4 mt-5">
          <button
            className="px-3 py-2 border-2 rounded"
            onClick={() => dispatch({ type: "increment", payload: 5 })}
          >
            "Increment" Action
          </button>
          <button
            className="px-3 py-2 border-2 rounded"
            onClick={() => dispatch({ type: "random" })}
          >
            "Random" Action
          </button>
        </div>
        <div className="flex justify-center gap-4">
          <p>{state.counter}</p>
          <p>{state.random}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
