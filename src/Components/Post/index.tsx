// Import Declaration
import * as React from 'react';
import { PostTitle } from './PostTitle';
import { PostBody } from './PostBody';

// Post Props interface
interface Props {
  title: string;
  date: string;
  body: string;
  tags: string;
}

export function Post({ title, date, body, tags }: Props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <PostTitle title={title} date={date} tags={tags} />
        <PostBody body={body} />
      </div>
    </div>
  );
}
