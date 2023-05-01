import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface Props {
	pokemonId: number;
}
const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/pokemon/${pokemonId}`);
	};

	return (
		<Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} onClick={handleClick}>
			<Card isPressable css={{ padding: 10 }}>
				<Card.Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
					width="100%"
					height={140}
				/>
			</Card>
		</Grid>
	);
};

export default FavoriteCardPokemon;
