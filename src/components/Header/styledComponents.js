import styled from "styled-components";
import { Link } from "react-router-dom";

export const PathLink = styled.link`
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 500;
  margin-right: 15px;
  text-decoration: none;
  color: ${(props) => (props.isactive ? "#57e145" : "#424040")};
`;
