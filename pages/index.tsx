import { PokeApi } from '@/api';
import { Layouts } from '@/components/layouts';
import { PokemonCard } from '@/components/pokemon';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { Grid } from '@nextui-org/react';
import { GetStaticProps, NextPage } from 'next';

interface Props {
	pokemons: SmallPokemon[];
}
const HomePage: NextPage<Props> = ({ pokemons }) => {
	return (
		<Layouts title="Listado de pokemons">
			<Grid.Container gap={2} justify="flex-start">
				{pokemons.map(pokemon => (
					<PokemonCard key={pokemon.id} pokemon={pokemon} />
				))}
			</Grid.Container>
		</Layouts>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	// Fetch data from external API
	const { data } = await PokeApi.get<PokemonListResponse>(`/pokemon?limit=150`);

	const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
		...poke,
		name: poke.name,
		id: i + 1,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
			i + 1
		}.svg`
	}));
	//  const resp =await PokeApi.get<PokemonListResponse>(`/pokemon/bulbasaur`)

	//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg
	//const {data}= await PokeApi.get<PokemonListResponse>(`/pokemon?limit=150`)

	// const statusCode = res.status > 200 ? res.status : false;
	// Pass data to the page Github via props

	return {
		props: {
			pokemons
			//statusCode
		}
	};
};

export default HomePage;
