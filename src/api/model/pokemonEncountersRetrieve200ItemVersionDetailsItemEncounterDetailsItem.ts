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
import type { PokemonEncountersRetrieve200ItemVersionDetailsItemEncounterDetailsItemConditionValuesItem } from "./pokemonEncountersRetrieve200ItemVersionDetailsItemEncounterDetailsItemConditionValuesItem";
import type { PokemonEncountersRetrieve200ItemVersionDetailsItemEncounterDetailsItemMethod } from "./pokemonEncountersRetrieve200ItemVersionDetailsItemEncounterDetailsItemMethod";

export type PokemonEncountersRetrieve200ItemVersionDetailsItemEncounterDetailsItem =
  {
    chance: number;
    condition_values: PokemonEncountersRetrieve200ItemVersionDetailsItemEncounterDetailsItemConditionValuesItem[];
    max_level: number;
    method: PokemonEncountersRetrieve200ItemVersionDetailsItemEncounterDetailsItemMethod;
    min_level: number;
  };
