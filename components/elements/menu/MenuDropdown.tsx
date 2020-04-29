import React, {PureComponent} from 'react';
import Link from 'next/link';

class MenuDropdown extends PureComponent<{menuData: any}> {
  constructor(props) {
    super(props);
  }

  render() {
    const {menuData} = this.props;
    return (
      <li className={menuData.subMenu ? 'menu-item-has-children dropdown' : ''}>
        {/* <Link href={menuData.url} as={menuData.url}>
                    <a>{menuData.text}</a>
                </Link> */}
        {menuData.type === 'dynamic' ? (
          <Link href={`${menuData.url}/[pid]`} as={`${menuData.url}/${menuData.endPoint}`}>
            <a>{menuData.text}</a>
          </Link>
        ) : (
          <Link href={menuData.url} as={menuData.alias}>
            <a>{menuData.text}</a>
          </Link>
        )}
        {menuData.subMenu ? (
          <ul className={menuData.subClass}>
            {menuData.subMenu.map(subMenuItem => (
              <MenuDropdown menuData={subMenuItem} key={subMenuItem} />
            ))}
          </ul>
        ) : (
          ''
        )}
      </li>
    );
  }
}

export default MenuDropdown;
