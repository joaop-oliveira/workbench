import * as React from 'react';

interface Props {
  // entry: string;
  path: string;
}

export function Posts({ path }: Props) {
  return <h1>{path}</h1>;
}
