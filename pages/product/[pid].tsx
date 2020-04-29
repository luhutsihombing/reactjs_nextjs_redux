import React from 'react';
import Router from 'next/router';
import {connect} from 'react-redux';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import Newletters from '../../components/partials/commons/Newsletters';
import CustomerBought from '../../components/partials/product/CustomerBought';
import ProductDetailFullwidth from '../../components/elements/detail/ProductDetailFullwidth';
import ProductWidgets from '../../components/partials/product/ProductWidgets';
import NavigationList from '../../components/shared/navigation/NavigationList';
import BreadCrumb from '../../components/elements/BreadCrumb';
import RelatedProductFullwidth from '../../components/partials/product/RelatedProductFullwidth';
import HeaderMobileProduct from '../../components/shared/header-mobile/HeaderMobileProduct';
import {getProductsById} from '../../store/product/action';
import HeaderProduct from '../../components/shared/headers/HeaderProduct';

class ProductDefaultPage extends React.Component<{
  query: {pid: string};
  singleProduct: {title: string};
}> {
  constructor(props) {
    super(props);
  }

  static async getInitialProps(ctx) {
    ctx.store.dispatch(getProductsById(ctx.query.pid));
    return {query: ctx.query};
  }

  componentDidMount() {
    const {pid} = this.props.query;
    if (isNaN(Number(pid))) {
      Router.push('/page/page-404');
    }
  }

  render() {
    const {singleProduct} = this.props;
    const breadCrumb = [
      {
        text: 'Home',
        url: '/'
      },
      {
        text: 'Shop',
        url: '/shop'
      },
      {
        text: singleProduct.title
      }
    ];

    return (
      <div className="site-content">
        <HeaderProduct productData={singleProduct} />
        <HeaderMobileProduct />
        <NavigationList />
        <BreadCrumb breadcrumb={breadCrumb} layout="fullwidth" />
        <div className="ps-page--product">
          <div className="ps-container">
            <div className="ps-page__container">
              <div className="ps-page__left">
                <ProductDetailFullwidth product={singleProduct} />
              </div>
              <div className="ps-page__right">
                <ProductWidgets />
              </div>
            </div>
            <CustomerBought layout="fullwidth" />
            <RelatedProductFullwidth />
          </div>
        </div>
        <Newletters />
        <FooterDefault />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.product;
};

export default connect(mapStateToProps)(ProductDefaultPage);
