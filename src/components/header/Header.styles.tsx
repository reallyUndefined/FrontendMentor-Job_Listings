import styled from "styled-components";
import { desaturatedDarkCyan } from "../../styles/colors.styles";

export const SHeaderImageContainer = styled.header`
  position: relative;
  background-color: ${desaturatedDarkCyan};
  height: 9.75rem;
  overflow: hidden;

  .mob-img {
    width: 100%;
    height: 100%;
  }

  .pc-img {
    display: none;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    .mob-img {
      display: none;
    }

    .pc-img {
      display: block;
    }
  }
`;
