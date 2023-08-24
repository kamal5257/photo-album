import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
.boxContainer{
    background-color:${({theme})=>theme.BoxContainer};
}


`