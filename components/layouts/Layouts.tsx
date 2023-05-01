import Head from 'next/head';
import { FunctionComponent } from 'react';
import { Navbar } from '../ui';
interface Props {
	children: React.ReactNode;
	title: string;
}
const origin = (typeof window === 'undefined') ? '' : window.location.origin;
export const Layouts: FunctionComponent<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title style={{ color: 'white' }}>{title || 'PokemonApp'}</title>
				<meta name="author" content="Starlyn Fernández" />
				<meta name="description" content={`Información sobre el pokemon ${title}`} />
				<meta name="keyword" content={`${title}`} />
				<meta property="og:title" content={`informacion sobre el pokemon ${title}`} />
				<meta property="og:description" content={`Esta es la pagina  sobre  ${title}`} />
				<meta property="og:image" content={`${origin}/img/banner.png`} />
			</Head>
			<Navbar />
			<main
				style={{
					padding: '0px 20px'
				}}>
				{children}
			</main>
		</>
	);
};
