import styled from "styled-components";

export const ButtonDefault = styled.button`
width: 150px;
height: 50px;
background-color: var(--yellow);
border: 2px solid var(--yellow);
border-radius: 25px;
color: var(--white);
padding: 0 20px;
&:hover {
  background-color: var(--white);
  border: 2px solid var(--yellow);
  color: var(--yellow)
}`