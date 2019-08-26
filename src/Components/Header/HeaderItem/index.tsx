import * as React from 'react';
import { Link } from '@reach/router';

interface Props {
  to: string;
  children: React.ReactElement | string;
  datacy: string;
}

export function HeaderItem({ to, children, datacy }: Props): React.ReactElement {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-link text-light nunito" data-cy={datacy}>
        {children} <span className="sr-only">(current)</span>
      </Link>
    </li>
  );
}
