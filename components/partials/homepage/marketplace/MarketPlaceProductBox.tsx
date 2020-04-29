import React, {PureComponent} from 'react';

import {
  home_3_clothing as home3Clothing,
  home_3_electronic as home3Electronic,
  home_3_garden_kitchen as home3GardenKitchen,
  home_3_healthy as home3Healthy,
  home_3_technology as home3Technology
} from '../../../../public/static/data/martketplace.json';
import MarketClothingsAndApparel from './modules/MarketClothingsAndApparel';
import MarketComputerAndTechnology from './modules/MarketComputerAndTechnology';
import MarketConsumerElectronics from './modules/MarketConsumerElectronics';
import MarketGardenAndKitchen from './modules/MarketGardenAndKitchen';
import MarketHealthyAndBeauty from './modules/MarketHealthyAndBeauty';

class MarketPlaceProductBox extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ps-section--gray">
        <div className="container">
          <MarketClothingsAndApparel data={home3Clothing} />
          <MarketConsumerElectronics data={home3Electronic} />
          <MarketComputerAndTechnology data={home3Technology} />
          <MarketGardenAndKitchen data={home3GardenKitchen} />
          <MarketHealthyAndBeauty data={home3Healthy} />
        </div>
      </div>
    );
  }
}

export default MarketPlaceProductBox;
