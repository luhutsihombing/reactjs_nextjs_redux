import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import MiniCart from './MiniCart';
import AccountQuickLinks from './AccountQuickLinks';

class MobileHeaderActions extends PureComponent<{
  auth?: {
    isLoggedIn: boolean;
  };
}> {
  constructor(props) {
    super(props);
  }

  render() {
    const {auth} = this.props;
    return (
      <div className="header__actions">
        <MiniCart />
        <AccountQuickLinks isLoggedIn={auth.isLoggedIn} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(MobileHeaderActions);
