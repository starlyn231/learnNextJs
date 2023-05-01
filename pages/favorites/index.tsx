import { Layouts } from '@/components/layouts';
import { NoFavorites } from '@/components/ui';
import { FavoritePokemos } from '@/components/pokemon';
import { localFavorites } from '@/util';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';



const FavoritesPage: NextPage = () => {
	const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

	useEffect(() => {
		setFavoritePokemons(localFavorites.pokemons());
	}, []);
	return (
		<Layouts title="Pokemon Favoritos">
			{favoritePokemons.length === 0 ? (
				<NoFavorites />
			) : (
			<FavoritePokemos pokemonsId={favoritePokemons}/>
			)}
		</Layouts>
	);
};

export default FavoritesPage;
