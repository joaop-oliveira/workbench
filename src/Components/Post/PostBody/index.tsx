// Import Declaration
import * as React from 'react';
import marked from 'marked';

interface Props {
  body: string;
}

export function PostBody({ body }: Props) {
  const md = marked(body);
  console.log(md);
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="text-justify nunito" data-cy="post-body">
          {md}
        </div>
      </div>
    </div>
  );
}
