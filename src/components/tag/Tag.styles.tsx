import styled from "styled-components";
import {
  desaturatedDarkCyan,
  lightGrayishCyanTabs,
} from "../../styles/colors.styles";

interface STagProps {
  filterVariant: boolean;
}
export const STag = styled.div<STagProps>`
  font-size: 1rem;
  font-weight: 700;
  border-radius: 4px;
  overflow: hidden;

  span {
    display: block;
    padding: 0.5rem;
    background-color: ${lightGrayishCyanTabs};
    color: ${desaturatedDarkCyan};
    cursor: ${({ filterVariant }) => !filterVariant && "pointer"};
  }
`;
