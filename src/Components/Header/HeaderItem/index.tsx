import * as React from 'react';
import { Link } from '@reach/router';

interface Props {
  to: string;
  children: React.ReactElement | string;
}

export function HeaderItem({ to, children }: Props): React.ReactElement {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-link text-light nunito">
        {children} <span className="sr-only">(current)</span>
      </Link>
    </li>
  );
}
