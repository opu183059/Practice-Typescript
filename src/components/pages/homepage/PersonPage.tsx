import PersonCard from "../../cards/PersonCard";
import { personData } from "../../data/personData";

const PersonPage = () => {
  return (
    <div id="persons" className="section py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {personData.length > 0 &&
            personData.map((personData) => (
              <PersonCard
                key={personData.id}
                id={personData.id}
                name={personData.name}
                photo={personData.photo}
              ></PersonCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PersonPage;
