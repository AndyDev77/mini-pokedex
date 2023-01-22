import React from "react";
import "./pokemon.css";

interface Props {
  name: string;
  id: number;
  image: string;
  type: string;
}

function PokemonList(props: Props) {
  const { name, id, image, type } = props;
  return (
    <div>
      <section className={`pokemon-list-container ${type}`}>
      <p className="pokemon-name"># {id}</p>
        <p className="pokemon-name">{name}</p>
        <img src={image} alt={name} />
        <p className="pokemon-name">Type : {type}</p>
      </section>
    </div>
  );
}

export default PokemonList;
