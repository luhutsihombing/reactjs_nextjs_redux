import React from 'react';

import DefaultHead from './modules/Head';
import BackToTop from '../elements/BackToTop';

const DefaultLayout = ({children}) => (
  <div className="layout--default">
    <DefaultHead />
    {children}
    <div id="loader-wrapper">
      <div className="loader-section section-left" />
      <div className="loader-section section-right" />
    </div>
    <BackToTop scrollStepInPx={1000} delayInMs={0.5} />
  </div>
);

export default DefaultLayout;
