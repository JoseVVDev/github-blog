import { ThemeProvider } from "styled-components";
import { AppHeader } from "./styles/app";
import { defaultTheme } from './styles/theme/default'
import Home from "./Home";
import { Post } from "./Post";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppHeader>
        <img src="src/assets/Logo.png"/>
      </AppHeader>
      {/* <Home/> */}
      <Post/>
    </ThemeProvider>
  )
} 
