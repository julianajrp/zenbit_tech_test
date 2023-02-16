import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
/*reset*/
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
button{
    cursor: pointer;
    border: none;
    background: transparent;
}
ul ol li{
    list-style: none;
}
img{
    max-width: 100%;
}
input, textarea, select {
    outline: 0;
}
textarea:focus, input:focus, select:focus {
    outline: 0;
}
/*text settings/*
h1, h2, h3, h4, h5 ,h6, p, span, li{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
}
/*color variables*/
:root{
    /*colors*/

    --yellow: #fad44f;
    --pink: #f472b8;
    --blue: #46ebaf;
    --white: #fff;
    --single_circle: #fffced;
    --white
    /* gray scale pallet*/
    
    --footer_grey: #fafafa;
    --other_cloud_grey: #fbfbfb;
    --around_form_grey: #e6eaeb;
    --letter_grey: #878787;
    --letter_form_grey: #2e2e2e;
    --letter_title_grey:#434343;
    
    /*feedback pallet*/
    --negative: #e83f5b;
    --sucess: #3fe864;
    --error: #f80301;
    
}
`;
export default GlobalStyle;