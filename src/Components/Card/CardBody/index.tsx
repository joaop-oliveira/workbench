import * as React from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

interface Props {
  children: React.ReactElement | string;
  title: string;
  category: string;
  entry: string;
}

export function CardBody({ children, title, category, entry }: Props) {
  return (
    <div className="card-body">
      <h5 className="card-title text-secondary nunito">{title}</h5>
      <h4 className="badge badge-info nunito">{category}</h4>
      <p className="card-text text-truncate mb-3 mt-3 text-secondary nunito">{children}</p>
      <Link className="btn btn-outline-info nunito" to={`/post/${entry}`}>
        Ver mais...{' '}
        <span>
          <FontAwesomeIcon icon={faEye} />
        </span>
      </Link>
    </div>
  );
}
