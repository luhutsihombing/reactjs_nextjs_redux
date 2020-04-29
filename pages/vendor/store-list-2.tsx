import React from 'react';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Newletters from '../../components/partials/commons/Newsletters';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import StoreList2 from '../../components/partials/vendor/StoreList2';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const StoreListPage = () => {
  const breadCrumb = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Store List'
    }
  ];

  return (
    <div className="site-content">
      <HeaderDefault />
      <HeaderMobile />
      <NavigationList />
      <div className="ps-page--single ps-page--vendor">
        <BreadCrumb breadcrumb={breadCrumb} />
        <StoreList2 />
      </div>
      <Newletters layout="container" />
      <FooterDefault />
    </div>
  );
};

export default StoreListPage;
