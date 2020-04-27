import React from 'react';

import Head from './modules/Head';
import BackToTop from '../elements/BackToTop';

const DefaultLayout = ({ children }) => (
    <div className="layout--default">
        <Head ><title>default title</title></Head>
        {children}
        <div id="loader-wrapper">
            <div className="loader-section section-left"/>
            <div className="loader-section section-right"/>
        </div>
        <BackToTop scrollStepInPx="1000" delayInMs="0.5" />
    </div>
);

export default DefaultLayout;
