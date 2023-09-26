import { decrement, increment } from "../../../../store/feature/counterSlice";
import { toggle } from "../../../../store/feature/trueFalseSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/app/hook";

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const value = useAppSelector((state) => state.trueFalse.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(toggle())}> click</button>
      </div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <p className="block text-2xl">{count}</p>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
