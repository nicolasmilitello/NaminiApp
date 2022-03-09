import styled from "styled-components";
import { SearchBarButton } from "../Buttons/SearchBarButton";

export const Container = styled.div`
  display: flex;
  align-items: center;

  & input {
    width: 75%;
    height: 18px;
  }

  & button {
    ${SearchBarButton}
  }
`;
