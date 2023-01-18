import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import StarMatch from '../components/App';

export async function serverRenderer() {
  const initialData = {
    appName: 'Reactful',
  };

  const pageData = {
    title: `Hello ${initialData.appName}`,
  };

  return Promise.resolve({
    initialData,
    initialMarkup: ReactDOMServer.renderToString(
      <StarMatch initialData={initialData} />,
    ),
    pageData,
  });
}
