import { SmallPokemon } from '@/interfaces';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
interface Props {
	pokemon: SmallPokemon;
}
const PokemonCard: FunctionComponent<Props> = ({ pokemon }) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/name/${pokemon.name}`);
		console.log('clicl');
	};

	return (
		<Grid xs={6} sm={3} md={2} xl={1}>
			<Card isPressable onClick={handleClick}>
				<Card.Body css={{ p: 1 }}>
					<Card.Image src={pokemon.img} width="100%" height={140} />
				</Card.Body>
				<Card.Footer css={{ justifyItems: 'flex-start' }}>
					<Row wrap="wrap" justify="space-between" align="center">
						<Text transform="capitalize">{pokemon.name}</Text>
						<Text>#{pokemon.id}</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	);
};

export default PokemonCard;
