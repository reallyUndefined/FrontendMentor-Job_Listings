import styled from "styled-components";
import {
  darkGrayishCyan,
  desaturatedDarkCyan,
} from "../../styles/colors.styles";

export const SFilterTagsContainer = styled.div`
  position: relative;
  z-index: 100;
  padding-inline: 1.5rem;
  margin-bottom: 3.5rem;

  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

export const SFilterTags = styled.div`
  padding: 1.25rem;
  background-color: white;
  border-radius: 4px;
  max-width: 69.375rem;
  width: 100%;
  margin-inline: auto;
  margin-top: -2.25rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  & > button {
    background-color: transparent;
    color: ${darkGrayishCyan};
    border: none;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      color: ${desaturatedDarkCyan};
      text-decoration: underline;
    }
  }
`;
