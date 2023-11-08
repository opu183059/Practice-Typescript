import { useQuery } from "@apollo/client";
import CharacterCard from "./CharacterCard";
import { useEffect } from "react";
import Loading from "../../../common/Loading";
import { GET_CHARACTER } from "../../../graphQl/Queries";
import {
  Character,
  GetCharecterDataQuery,
} from "../../../../__generated__/graphql";

const RickAndMorty = () => {
  const { loading, error, data } =
    useQuery<GetCharecterDataQuery>(GET_CHARACTER);

  const charactersData = data?.characters?.results;
  // console.log(charactersData);
  if (error) {
    console.log(error.message);
  }
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="section py-20">
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {charactersData &&
            charactersData.map((characterInformation) => (
              <CharacterCard
                key={characterInformation?.id}
                characterInformation={characterInformation as Character}
              ></CharacterCard>
            ))}
        </div>
      )}
    </div>
  );
};

export default RickAndMorty;
