import { createFileRoute } from "@tanstack/react-router";
import { usePokemonRetrieve } from "../api";

export const Route = createFileRoute("/$pokemonId")({
  component: PokemonDetails,
});

function PokemonDetails() {
  const { pokemonId } = Route.useParams();

  const { data } = usePokemonRetrieve(pokemonId);

  return (
    <div key={data?.data.name}>
      <div style={{ display: "flex", gap: "1rem" }}>
        {Object.values(data?.data.sprites ?? {}).map((sprite) => (
          <img height="100" src={sprite ?? ""} alt="" />
        ))}
      </div>
      <h2>{data?.data.name}</h2>
      <p>{data?.data.types.map(({ type }) => type.name).join(", ")}</p>
      <h4>Abilities</h4>
      <small>
        {data?.data.abilities.map(({ ability }) => ability.name).join(", ")}
      </small>
      <h4>Forms</h4>
      {data?.data.forms.map(({ name }) => <small>{name}</small>)}
    </div>
  );
}
