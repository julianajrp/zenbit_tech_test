import styled from "styled-components";

export const DivInput = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;

padding: 0px 10px 0px 20px;


`;
export const DivImg = styled.div`
width: 200px;
display: flex;
flex-direction: row;
justify-content: space-around;
gap: 10px;

`
export const FooterStyle = styled.footer`
width: 200px;
height: 100px;
display: flex;
flex-direction: row;
justify-content: space-around;
gap: 10px;
background-color: var(--footer_grey);

`
export const FaceDiv1 = styled.div`
border-radius: 50%;
background-color: var(--pink);
height: 100px;
width: 100px;
`
export const Eye1Div1 = styled.div`
border-radius: 50%;
background-color: var(--white);
height: 20px;
width: 20px;
`
export const Eye2Div1 = styled.div`
border-radius: 50%;
background-color: var(--white);
height: 20px;
width: 20px;
`
export const MouthDiv1 = styled.div`
border-radius: 100% 10% 10% 100%;
background-color: var(--blue);
height: 20px;
width: 10px;
position: absolute;
top: 50px;
left: 25px;
transform: rotate(-45deg);

`