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
import type { ItemDetailCost } from "./itemDetailCost";
import type { ItemDetailFlingPower } from "./itemDetailFlingPower";
import type { ItemFlingEffectSummary } from "./itemFlingEffectSummary";
import type { ItemDetailAttributesItem } from "./itemDetailAttributesItem";
import type { ItemCategorySummary } from "./itemCategorySummary";
import type { ItemEffectText } from "./itemEffectText";
import type { ItemFlavorText } from "./itemFlavorText";
import type { ItemGameIndex } from "./itemGameIndex";
import type { ItemName } from "./itemName";
import type { ItemDetailHeldByPokemonItem } from "./itemDetailHeldByPokemonItem";
import type { ItemDetailSprites } from "./itemDetailSprites";
import type { ItemDetailBabyTriggerFor } from "./itemDetailBabyTriggerFor";
import type { ItemDetailMachinesItem } from "./itemDetailMachinesItem";

export interface ItemDetail {
  readonly id: number;
  /** @maxLength 200 */
  name: string;
  cost?: ItemDetailCost;
  fling_power?: ItemDetailFlingPower;
  fling_effect: ItemFlingEffectSummary;
  readonly attributes: readonly ItemDetailAttributesItem[];
  category: ItemCategorySummary;
  readonly effect_entries: readonly ItemEffectText[];
  readonly flavor_text_entries: readonly ItemFlavorText[];
  readonly game_indices: readonly ItemGameIndex[];
  readonly names: readonly ItemName[];
  readonly held_by_pokemon: readonly ItemDetailHeldByPokemonItem[];
  readonly sprites: ItemDetailSprites;
  readonly baby_trigger_for: ItemDetailBabyTriggerFor;
  readonly machines: readonly ItemDetailMachinesItem[];
}
