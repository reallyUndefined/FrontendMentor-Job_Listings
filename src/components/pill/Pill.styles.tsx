import styled from "styled-components";

interface SPillProps {
  bgColor: string;
}
export const SPill = styled.div<SPillProps>`
  border-radius: 99rem;
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  padding-inline: 0.5rem;
  padding-block: 0.25rem;
  font-size: 0.875rem;
  font-weight: 700;
`;
