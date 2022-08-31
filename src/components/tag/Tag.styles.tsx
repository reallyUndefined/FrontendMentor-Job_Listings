import styled from "styled-components";
import {
  desaturatedDarkCyan,
  lightGrayishCyanTabs,
} from "../../styles/colors.styles";

export const STag = styled.div`
  font-size: 1rem;
  font-weight: 700;
  border-radius: 4px;
  overflow: hidden;

  span {
    display: block;
    padding: 0.5rem;
    background-color: ${lightGrayishCyanTabs};
    color: ${desaturatedDarkCyan};
  }
`;
