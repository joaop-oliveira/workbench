import * as React from 'react';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';

interface Props {
  image: string;
  title: string;
  body: string;
}

export function Card({ image, body, title }: Props) {
  return (
    <div className="card border-0 shadow-sm">
      <CardHeader source={image} />
      <CardBody title={title}>{body}</CardBody>
    </div>
  );
}
