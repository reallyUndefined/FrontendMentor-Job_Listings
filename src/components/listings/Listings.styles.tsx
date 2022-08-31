import styled from "styled-components";

interface SListingsProps {
  filtersActive: boolean;
}
export const SListings = styled.main<SListingsProps>`
  padding-inline: 1.5rem;
  padding-block: 3.5rem;
  display: grid;
  gap: 2.5rem;
  padding-top: ${({ filtersActive }) => (filtersActive ? 0 : "3.5rem")};

  @media (min-width: 768px) {
    padding-block: 4.6875rem;
    gap: 1.5rem;
    padding-top: ${({ filtersActive }) => (filtersActive ? 0 : "4.6875rem")};
  }
`;
