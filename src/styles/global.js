import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
     @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html,
    body,
    #root {
        height: 100%; 
        width: 100%;
        background-color: #f4f4f4; 
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        -webkit-font-smoothing: antialiased !important;
        text-decoration: none;
    }
`