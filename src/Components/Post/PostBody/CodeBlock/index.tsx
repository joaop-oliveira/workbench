import * as React from 'react';
import { Prism } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
  block: string;
}

export function CodeBlock(props: Props) {
  return (
    <Prism language="javascript" style={docco}>
      {props.block}
    </Prism>
  );
}
