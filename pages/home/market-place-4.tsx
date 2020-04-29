import React, {useEffect, useState} from 'react';

import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import MarketPlace4Banner from '../../components/partials/homepage/marketplace4/MarketPlace4Banner';
import MarketPlace4SiteFeatures from '../../components/partials/homepage/marketplace4/MarketPlace4SiteFeatures';
import MarketPlace4Promotions from '../../components/partials/homepage/marketplace4/MarketPlace4Promotions';
import MarketPlace4Dealhot from '../../components/partials/homepage/marketplace4/MarketPlace4Dealhot';
import MarketPlace4TopCategories from '../../components/partials/homepage/marketplace4/MarketPlace4TopCategories';
import MarketPlace4CategoriesBox from '../../components/partials/homepage/marketplace4/MarketPlace4CategoriesBox';
import HeaderMarketPlace4 from '../../components/shared/headers/HeaderMarketPlace4';
import FooterMarketPlace2 from '../../components/shared/footers/FooterMarketPlace2';
import SubscribePopup from '../../components/shared/SubscribePopup';
import {productWidget} from '../../public/static/data/martketplace.json';

// import '../../scss/market-place-4.scss';

const HomeMarketPlace4Page = () => {
  const [subscribe, setSubscribe] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSubscribe(true);
    }, 10000);
  });

  return (
    <div className="site-content">
      <HeaderMarketPlace4 />
      <HeaderMobile />
      <NavigationList />
      <SubscribePopup active={subscribe} />
      <main id="homepage-6">
        <MarketPlace4Banner />
        <MarketPlace4SiteFeatures />
        <MarketPlace4Promotions />
        <MarketPlace4Dealhot data={productWidget} />
        <MarketPlace4TopCategories />
        <MarketPlace4CategoriesBox />
      </main>
      <FooterMarketPlace2 />
    </div>
  );
};

export default HomeMarketPlace4Page;
