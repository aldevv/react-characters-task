import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "./api";
import { Card } from "./Card";

export const Home = () => {
  const { status, data, error } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  });

  if (status === "pending") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  const characters = data?.results;

  return (
    <>
      <h1>Characters</h1>
      {characters.map((ch, index) => {
        return <Card key={index} character={ch} />;
      })}
    </>
  );
};
