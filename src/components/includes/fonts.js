import gblwoff from "../../../static/fonts/gbl.woff"
import gblwoff2 from "../../../static/fonts/gbl.woff2"

import gbowoff from "../../../static/fonts/gbo.woff"
import gbowoff2 from "../../../static/fonts/gbo.woff2"

import gboowoff from "../../../static/fonts/gboo.woff"
import gboowoff2 from "../../../static/fonts/gboo.woff2"

import gmewoff from "../../../static/fonts/gme.woff"
import gmewoff2 from "../../../static/fonts/gme.woff2"

import grewoff from "../../../static/fonts/gre.woff"
import grewoff2 from "../../../static/fonts/gre.woff2"

import gliwoff from "../../../static/fonts/gli.woff"
import gliwoff2 from "../../../static/fonts/gli.woff2"

import rmwoff from "../../../static/fonts/rm.woff"
import rmwoff2 from "../../../static/fonts/rm.woff2"

import playfairBoldWoff from "../../../static/fonts/playfair/PlayfairDisplay-Bold.woff"
import playfairBoldWoff2 from "../../../static/fonts/playfair/PlayfairDisplay-Bold.woff2"

import playfairWoff from "../../../static/fonts/playfair/PlayfairDisplay-Regular.woff"
import playfairWoff2 from "../../../static/fonts/playfair/PlayfairDisplay-Regular.woff2"

import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  @font-face {
    font-family: 'zero-black';
    src: url(${gblwoff2}) format('woff2'),
         url(${gblwoff}) format('woff')
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'zero-bold';
    src: url(${gbowoff2}) format('woff2'),
         url(${gbowoff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'zero-book';
    src: url(${gboowoff2}) format('woff2'),
         url(${gboowoff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'zero-medium';
    src: url(${gmewoff2}) format('woff2'),
         url(${gmewoff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'zero-regular';
    src: url(${grewoff2}) format('woff2'),
         url(${grewoff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'zero-light';
    src: url(${gliwoff2}) format('woff2'),
         url(${gliwoff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
      font-family:"Roboto Mono";
      src: url(${rmwoff2}) format("woff2"),
           url(${rmwoff}) format("woff");
      font-style:normal;
      font-weight:400;
      font-display: swap;
  }
  @font-face {
      font-family:"Playfair Bold";
      src: url(${playfairBoldWoff2}) format("woff2"),
           url(${playfairBoldWoff}) format("woff");
      font-style:normal;
      font-weight:400;
      font-display: swap;
  }
  @font-face {
      font-family:"Playfair Regular";
      src: url(${playfairWoff2}) format("woff2"),
           url(${playfairWoff}) format("woff");
      font-style:normal;
      font-weight:400;
      font-display: swap;
  }
`
