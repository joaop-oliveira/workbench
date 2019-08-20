import * as React from 'react';
import { Link } from '@reach/router';

interface Props {
  children: React.ReactElement | string;
  title: string;
}

export function CardBody({ children, title }: Props) {
  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text text-truncate mb-3">{children}</p>
      <Link className="btn btn-outline-primary" to="post">
        Ver mais...
      </Link>
    </div>
  );
}
