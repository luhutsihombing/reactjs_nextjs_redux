import React from 'react';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Newletters from '../../components/partials/commons/Newsletters';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import VendorStore from '../../components/partials/vendor/VendorStore';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const VendorStorePage = () => {
  const breadCrumb = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Vendor store'
    }
  ];

  return (
    <div className="site-content">
      <HeaderDefault />
      <HeaderMobile />
      <NavigationList />
      <div className="ps-page--single ps-page--vendor">
        <BreadCrumb breadcrumb={breadCrumb} />
        <VendorStore />
      </div>
      <Newletters layout="container" />
      <FooterDefault />
    </div>
  );
};

export default VendorStorePage;
