/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * PokéAPI
 * All the Pokémon data you'll ever need in one place, easily accessible through a modern free open-source RESTful API.

## What is this?

This is a full RESTful API linked to an extensive database detailing everything about the Pokémon main game series.

We've covered everything from Pokémon to Berry Flavors.

## Where do I start?

We have awesome [documentation](https://pokeapi.co/docs/v2) on how to use this API. It takes minutes to get started.

This API will always be publicly available and will never require any extensive setup process to consume.

Created by [**Paul Hallett**](https://github.com/phalt) and other [**PokéAPI contributors***](https://github.com/PokeAPI/pokeapi#contributing) around the world. Pokémon and Pokémon character names are trademarks of Nintendo.
    
 * OpenAPI spec version: 2.7.0
 */
import type { TypeDetailDamageRelations } from "./typeDetailDamageRelations";
import type { TypeDetailPastDamageRelationsItem } from "./typeDetailPastDamageRelationsItem";
import type { TypeGameIndex } from "./typeGameIndex";
import type { GenerationSummary } from "./generationSummary";
import type { MoveDamageClassSummary } from "./moveDamageClassSummary";
import type { AbilityName } from "./abilityName";
import type { TypeDetailPokemonItem } from "./typeDetailPokemonItem";
import type { MoveSummary } from "./moveSummary";
import type { TypeDetailSprites } from "./typeDetailSprites";

/**
 * Serializer for the Type resource
 */
export interface TypeDetail {
  readonly id: number;
  /** @maxLength 200 */
  name: string;
  readonly damage_relations: TypeDetailDamageRelations;
  readonly past_damage_relations: readonly TypeDetailPastDamageRelationsItem[];
  readonly game_indices: readonly TypeGameIndex[];
  generation: GenerationSummary;
  move_damage_class: MoveDamageClassSummary;
  readonly names: readonly AbilityName[];
  readonly pokemon: readonly TypeDetailPokemonItem[];
  readonly moves: readonly MoveSummary[];
  readonly sprites: TypeDetailSprites;
}
