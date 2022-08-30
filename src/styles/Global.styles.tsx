import { createGlobalStyle } from "styled-components";
import { lightGrayishCyanBg } from "./colors.styles";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing:border-box;
  }

  body {
    min-height: 100vh;
    font-family: 'League Spartan', sans-serif;
    background-color: ${lightGrayishCyanBg};
  }

  img {
    display: block;
  }
`;
