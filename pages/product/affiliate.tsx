import React from 'react';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newsletters';
import CustomerBought from '../../components/partials/product/CustomerBought';
import RelatedProduct from '../../components/partials/product/RelatedProduct';
import BreadCrumb from '../../components/elements/BreadCrumb';
import ProductDetailAffiliate from '../../components/elements/detail/ProductDetailAffiliate';
import ProductWidgets from '../../components/partials/product/ProductWidgets';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const ProductAffiliatePage = () => {
  const breadCrumb = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Consumer Electrics',
      url: '/shop'
    },
    {
      text: 'Refrigerators',
      url: '/shop'
    },
    {
      text: 'Marshall Kilburn Portable Wireless Speaker'
    }
  ];

  return (
    <div className="site-content">
      <HeaderDefault />
      <HeaderMobile />
      <NavigationList />
      <BreadCrumb breadcrumb={breadCrumb} />
      <div className="ps-page--product">
        <div className="ps-container">
          <div className="ps-page__container">
            <div className="ps-page__left">
              <ProductDetailAffiliate />
            </div>
            <div className="ps-page__right">
              <ProductWidgets />
            </div>
          </div>
          <CustomerBought />
          <RelatedProduct />
        </div>
      </div>
      <Newletters />
      <FooterDefault />
    </div>
  );
};

export default ProductAffiliatePage;
