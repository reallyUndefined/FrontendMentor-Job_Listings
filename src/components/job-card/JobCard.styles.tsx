import styled from "styled-components";
import {
  darkGrayishCyan,
  desaturatedDarkCyan,
  veryDarkGrayishCyan,
} from "../../styles/colors.styles";

interface SJobCardProps {
  featured: boolean;
}
export const SJobCard = styled.article<SJobCardProps>`
  position: relative;
  background-color: white;
  border-radius: 0.25rem;
  padding: 1.5rem;
  padding-left: ${({ featured }) =>
    featured ? "calc(1.5rem - 5px)" : "1.5rem"};
  padding-top: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1rem 2rem;
  border-left: ${({ featured }) =>
    featured && `5px solid ${desaturatedDarkCyan}`};
  max-width: 69.375rem;
  width: 100%;
  margin-inline: auto;

  @media (min-width: 768px) {
    padding-block: 2rem;
    padding-inline: 2.5rem;
    padding-left: ${({ featured }) =>
      featured ? "calc(2.5rem - 5px)" : "2.5rem"};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SJobInfoContainer = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  img {
    position: absolute;
    top: 0;
    left: 1.5rem;
    transform: translateY(-50%);
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
  }

  .name-tags {
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  h1,
  h2 {
    font-size: 0.9375rem;
    font-weight: 700;
  }

  h1 {
    color: ${desaturatedDarkCyan};
    margin-right: 1rem;
  }

  h2 {
    margin-bottom: 0.75rem;
    color: ${veryDarkGrayishCyan};
  }

  .job-details {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${darkGrayishCyan};
    font-size: 1rem;
    font-weight: 500;
  }

  @media (min-width: 758px) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 0;
    border: none;

    img {
      position: static;
      height: 5.5rem;
      width: 5.5rem;
      transform: translateY(0);
    }

    h1,
    .job-details {
      font-size: 1.125rem;
    }

    h2 {
      font-size: 1.375rem;
    }
  }
`;

export const STagsContainer = styled.div`
  padding-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;
