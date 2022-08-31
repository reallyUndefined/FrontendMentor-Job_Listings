import styled from "styled-components";
import {
  desaturatedDarkCyan,
  lightGrayishCyanTabs,
  veryDarkGrayishCyan,
} from "../../styles/colors.styles";

interface STagProps {
  filterVariant: boolean;
}
export const STag = styled.div<STagProps>`
  font-size: 1rem;
  font-weight: 700;
  border-radius: 4px;
  overflow: hidden;
  display: flex;

  & span {
    display: block;
    padding: 0.5rem;
    background-color: ${lightGrayishCyanTabs};
    color: ${desaturatedDarkCyan};
    cursor: ${({ filterVariant }) => !filterVariant && "pointer"};

    &:hover {
      background-color: ${({ filterVariant }) =>
        filterVariant ? lightGrayishCyanTabs : desaturatedDarkCyan};
      color: ${({ filterVariant }) =>
        filterVariant ? desaturatedDarkCyan : "white"};
    }
  }

  & > button {
    background-color: ${desaturatedDarkCyan};
    padding: 0.5rem;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: ${veryDarkGrayishCyan};
    }
  }
`;
