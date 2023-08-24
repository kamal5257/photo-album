import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
.boxContainer{
    background-color:${({theme})=>theme.BoxContainer};
    box-shadow: 0 0 2px ${({theme})=>theme.BoxContainerBorder};
}
body{
    background-color:${({theme})=>theme.BoxContainer};
}

`