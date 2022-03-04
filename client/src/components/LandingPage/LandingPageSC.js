import styled from "styled-components";
import { slideTopAnimation } from "../Animations/SlideTop";

export const Container = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    max-width: 275px;
    max-height: 275px;

    ${slideTopAnimation}
  }
`;
