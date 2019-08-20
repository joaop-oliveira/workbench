import * as React from 'react';

interface Props {
  source: string;
}

export function CardHeader({ source }: Props) {
  return <img src={source} className="card-img-top" />;
}
