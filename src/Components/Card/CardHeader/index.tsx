import * as React from 'react';

interface Props {
  source: string;
}

export function CardHeader({ source }: Props) {
  return <img src={source} height="200" width="100" className="card-img-top" />;
}
