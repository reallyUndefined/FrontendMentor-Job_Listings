import styled from "styled-components";
import { desaturatedDarkCyan } from "../../styles/colors.styles";

export const SHeaderImageContainer = styled.header`
  background-color: ${desaturatedDarkCyan};
  height: 9.75rem;
  overflow: hidden;

  .mob-img {
    width: 100%;
  }

  .pc-img {
    display: none;
    width: 100%;
  }
`;
