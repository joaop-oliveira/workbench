// Imports declarations
import * as React from 'react';
import _ from 'lodash';
import { contentfulContext } from '../../Contexts/Contentful';
import { Card } from '../../Components';
import { EntryCollection } from 'contentful';

// Exports Declarations
export { Post } from './Post';

interface Props {
  path: string;
}

export function Posts(props: Props) {
  const contentful = React.useContext(contentfulContext);
  const [entries, setEntries] = React.useState<EntryCollection<unknown>>();

  React.useEffect(() => {
    contentful
      .getEntries()
      .then(setEntries)
      .catch(console.error);
    return () => {
      console.log("I'm out!!");
    };
  }, []);

  if (_.isEmpty(entries)) return <h5>Loading...</h5>;
  return (
    <div className="row">
      {entries &&
        entries.items.map(entry => (
          <div className="col-md-4">
            <Card
              key={entry.sys.id}
              // @ts-ignore
              image={entry.fields.image.fields.file.url}
              // @ts-ignore
              title={entry.fields.title}
              // @ts-ignore
              body={entry.fields.body}
              // @ts-ignore
              // @ts-ignore
              category={entry.fields.category}
              entry={entry.sys.id}
            />
          </div>
        ))}
    </div>
  );
}
