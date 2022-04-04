import { StyledApp } from "./Component/StyledComponent";
import { EstiloGlobal } from "./Component/StyledGlobal";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Component/Theme";
import "./styles.css";

export default function App() {
	return (
		<>
			<EstiloGlobal />
			<ThemeProvider theme={Theme}>
				<StyledApp />
			</ThemeProvider>
		</>
	);
}
