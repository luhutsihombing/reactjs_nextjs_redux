import React from 'react';
import Link from 'next/link';

const BreadCrumb = ({breadcrumb}) => {
  return (
    <div className="ps-breadcrumb 2">
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
  );
};

export default BreadCrumb;
