import {createGlobalStyle} from 'styled-components'



export  const GlobalStyles = createGlobalStyle`



    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Space Mono", monospace;
    }

    html{
        font-size: 62.5%;
    }

    body{
        min-width: 375px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #C5E4E7;

        @media only screen and (min-width:1440px) {
            justify-content: center;
            
        }

    }
`;