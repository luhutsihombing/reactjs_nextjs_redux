import React from 'react';
import Link from 'next/link';

const BreadCrumb = ({breadcrumb, layout}: {breadcrumb: any[]; layout?: string}) => {
  return (
    <div className="ps-breadcrumb">
      <div className={layout === 'fullwidth' ? 'ps-container' : 'container'}>
        <ul className="breadcrumb">
          {breadcrumb.map(item => {
            if (!item.url) {
              return <li key={item.text}>{item.text}</li>;
            } else {
              return (
                <li key={item.text}>
                  <Link href={item.url}>
                    <a>{item.text}</a>
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumb;
