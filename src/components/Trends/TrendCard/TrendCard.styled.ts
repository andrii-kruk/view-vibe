import styled from "styled-components";

export const Card = styled.li`
  position: relative;
  width: 240px;
  height: 140px;

  flex-shrink: 0;

  z-index: -1;

  @media screen and (min-width: 768px) {
    width: 470px;
    height: 230px;
  }
`;

export const BackdropImage = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 8px;

  object-fit: cover;
`;

export const CardInfo = styled.div`
  position: absolute;
  top: 86px;
  left: 16px;

  display: flex;
  flex-direction: column;
  gap: 4px;

  @media screen and (min-width: 768px) {
    top: 154px;
    left: 24px;
    gap: 3px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const CardDetails = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 1440px) {
  }
`;

export const DetailsText = styled.p`
  display: flex;
  align-items: center;

  font-size: var(--fs-tablet_sm);
`;

export const SeparatedSymbol = styled.span`
  margin-left: 8px;

  @media screen and (min-width: 1440px) {
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0) 25.48%, rgba(0, 0, 0, 0.75) 81.16%);
  align-items: flex-end;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;

  border-radius: 8px;
`;
