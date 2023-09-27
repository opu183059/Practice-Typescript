import { decrement, increment } from "../../../../store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/app/hook";

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="mt-4 border-2 p-5 bg-yellow-100">
      <h1 className="text-center mb-2">Redux Increment / Decrement</h1>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="btn bg-green-400"
        >
          Increment
        </button>
        <p className="block text-2xl">{count}</p>
        <button
          onClick={() => dispatch(decrement())}
          className="btn bg-red-400"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
