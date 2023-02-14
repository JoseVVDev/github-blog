import { ThemeProvider } from "styled-components";
import { defaultTheme } from './styles/theme/default'
import Teste from "./teste";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Teste/>
    </ThemeProvider>
  )
} 
