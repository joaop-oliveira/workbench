// Import Declaration
import * as React from 'react';

interface Props {
  body: string;
}

export function PostBody({ body }: Props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <p className="text-justify nunito" data-cy="post-body">
          {body}
        </p>
      </div>
    </div>
  );
}
