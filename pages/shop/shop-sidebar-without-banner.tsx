import React from 'react';
import {connect} from 'react-redux';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newsletters';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import LayoutShopSidebarWithoutBanner from '../../components/partials/shop/LayoutShopSidebarWithoutBanner';

import {getProducts, getProductsByBrand, getProductsByCategory} from '../../store/product/action';

class ShopSidebarWithoutBannerPage extends React.Component<{allProducts: any[]}> {
  constructor(props) {
    super(props);
  }

  static async getInitialProps(ctx) {
    if (Object.entries(ctx.query).length > 0) {
      if (ctx.query.category) {
        ctx.store.dispatch(getProductsByCategory(ctx.query.category));
      } else if (ctx.query.brand !== '') {
        ctx.store.dispatch(getProductsByBrand(ctx.query.brand));
      } else {
        ctx.store.dispatch(getProducts());
      }
    } else {
      ctx.store.dispatch(getProducts());
    }
    return {query: ctx.query};
  }

  render() {
    const breadCrumb = [
      {
        text: 'Home',
        url: '/'
      },
      {
        text: 'Shop Sidebar'
      }
    ];
    const {allProducts} = this.props;
    return (
      <div className="site-content">
        <HeaderDefault />
        <HeaderMobile />
        <NavigationList />
        <BreadCrumb breadcrumb={breadCrumb} />
        <div className="ps-page--shop" id="shop-sidebar">
          <div className="container">
            <LayoutShopSidebarWithoutBanner products={allProducts} />
          </div>
        </div>
        <Newletters layout="container" />
        <FooterDefault />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.product;
};

export default connect(mapStateToProps)(ShopSidebarWithoutBannerPage);
