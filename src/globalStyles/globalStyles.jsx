import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
}
body {
    overflow-x: hidden;
    background-color: #f1ebe5 ;
    color: #1c1c1c;
}
a {
    text-decoration: none;
}
`