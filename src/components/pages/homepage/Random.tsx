import Button from "./randomComponent/Button";
import { Counter } from "./randomComponent/Counter";

const Random = () => {
  return (
    <div className="section gap-4">
      <Button>Whatsapp</Button>
      <Button>Contact US</Button>
      <Counter></Counter>
    </div>
  );
};

export default Random;
