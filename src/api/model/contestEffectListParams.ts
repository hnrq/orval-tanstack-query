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

export type ContestEffectListParams = {
/**
 * Number of results to return per page.
 */
limit?: number;
/**
 * The initial index from which to return the results.
 */
offset?: number;
/**
 * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
 */
q?: string;
};
