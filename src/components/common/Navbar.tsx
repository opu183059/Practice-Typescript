import { useAppDispatch, useAppSelector } from "../../store/app/hook";
import { toggle } from "../../store/slices/trueFalseSlice";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
  const value = useAppSelector((state) => state.globalToggle.value);
  const dispatch = useAppDispatch();
  if (value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="w-full shadow-lg fixed z-50 bg-white dark:bg-black">
      <div className="container">
        <div className="flex justify-between py-4 ">
          <div className="logo">TypeScript</div>
          <div className="right">
            <div className="menu">
              <a href="#home">Home</a>
              <a href="#persons">Persons</a>
              <a href="#contact">Contact</a>
              <label className="inline-flex items-center space-x-4 cursor-pointer text-gray-900 dark:text-white">
                <span className="relative border-[2px] dark:border-slate-100 border-black rounded-md p-1">
                  <input
                    onClick={() => dispatch(toggle())}
                    id="Toggle1"
                    type="checkbox"
                    className="hidden"
                  />
                  {!value ? (
                    <BsFillMoonFill size={20}></BsFillMoonFill>
                  ) : (
                    <BsFillSunFill size={20}></BsFillSunFill>
                  )}
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
