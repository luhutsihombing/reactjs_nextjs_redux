import React from 'react';

import Newsletters from '../../components/partials/commons/Newsletters';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Notifications from '../../components/partials/account/Notifications';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const AccountNotificationsPage = () => {
  const breadCrumb = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Addresses'
    }
  ];
  return (
    <div className="site-content">
      <HeaderDefault />
      <HeaderMobile />
      <NavigationList />
      <div className="ps-page--my-account">
        <BreadCrumb breadcrumb={breadCrumb} />
        <Notifications />
      </div>
      <Newsletters layout="container" />
      <FooterDefault />
    </div>
  );
};

export default AccountNotificationsPage;
