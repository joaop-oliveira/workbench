// Imports Decalaration
import * as React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { contentfulContext } from '../../../Contexts/Contentful';
import { EntryCollection, Entry, ContentfulClientApi } from 'contentful';

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

export function Post({ id, path }: Props) {
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
          <>
            <div className="row mt-5">
              <div className="col-md-12 d-flex justify-content-between">
                <h2 className=" nunito">{entry.fields.title}</h2>
                <h5 className="nunito mt-3">{moment(entry.fields.date).format('dddd  MMMM  YYYY')}</h5>
              </div>
            </div>
            {entry.fields.tags.split(',').map((tag: string) => (
              <h4 className="badge badge-info nunito">{tag}</h4>
            ))}
            <hr />
            <div className="row">
              <div className="col-md-12">
                <p className="text-justify nunito">{entry.fields.body}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
