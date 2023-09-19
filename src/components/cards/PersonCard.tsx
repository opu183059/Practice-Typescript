import { personDataType } from "../types/type";

const PersonCard = ({ id, name, photo }: personDataType) => {
  return (
    <div className="rounded-lg p-5 shadow-lg hover:shadow-xl group">
      <div className="overflow-hidden rounded-lg">
        <img
          src={photo}
          alt={name + "image"}
          className="group-hover:scale-110 duration-200 w-96 h-64"
        />
      </div>
      <h1 className="mt-5 text-2xl">Name: {name}</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default PersonCard;
