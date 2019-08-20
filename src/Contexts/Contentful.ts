import * as contentful from 'contentful';
import * as React from 'react';

const contentfulClient = contentful.createClient({
  space: 'j2w30zxxhhss',
  accessToken: 'sDCzA28w4Gd9kxGaHWB2HtYV5pWDEiKdS91ExlcHamk'
});

export const contentfulContext = React.createContext(contentfulClient);
