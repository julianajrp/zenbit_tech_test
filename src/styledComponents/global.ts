import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root{
    /*colors*/

    --yellow: #fad44f;
    --pink: #f472b8;
    --blue: #46ebaf;
    --single_circle: #fffced;

    /* gray scale pallet*/
    
    --footer_grey: #fafafa;
    --other_cloud_grey: #fbfbfb;
    --around_form_grey: #e6eaeb;
    --letter_grey: #878787;
    --letter_form_grey: #2e2e2e;
    
    /*feedback pallet*/
    --negative: #e83f5b;
    --sucess: #3fe864;
    
}
`;
export default GlobalStyle;