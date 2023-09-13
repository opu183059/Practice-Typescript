import PersonCard from "../../cards/PersonCard";

export type personDataType = {
  id: number;
  name: string;
  photo: string;
};
const PersonPage = () => {
  const personData: personDataType[] = [
    {
      id: 45454,
      name: "Jims",
      photo:
        "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
    },
    {
      id: 54512,
      name: "Kalin",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRaSC9CuhnHN5fqQGI9UPytNPI8hAwmZJyVT4Nb0Ai&s",
    },
    {
      id: 45487,
      name: "Robert",
      photo:
        "https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg",
    },
    {
      id: 78587,
      name: "Robert",
      photo:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    },
    {
      id: 45227,
      name: "Robert",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAjLEjKmY2BroBj5LBrMjVRAUaWOBUIphVaA&usqp=CAU",
    },
    {
      id: 42387,
      name: "Robert",
      photo:
        "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
    },
  ];

  return (
    <div id="persons" className="section py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {personData.map((personData) => (
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