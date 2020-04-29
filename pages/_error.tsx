import React from 'react';
import Custom404 from './404';

function Error({statusCode}) {
  return <Custom404 statusCode={statusCode} />;
}

export default Error;
