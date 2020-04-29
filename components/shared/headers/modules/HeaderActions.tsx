import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';

import MiniCart from './MiniCart';
import AccountQuickLinks from './AccountQuickLinks';

class HeaderActions extends PureComponent<{
  compare?: {
    compareTotal: string;
  };
  wishlist?: {
    wishlistTotal: string;
  };
  auth?: {
    isLoggedIn: boolean;
  };
}> {
  constructor(props) {
    super(props);
  }

  render() {
    const {compare, wishlist, auth} = this.props;
    return (
      <div className="header__actions">
        <Link href="/account/compare">
          <a className="header__extra">
            <i className="icon-chart-bars" />
            <span>
              <i>{compare?.compareTotal}</i>
            </span>
          </a>
        </Link>
        <Link href="/account/wishlist">
          <a className="header__extra">
            <i className="icon-heart" />
            <span>
              <i>{wishlist.wishlistTotal}</i>
            </span>
          </a>
        </Link>
        <MiniCart />
        <AccountQuickLinks isLoggedIn={auth.isLoggedIn} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(HeaderActions);
