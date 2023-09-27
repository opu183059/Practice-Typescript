import Button from "./randomComponent/Button";
import { Counter } from "./randomComponent/Counter";

const Random = () => {
  return (
    <div className="section gap-4">
      <div>
        <div className="border-2 p-5 bg-red-100">
          <h1 className="text-center mb-2">TypeScript Component</h1>
          <div className="flex gap-4">
            <Button>Whatsapp</Button>
            <Button>Contact US</Button>
          </div>
        </div>
        <Counter></Counter>
      </div>
    </div>
  );
};

export default Random;
