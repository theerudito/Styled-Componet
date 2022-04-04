import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: gray;
	border-radius: 10px;
	color: white;
	border: 1px solid purple;
	flex-direction: column;
	& .blue {
		color: red;
	}

	& .green {
		background: black;
	}
`;

export const Titulo = styled.h1`
	background-color: yellowgreen;
	border-radius: 10px;
	color: black;
	border: 1px solid purple;
	padding: 5px 5px;
	&:hover {
		background-color: green;
		transition: 1s all ease;
	}
`;

export const Header = styled.h1`
	background-color: yellowgreen;
	border-radius: 10px;
	color: white;
	border: 1px solid purple;
	padding: 5px 5px;
	&:hover {
		background-color: green;
		transition: 0.5s all ease;
	}
`;

export const Contenido = styled.div`
	h1 {
		font-size: 2rem;
		color: white;
		font-family: sans-serif;
		background-color: yellowgreen;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	p {
		font-size: 0.8rem;
		color: black;
		font-family: sans-serif;
	}
`;
// Heredar Estilos
export const HeaderSegundario = styled(Titulo)`
	color: black;
`;

// Las Props
export const Props = styled(Titulo)`
	color: ${(props) => props.color};
`;

// Destruturing
export const Destruturing = styled(Titulo)`
	color: ${({ color }) => color};
`;

// Ternario
export const Ternario = styled(Titulo)`
	color: ${({ color }) => (color ? color : "blue")};
	background: ${({ color }) => (color ? color : "purple")};
`;

// Theme

export const Themes = styled.h1`
	color: ${({ theme }) => theme.color};
	background: ${(props) => props.theme.fondo};
	border-radius: ${(props) => props.theme.border};
	padding: ${({ theme }) => theme.pading};
	margin: ${({ theme }) => theme.margen};
`;
