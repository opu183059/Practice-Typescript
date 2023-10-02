import { useQuery, gql } from "@apollo/client";
import CharacterCard from "./CharacterCard";
import { charecterData } from "../../../interface/interface";

const GET_CHARACTER = gql`
  query {
    characters {
      results {
        id
        name
        gender
        location {
          name
        }
        image
        episode {
          name
        }
      }
    }
  }
`;

const RickAndMorty = () => {
  const { loading, error, data } = useQuery(GET_CHARACTER);

  const characterData = data?.characters?.results;
  console.log(characterData);

  if (error) {
    console.log(error.message);
  }
  return (
    <div className="section py-20">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {characterData &&
            characterData.map((characterInformation: charecterData) => (
              <CharacterCard
                key={characterInformation.id}
                characterInformation={characterInformation}
              ></CharacterCard>
            ))}
        </div>
      )}
    </div>
  );
};

export default RickAndMorty;
