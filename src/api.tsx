type Result = {
  results: Character[];
};

export interface Character {
  name: string;
  status: string;
}

export const fetchCharacters = async (): Promise<Result> => {
  const data = await fetch("https://rickandmortyapi.com/api/character");
  const dataJson = await data.json();
  return dataJson;
};
