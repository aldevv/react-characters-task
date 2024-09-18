import { FC } from "react";
import { Character } from "./api";

type Props = {
  character: Character;
};

export const Card: FC<Props> = ({ character }) => {
  console.log("inside my card");
  console.log(character);
  return (
    <div>
      hola mundo
      <h1>
        {character.name} and is {character.status}
      </h1>
    </div>
  );
};
