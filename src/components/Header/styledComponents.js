import styled from "styled-components";

export const PathLink = styled.li`
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 500;
  margin-right: 15px;
  text-decoration: none;
  list-style-type: none;
  color: ${(props) => (props.isactive === "true" ? "#57e145" : "#424040")};
`;
