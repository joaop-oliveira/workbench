import * as React from 'react';
import moment from 'moment';
import { v4 } from 'uuid';

interface Props {
  title: string;
  date: string;
  tags: string;
}

export function PostTitle({ title, date, tags }: Props) {
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-12 d-flex justify-content-between">
          <h2 className="nunito" data-cy="post-title">
            {title}
          </h2>
          <h5 className="nunito mt-3" data-cy="post-date">
            {moment(date).format('dddd  MMMM  YYYY')}
          </h5>
        </div>
      </div>
      {tags.split(',').map((tag: string) => (
        <h4 key={v4()} className="badge badge-info nunito" data-cy="post-tags">
          {tag}
        </h4>
      ))}
      <hr />
    </>
  );
}
