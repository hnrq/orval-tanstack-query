import { FC, useMemo } from "react";
import { usePokemonList, usePokemonRetrieve } from "../api";
import "./index.css";
import { PokemonSummary } from "../api/model";
import { createFileRoute, Link } from "@tanstack/react-router";

const Pokemon: FC<{ pokemon: PokemonSummary }> = ({ pokemon }) => {
  const pokemonId = useMemo(
    () =>
      pokemon.url
        .replace("https://pokeapi.co/api/v2/pokemon/", "")
        .replace("/", ""),
    [pokemon.url]
  );

  const { data } = usePokemonRetrieve(pokemonId);

  return (
    <Link
      to={`/$pokemonId`}
      params={{ pokemonId }}
      className="pokemons__pokemon"
    >
      <img height="100" src={data?.data.sprites.front_default} alt="" />
      <small>{pokemon.name}</small>
    </Link>
  );
};

const Tanstack = () => {
  const { data, isLoading } = usePokemonList();

  return (
    <div style={{ maxWidth: "900px", margin: "auto" }}>
      {isLoading && <span>Initial Loading...</span>}
      {!isLoading && data && (
        <div className="pokemons">
          {data.data.results?.map((pokemon) => <Pokemon pokemon={pokemon} />)}
        </div>
      )}
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Tanstack,
});

export default Tanstack;
