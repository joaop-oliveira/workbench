// Import Declaration
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from './CodeBlock';

interface Props {
  body: string;
}

export function PostBody({ body }: Props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="text-justify nunito" data-cy="post-body">
          <ReactMarkdown source={body} renderers={{ code: CodeBlock }} />
        </div>
      </div>
    </div>
  );
}
