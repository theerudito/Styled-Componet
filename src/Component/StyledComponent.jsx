import {
	Container,
	Contenido,
	Destruturing,
	Header,
	HeaderSegundario,
	Props,
	Ternario,
	Themes,
	Titulo
} from "./Styled";

export const StyledApp = () => {
	return (
		<>
			<Container>
				<Titulo> Titulo Principal </Titulo>
				<Contenido>
					<h1>Contenido</h1>
					<p>
						Lorem ipsum dolor cing elit. Hic minima placeat incidunt cumque
						dolor veniam architecto cum laborum vel consectetur dignissimos
						exercitationem voluptatum soluta, ea necessitatibus nulla? Quasi,
						libero omnis.
					</p>
				</Contenido>
				<Header className="blue">Componete 1</Header>
				<Header className="green">Componete 2</Header>
				<HeaderSegundario>Componente Secundario Herencias</HeaderSegundario>
				<Props color={"blue"}>Usando Props</Props>
				<Destruturing color={"green"}>Usando Props Destruturing</Destruturing>
				<Ternario color="">Usando Operacor Ternario</Ternario>
				<Themes>Tema</Themes>
			</Container>
		</>
	);
};
