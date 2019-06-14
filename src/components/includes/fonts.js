import gblttf from '../../../static/fonts/gbl.ttf';
import gblsvg from '../../../static/fonts/gbl.svg';
import gblwoff from '../../../static/fonts/gbl.woff';
import gblwoff2 from '../../../static/fonts/gbl.woff2';
import gbleot from '../../../static/fonts/gbl.eot';

import gbottf from '../../../static/fonts/gbo.ttf';
import gbosvg from '../../../static/fonts/gbo.svg';
import gbowoff from '../../../static/fonts/gbo.woff';
import gbowoff2 from '../../../static/fonts/gbo.woff2';
import gboeot from '../../../static/fonts/gbo.eot';

import gboottf from '../../../static/fonts/gboo.ttf';
import gboosvg from '../../../static/fonts/gboo.svg';
import gboowoff from '../../../static/fonts/gboo.woff';
import gboowoff2 from '../../../static/fonts/gboo.woff2';
import gbooeot from '../../../static/fonts/gboo.eot';

import gmettf from '../../../static/fonts/gme.ttf';
import gmesvg from '../../../static/fonts/gme.svg';
import gmewoff from '../../../static/fonts/gme.woff';
import gmewoff2 from '../../../static/fonts/gme.woff2';
import gmeeot from '../../../static/fonts/gme.eot';

import grettf from '../../../static/fonts/gre.ttf';
import gresvg from '../../../static/fonts/gre.svg';
import grewoff from '../../../static/fonts/gre.woff';
import grewoff2 from '../../../static/fonts/gre.woff2';
import greeot from '../../../static/fonts/gre.eot';

import glittf from '../../../static/fonts/gli.ttf';
import glisvg from '../../../static/fonts/gli.svg';
import gliwoff from '../../../static/fonts/gli.woff';
import gliwoff2 from '../../../static/fonts/gli.woff2';
import glieot from '../../../static/fonts/gli.eot';

import rmttf from '../../../static/fonts/rm.ttf';
import rmwoff from '../../../static/fonts/rm.woff';
import rmwoff2 from '../../../static/fonts/rm.woff2';

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: 'zero-black';
    src: url(${gbleot});
    src: url(${gbleot}) format('embedded-opentype'),
         url(${gblwoff2}) format('woff2'),
         url(${gblwoff}) format('woff'),
         url(${gblttf}) format('truetype'),
         url(${gblsvg}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'zero-bold';
    src: url(${gboeot});
    src: url(${gboeot}) format('embedded-opentype'),
         url(${gbowoff2}) format('woff2'),
         url(${gbowoff}) format('woff'),
         url(${gbottf}) format('truetype'),
         url(${gbosvg}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'zero-book';
    src: url(${gbooeot});
    src: url(${gbooeot}) format('embedded-opentype'),
         url(${gboowoff2}) format('woff2'),
         url(${gboowoff}) format('woff'),
         url(${gboottf}) format('truetype'),
         url(${gboosvg}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'zero-medium';
    src: url(${gmeeot});
    src: url(${gmeeot}) format('embedded-opentype'),
         url(${gmewoff2}) format('woff2'),
         url(${gmewoff}) format('woff'),
         url(${gmettf}) format('truetype'),
         url(${gmesvg}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'zero-regular';
    src: url(${greeot});
    src: url(${greeot}) format('embedded-opentype'),
         url(${grewoff2}) format('woff2'),
         url(${grewoff}) format('woff'),
         url(${grettf}) format('truetype'),
         url(${gresvg}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'zero-light';
    src: url(${glieot});
    src: url(${glieot}) format('embedded-opentype'),
         url(${gliwoff2}) format('woff2'),
         url(${gliwoff}) format('woff'),
         url(${glittf}) format('truetype'),
         url(${glisvg}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
      font-family:"Roboto Mono";
      src:url(${rmwoff2}) format("woff2"),
        url(${rmwoff}) format("woff"),
        url(${rmttf}) format("opentype");
      font-style:normal;
      font-weight:400;
  }
`