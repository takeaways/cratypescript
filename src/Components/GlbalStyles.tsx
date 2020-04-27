import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  a{
    text-decoration:none;
    color:inherit;
  }
  *{
    box-sizing:border-box;
  }
  body{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:1rem;
    background-color:#f3f0ff;
    padding-top:50px;
  }

  @media screen and (max-width:500px){
    #small-top-menu{
      display:block !important;
      z-index:1000 !important;
    }
    #logo{
      width:100vw;
      position:absolute;
    }
    .wide-top-menu{
      display:none;
    }
  }



`;

export default GlobalStyles