import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';

import MiniCart from './MiniCart';
import AccountQuickLinks from './AccountQuickLinks';

class ElectronicHeaderActions extends PureComponent<{
  wishlist: {
    wishlistTotal: number;
  };
  auth: {
    isLoggedIn: boolean;
  };
}> {
  constructor(props) {
    super(props);
  }

  render() {
    const {wishlist, auth} = this.props;
    return (
      <div className="header__actions">
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

export default connect(mapStateToProps)(ElectronicHeaderActions);
