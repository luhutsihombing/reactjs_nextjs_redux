import React from 'react';
import Link from 'next/link';

import MegaMenu from './MegaMenu';
import MenuDropdown from './MenuDropdown';

const Menu = ({data, className}) => {
  let keyCounter = 0;

  return (
    <ul className={className}>
      {data &&
        data.map(item => {
          if (item.subMenu) {
            return <MenuDropdown menuData={item} key={keyCounter++} />;
          } else if (item.megaContent) {
            return <MegaMenu menuData={item} key={keyCounter++} />;
          } else {
            return (
              <li key={keyCounter++}>
                {item.type === 'dynamic' ? (
                  <Link href={`${item.url}/[pid]`} as={`${item.url}/${item.endPoint}`}>
                    <a>{item.text}</a>
                  </Link>
                ) : (
                  <Link href={item.url} as={item.alias}>
                    <a>{item.text}</a>
                  </Link>
                )}
              </li>
            );
          }
        })}
    </ul>
  );
};

export default Menu;
