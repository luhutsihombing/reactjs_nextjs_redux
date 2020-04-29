import React, {PureComponent} from 'react';
import Link from 'next/link';
import {Menu} from 'antd';

const {SubMenu} = Menu;

class MenuDropdownMobile extends PureComponent<{
  menuData: {
    type: string;
    url: string;
    endPoint: string;
    text: string;
    alias: string;
    subClass: string;
    subMenu: any[];
  };
}> {
  constructor(props) {
    super(props);
  }

  render() {
    const {menuData} = this.props;
    return (
      <SubMenu
        key="sub1"
        title={
          menuData.type === 'dynamic' ? (
            <Link href={`${menuData.url}/[pid]`} as={`${menuData.url}/${menuData.endPoint}`}>
              <a>{menuData.text}</a>
            </Link>
          ) : (
            <Link href={menuData.url} as={menuData.alias}>
              <a>{menuData.text}</a>
            </Link>
          )
        }>
        {menuData.subMenu ? (
          <ul className={menuData.subClass}>
            {menuData.subMenu.map(subMenuItem => (
              <MenuDropdownMobile menuData={subMenuItem} key={subMenuItem} />
            ))}
          </ul>
        ) : (
          ''
        )}
      </SubMenu>
      /*

            <li className={menuData.subMenu ? 'menu-item-has-children dropdown' : ''}>

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
                        {menuData.subMenu.map((subMenuItem, index) => (
                            <MenuDropdownMobile menuData={subMenuItem} key={index}/>
                        ))}z
                    </ul>
                ) : (
                    ''
                )}
            </li>
            * */
    );
  }
}

export default MenuDropdownMobile;
