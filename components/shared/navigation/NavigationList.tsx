import React from 'react';
import {connect} from 'react-redux';
import {Drawer} from 'antd';
import PanelMenu from '../panel/PanelMenu';
import PanelCartMobile from '../panel/PanelCartMobile';
import PanelSearch from '../panel/PanelSearch';
import PanelCategories from '../panel/PanelCategories';

interface NavigationState {
  menuDrawer: boolean;
  cartDrawer: boolean;
  searchDrawer: boolean;
  categoriesDrawer: boolean;
}

class NavigationList extends React.Component<any, NavigationState> {
  constructor(props) {
    super(props);
    this.state = {
      menuDrawer: false,
      cartDrawer: false,
      searchDrawer: false,
      categoriesDrawer: false
    };
  }

  handleDrawerClose = () => {
    this.setState({
      menuDrawer: false,
      cartDrawer: false,
      searchDrawer: false,
      categoriesDrawer: false
    });
  };

  handleShowMenuDrawer = () => {
    const {menuDrawer} = this.state;
    this.setState({
      menuDrawer: !menuDrawer,
      cartDrawer: false,
      searchDrawer: false,
      categoriesDrawer: false
    });
  };

  handleShowCartDrawer = () => {
    const {cartDrawer} = this.state;
    this.setState({
      menuDrawer: false,
      cartDrawer: !cartDrawer,
      searchDrawer: false,
      categoriesDrawer: false
    });
  };

  handleShowSearchDrawer = () => {
    const {searchDrawer} = this.state;
    this.setState({
      menuDrawer: false,
      cartDrawer: false,
      searchDrawer: !searchDrawer,
      categoriesDrawer: false
    });
  };

  handleShowCategoriesDrawer = () => {
    const {categoriesDrawer} = this.state;
    this.setState({
      menuDrawer: false,
      cartDrawer: false,
      searchDrawer: false,
      categoriesDrawer: !categoriesDrawer
    });
  };

  render() {
    const {menuDrawer, searchDrawer, cartDrawer, categoriesDrawer} = this.state;

    return (
      <div className="navigation--list">
        <Drawer
          className="ps-panel--mobile"
          placement="right"
          closable={false}
          onClose={this.handleDrawerClose}
          visible={this.state.menuDrawer}>
          <PanelMenu />
        </Drawer>
        <Drawer
          className="ps-panel--mobile"
          placement="right"
          closable={false}
          onClose={this.handleDrawerClose}
          visible={this.state.cartDrawer}>
          <PanelCartMobile />
        </Drawer>
        <Drawer
          className="ps-panel--mobile"
          placement="right"
          closable={false}
          onClose={this.handleDrawerClose}
          visible={this.state.searchDrawer}>
          <PanelSearch />
        </Drawer>
        <Drawer
          className="ps-panel--mobile"
          placement="right"
          closable={false}
          onClose={this.handleDrawerClose}
          visible={this.state.categoriesDrawer}>
          <PanelCategories />
        </Drawer>
        <div className="navigation__content">
          <button
            type="button"
            className={`navigation__item ${menuDrawer === true ? 'active' : ''}`}
            onClick={this.handleShowMenuDrawer}>
            <i className="icon-menu2" />
            <span> Menu</span>
          </button>
          <button
            type="button"
            className={`navigation__item ${categoriesDrawer === true ? 'active' : ''}`}
            onClick={this.handleShowCategoriesDrawer}>
            <i className="icon-list4" />
            <span> Categories</span>
          </button>
          <button
            type="button"
            className={`navigation__item ${searchDrawer === true ? 'active' : ''}`}
            onClick={this.handleShowSearchDrawer}>
            <i className="icon-magnifier" />
            <span> Search</span>
          </button>
          <button
            type="button"
            className={`navigation__item ${cartDrawer === true ? 'active' : ''}`}
            onClick={this.handleShowCartDrawer}>
            <i className="icon-bag2" />
            <span> Carting</span>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.setting;
};
export default connect(mapStateToProps)(NavigationList);
