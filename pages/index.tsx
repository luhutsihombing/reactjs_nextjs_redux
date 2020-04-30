import React, {useEffect, useState} from 'react';
import HeaderDefault from '../components/shared/headers/HeaderDefault';
import FooterFullwidth from '../components/shared/footers/FooterFullwidth';
import HomeBanner from '../components/partials/homepage/home-default/HomeBanner';
import SiteFeatures from '../components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '../components/partials/homepage/home-default/HomeAdsColumns';
import ConsumerElectronics from '../components/partials/homepage/home-default/ConsumerElectronics';
import Clothings from '../components/partials/homepage/home-default/Clothings';
import GardenAndKitchen from '../components/partials/homepage/home-default/GardenAndKitchen';
import HomeAds from '../components/partials/homepage/home-default/HomeAds';
import DownLoadApp from '../components/partials/commons/DownLoadApp';
import NewArrivals from '../components/partials/homepage/home-default/NewArrivals';
import Newsletters from '../components/partials/commons/Newsletters';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import HomeDefaultDealOfDay from '../components/partials/homepage/home-default/HomeDefaultDealOfDay';
import HomeDefaultTopCategories from '../components/partials/homepage/home-default/HomeDefaultTopCategories';
import SubscribePopup from '../components/shared/SubscribePopup';
import Carousel from '../components/partials/homepage/fifada/carousel/Carousel';
// import '../scss/home-default.scss';

const Index = () => {
  const [subscribe, setSubscribe] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSubscribe(true);
    }, 10000);
  });
  return (
    <div className="site-content">
      <HeaderDefault />
      <HeaderMobile />
      <NavigationList />
      <SubscribePopup active={subscribe} />
      <main id="homepage-1">
        <HomeBanner />
        <SiteFeatures />
        <Carousel />
        <HomeDefaultDealOfDay />
        <HomeAdsColumns />
        <HomeDefaultTopCategories />
        <ConsumerElectronics />
        <Clothings />
        <GardenAndKitchen />
        <HomeAds />
        <DownLoadApp />
        <NewArrivals />
        <Newsletters />
      </main>
      <FooterFullwidth />
    </div>
  );
};
export default Index;
