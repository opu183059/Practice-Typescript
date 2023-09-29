import { removePerson } from "../../../../store/slices/addPersonSlice";
import { useAppDispatch } from "../../../../store/app/hook";
import { personData } from "../../../interface/interface";

interface PersonDataRowProps {
  personInformation: personData;
  index: number;
}

const PersonDataRow = ({ personInformation, index }: PersonDataRowProps) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
        <td className="p-3">
          <p>{index + 1}</p>
        </td>
        <td className="p-3">
          <p>{personInformation.id}</p>
        </td>
        <td className="p-3">
          <p>{personInformation.userName}</p>
        </td>
        <td className="p-3">
          <p>{personInformation.city}</p>
        </td>
        <td className="p-3">
          <p>{personInformation.number}</p>
        </td>
        <td>
          <button
            className="btn-sm"
            onClick={() => {
              dispatch(removePerson(personInformation.id));
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default PersonDataRow;
