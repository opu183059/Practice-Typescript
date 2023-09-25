import { passElement } from "../../../types/type";

const Button = ({ children }: passElement) => {
  return (
    <>
      <button className="btn bg-teal-400 hover:bg-teal-600 hover:text-gray-50 uppercase">
        {children}
      </button>
    </>
  );
};

export default Button;
