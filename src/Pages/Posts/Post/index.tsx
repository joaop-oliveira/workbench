// Imports Decalaration
import * as React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { contentfulContext } from '../../../Contexts/Contentful';
import { Entry, ContentfulClientApi } from 'contentful';
import { Post } from '../../../Components/Post';

interface Props {
  path: string;
  id: string;
}
interface Post {
  title: string;
  body: string;
  category: string;
  date: string;
  tags: string;
}

export function PostPage({ id, path }: Props) {
  const contentful: ContentfulClientApi = React.useContext<ContentfulClientApi>(contentfulContext);
  const [entry, setEntry] = React.useState<Entry<Post>>();
  React.useEffect(() => {
    contentful
      .getEntry<Post>(id)
      .then(setEntry)
      .catch(console.error);
    return () => {};
  }, []);
  if (_.isEmpty(entry)) return <h1>Loading...</h1>;

  return (
    <div className="row">
      <div className="col-md-12">
        {entry && (
          <Post title={entry.fields.title} date={entry.fields.date} tags={entry.fields.tags} body={entry.fields.body} />
        )}
      </div>
    </div>
  );
}
