import { useQuery } from "@tanstack/react-query";
import { Character, fetchCharacters } from "./api";
import { Card } from "./Card";
import { useState } from "react";

export const Home = () => {
  const { status, data, error } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  });

  const [characters, setCharacters] = useState<Character[]>([]);

  console.log(data);
  if (status === "pending") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  if (characters.length === 0) {
    setCharacters(data?.results);
  }

  console.log("my characters: ", characters);

  // also status === 'success', but "else" logic works, too
  return (
    <>
      <h1>Characters</h1>
      {characters.map((el, index) => {
        <Card key={index} character={el} />;
      })}
    </>
  );
};
