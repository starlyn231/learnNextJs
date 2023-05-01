import { Container, Text,Image } from '@nextui-org/react'


const NoFavorites = () => {
  return (
    <Container
    css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 'calc(100vh - 100px)'
    }}>
    <Text h1>No hay favoritos</Text>

<Image
src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
width={250}
height={250}
css={{opacity: 0.1}}
/>

</Container>
  )
}

export default NoFavorites
