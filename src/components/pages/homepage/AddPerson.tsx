import { FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/app/hook";
import { addPerson } from "../../../store/slices/addPersonSlice";
import PersonDataRow from "./randomComponent/PersonDataRow";

const AddPerson = () => {
  const personData = useAppSelector((state) => state.managePerson.personArray);
  const dispatch = useAppDispatch();

  const addPersonToDb = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const genaratedID = Date.now();
    const form = e.currentTarget;
    const userName = form.userName.value;
    const city = form.city.value;

    const number = form.number.value;
    const personData = { id: genaratedID, userName, number, city };
    console.log(personData);
    dispatch(addPerson(personData));
    form.reset();
  };
  return (
    <div className="container min-h-screen py-16">
      <div className="flex justify-between gap-5">
        <div className="w-4/12">
          <form
            onSubmit={addPersonToDb}
            className="grid grid-cols-1 gap-5 sticky top-20 bg-white dark:bg-black p-5 shadow-md"
          >
            <h1>Add persons from here</h1>
            <input
              type="text"
              name="userName"
              placeholder="Name"
              className="border-[1px] border-black dark:border-white px-2 py-1 rounded bg-transparent"
            />
            <select
              name="city"
              id="city"
              className="border-black dark:border-white p-1 bg-transparent border-[1px] rounded"
            >
              <option value="Dhaka" className="text-black">
                Dhaka
              </option>
              <option value="Chittagong" className="text-black">
                Chittagong
              </option>
              <option value="Borisal" className="text-black">
                Borisal
              </option>
              <option value="Khulna" className="text-black">
                Khulna
              </option>
              <option value="Rajshahi" className="text-black">
                Rajshahi
              </option>
              <option value="Rangpur" className="text-black">
                Rangpur
              </option>
              <option value="Mymansing" className="text-black">
                Mymansing
              </option>
              <option value="Sylet" className="text-black">
                Sylet
              </option>
            </select>
            <input
              type="number"
              name="number"
              placeholder="Number"
              className="border-[1px] border-black dark:border-white px-2 py-1 rounded bg-transparent"
            />
            <button className="px-4 py-1 bg-sky-400 text-black hover:bg-sky-700 hover:text-white">
              Add
            </button>
          </form>
        </div>
        <div className="w-8/12">
          <div className="p-2 mx-auto sm:p-4 dark:text-gray-100">
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs">
                <thead className="dark:bg-gray-700">
                  <tr className="text-left">
                    <th className="p-3">Serial</th>
                    <th className="p-3">ID</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">City</th>
                    <th className="p-3">Number</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {personData &&
                    personData.map((personInformation, index) => (
                      <PersonDataRow
                        key={personInformation.id}
                        index={index}
                        personInformation={personInformation}
                      ></PersonDataRow>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPerson;
