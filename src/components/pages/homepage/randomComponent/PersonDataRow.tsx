import { personData } from "../../../../store/slices/addPersonSlice";

interface PersonDataRowProps {
  personInformation: personData;
  index: number;
}

const PersonDataRow: React.FC<PersonDataRowProps> = ({
  personInformation,
  index,
}) => {
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
          <button className="btn-sm">Delete</button>
        </td>
      </tr>
    </>
  );
};

export default PersonDataRow;
