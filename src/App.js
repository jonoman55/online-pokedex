import React, { useEffect, useState, useRef } from 'react';
import { getPokemon, getData } from '../src/api/PokemonService';
import { getGeneration } from '../src/api/PokemonCounts';
import { formatGen, sanitizeGen } from '../src/helpers/text';
import {
    ApiCredit,
    Footer,
    GoToTop,
    GenSelector,
    Header,
    PokemonList,
    PokemonDetails,
    PokeSearch,
    Separator
} from './components';
import './styles/pokeStyles.css';

const scrollToRef = () => window.scrollTo(100, 290);

export default function App() {
    const [genNumber, setGenNumber] = useState(1);
    const [genList, setGenList] = useState([]);
    const [pokeList, setPokeList] = useState([]);
    const [filteredPokeList, setFilteredPokeList] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState(null);
    const [filter, setFilter] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const myRef = useRef(null);
    const executeScroll = () => scrollToRef(myRef);

    const fetchPokemon = async () => {
        setGenNumber(genNumber)
        let gen = getGeneration(genNumber);
        const pokemons = await getPokemon(gen.offset, gen.limit);
        setFilteredPokeList(pokemons);
        setPokeList(pokemons);
        setIsLoading(false);
    };

    const fetchGens = async () => {
        const generations = await getData('https://pokeapi.co/api/v2/generation/');
        setGenList(generations.results.map((p, i) => {
            let num = i++;
            if (num !== 0 && num <= 7) {
                return formatGen(p.name) + ' ' + num;
            } else {
                return 'All Generations';
            }
        }).filter((p) => p !== undefined));
        setIsLoading(true);
    };

    useEffect(() => {
        fetchPokemon();
        fetchGens();
        // eslint-disable-next-line
    }, [genNumber]);

    const handleSelect = async (pokemonId) => {
        setPokemonSelected(pokeList.filter((p) => p.id === pokemonId)[0]);
        setFilteredPokeList(
            filteredPokeList.map((p) =>
                p.id === pokemonId
                    ? { ...p, selected: true }
                    : { ...p, selected: false }
            )
        );
    };

    const updateGen = async (gen) => {
        setGenNumber(sanitizeGen(
            gen === 'All Generations'
                ? 0 // NaN -> 0
                : Number(gen.value.split(' ')[1].trim())
        ));
    };

    const updateFilter = async (input) => {
        const filtered = pokeList.filter(p => {
            return p.name.toLowerCase().includes(input.toLowerCase())
        })
        setFilter(input);
        setFilteredPokeList(filtered);
    };

    const clearFilter = async () => {
        if (filter) {
            setFilter('');
            setFilteredPokeList(pokeList);
        }
    };

    const clearResults = async () => {
        if (pokemonSelected) {
            setPokemonSelected(null);
            if (filter) {
                setFilter('');
            }
        }
    };

    // TODO : Finish implementing Material UI components (GenSelector -> DropdownMenu, PokemonDetails, PokemonList)
    return (
        <div>
            <Header />
            <ApiCredit />
            <div className='container'>
                <div className="pokemon-app-container">
                    {pokemonSelected && <PokemonDetails pokemon={pokemonSelected} />}
                    <div className="pokemon-list-container">
                        <Separator />
                        <GenSelector options={genList} onSelect={updateGen} onChange={clearResults} />
                        <Separator />
                        <PokeSearch input={filter} onChange={updateFilter} onClick={clearFilter} />
                        <Separator />
                        <div ref={myRef}>
                            <div onClick={executeScroll}>
                                <PokemonList pokemons={filteredPokeList} selectPokemon={handleSelect} isLoading={isLoading} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GoToTop />
            <Footer />
        </div>
    );
}
