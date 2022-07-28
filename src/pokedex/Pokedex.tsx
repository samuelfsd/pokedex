import { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { listPokemons, PokemonListInterface } from '~/pokemon/services/listPokemons';
import { getPokemonDetails } from '~/pokemon/services/getPokemonDetails';
import { PokemonDetail } from '~/pokemon/interfaces/PokemonDetail';

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(
    undefined,
  );
  const [selectedPokemonsDetails, setSelectedPokemonsDetails] = useState<PokemonDetail | undefined>(
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
