import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import { listPokemons, PokemonListInterface } from '~/pokemon/services/listPokemons';
import { getPokemonDetails } from '~/pokemon/services/getPokemonDetails';

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(
    undefined,
  );
  const [selectedPokemonsDetails, setSelectedPokemonsDetails] = useState<any | undefined>(
    undefined,
  );

  useEffect(() => {
    listPokemons().then((response) => setPokemons(response.results));
  }, []);

  useEffect(() => {
    if (!selectedPokemon) return;

    getPokemonDetails(selectedPokemon.name).then((response) =>
      setSelectedPokemonsDetails(response),
    );
  }, [selectedPokemon]);

  return (
    <div>
      <h1>Pokedex</h1>
      Pokemons:
      {pokemons.map((pokemon) => (
        <Button key={pokemon.name} onClick={() => setSelectedPokemon(pokemon)}>
          {pokemon.name}
          <span></span>
        </Button>
      ))}
      <h2>Pokemon selecionado: {selectedPokemon?.name || 'Nenhum Pokemon Selecioado'}</h2>
      {JSON.stringify(selectedPokemonsDetails, undefined, 2)}
    </div>
  );
};
