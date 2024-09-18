import { FC } from "react";
import { Character } from "./api";

type Props = {
  character: Character;
};

export const Card: FC<Props> = ({ character }) => {
  return (
    <div>
      <h2>
        {character.name} and is {character.status}
      </h2>
    </div>
  );
};
