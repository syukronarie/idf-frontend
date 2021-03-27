import { createGlobalStyle } from "styled-components";

import COLORS from "./globalColors";

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    line-height:0;
	font-size: 12rem;
	height:1000rem;

    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
    	margin: 0;
    	padding: 0;
    	border: 0;
    	font-size: 100%;
    	font: inherit;
    	vertical-align: baseline;
    	text-decoration: none;
    	color: inherit;
    }
    
    
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
    	display: block;
    }
    
    body {
    	line-height: 1;
    }
    
    ol,
    ul {
    	list-style: none;
    }
    
    blockquote,
    q {
    	quotes: none;
    }
    
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
    	content: "";
    	content: none;
    }
    
    table {
    	border-collapse: collapse;
    	border-spacing: 0;
    }
    
    button {
    	background-color: rgba(0, 0, 0, 0);
    	border: 0;
    	cursor: pointer;
    
    	&:focus {
    		outline: none;
    	}
    }

	::-webkit-scrollbar {
		width: 16px;
		height: 16px;
	}
    
	::-webkit-scrollbar-thumb {
        border-radius: 40px; 
        background-color: ${COLORS.FUN_BLUE[500]};
        box-shadow: inset 2px 2px 2px hsl(0deg 0% 100% / 25%), inset -2px -2px 2px rgb(0 0 0 / 25%);
	}
    
	::-webkit-scrollbar-track {
		background: ${COLORS.FUN_BLUE[200]};
	}
	
  }
`;

export default GlobalStyle;
