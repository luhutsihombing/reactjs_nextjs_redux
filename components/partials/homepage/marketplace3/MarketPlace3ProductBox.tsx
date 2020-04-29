import React from 'react';
import {
  home_3_clothing as home3Clothing,
  home_3_electronic as home3Electronics
} from '../../../../public/static/data/martketplace.json';

import MarketPlace3Promotions from './MarketPlace3Promotions';
import Market3ConsumerElectronics from './modules/Market3ConsumerElectronics';
import Market3Clothing from './modules/Market3Clothing';
import Market3GardenAndKitchen from './modules/Market3GardenAndKitchen';

const MarketPlace3ProductBox = () => (
  <div className="ps-product-box">
    <div className="container">
      <MarketPlace3Promotions />
      <Market3ConsumerElectronics data={home3Electronics} />
      <Market3Clothing data={home3Clothing} />
      <Market3GardenAndKitchen data={home3Electronics} />
    </div>
  </div>
);

export default MarketPlace3ProductBox;
