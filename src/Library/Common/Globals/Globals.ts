"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-style: normal;
        vertical-align: middle;
        line-height: 1.5;
        font-weight: 400;
        font-family: var(--poppins-font), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif !important;
    }

    main, article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }


    a {
        text-decoration: none;
        display: inline-block;
    }


    body {
        height: 100%;
        min-width: 320px;
    }


    ol, ul, li {
        list-style: none;
    }


    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    [hidden] {
        display: none;
    }


    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        //-webkit-appearance: none;
        //margin: 0;
    }


    ::-webkit-scrollbar {
        //width: 8px;
    }


    ::-webkit-scrollbar-track {
        //box-shadow: inset 0 0 4px grey;
        //border-radius: 10px;
    }


    ::-webkit-scrollbar-thumb {
        //background: lightgray;
        //border-radius: 10px;
    }


    ::-webkit-scrollbar-thumb:hover {
        //background: gray;
    }


    input[type=number] {
        -moz-appearance: textfield;
    }


    svg {
        transition: all 0.3s ease-in-out;
    }


    .displayNone {
        display: none;
        transition: all 0.3s ease-in-out;
    }

    .positionRelative {
        position: relative;
    }

    .positionFixed {
        position: fixed;
        top: 0;
        left: 0;
    }


    .rotate {
        transform: rotate(180deg);
        transition: all 0.3s ease-in-out;
    }

    .small-logo {
        width: 48px;
        height: 48px;
    }

    .main-logo {
        height: 100px;
        width: auto;
    }

    .svg-logo-cls-1 {
        fill: green;
    }


    #examSimulatorPage ~ .woot-widget-holder woot--hide woot-elements--right, #examSimulatorPage ~ #cw-widget-holder, #examSimulatorPage ~ .woot--bubble-holder, #examSimulatorPage ~ .cw-bubble-holder {
        display: none !important;
        visibility: hidden !important;
        height: 0 !important;
        width: 0 !important;
    }


    .light {
        --grey-100: #1E202A;
        --grey-200: #2A2C31;
        --grey-300: #37383E;
        --grey-400: #424349;
        --grey-500: #60626B;
        --grey-600: #8C8D91;
        --grey-700: #B3B4B7;
        --grey-800: #DADADD;
        --grey-900: #F4F5F5;
        --grey-1000: #FAFAFA;
        --primary-black: #1D1C1D;
        --secondary-black: #424349;
        --main-color: #4f29f3;
        --danger: #d41a1a;
        --success: #07B262
    }


    .dark {
        --grey-100: #1E202A;
        --grey-200: #2A2C31;
        --grey-300: #37383E;
        --grey-400: #424349;
        --grey-500: #60626B;
        --grey-600: #8C8D91;
        --grey-700: #B3B4B7;
        --grey-800: #DADADD;
        --grey-900: #F4F5F5;
        --grey-1000: #FAFAFA;
        --primary-black: green;
        --secondary-black: #424349;
        --main-color: #4f29f3;

    }
`;
