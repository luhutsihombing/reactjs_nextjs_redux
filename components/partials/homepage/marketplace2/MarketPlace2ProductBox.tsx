import React from 'react';
import {
  home_3_clothing as home3Clothing,
  home_3_electronic as home3Electronic,
  home_3_garden_kitchen as home3GardenKitchen,
  home_3_healthy as home3Healthy,
  home_3_technology as home3Technology
} from '../../../../public/static/data/martketplace.json';
import Market2ConsumerElectronics from './modules/Market2ConsumerElectronics';
import Market2Clothing from './modules/Market2Clothing';
import Market2ComputerAndTechnology from './modules/Market2ComputerAndTechnology';
import Market2GardenAndKitchen from './modules/Market2GardenAndKitchen';
import Market2HealthyAndBeauty from './modules/Market2HealthyAndBeauty';

const MarketPlace2ProductBox = () => (
  <div>
    <Market2ConsumerElectronics data={home3Electronic} />
    <Market2Clothing data={home3Clothing} />
    <Market2ComputerAndTechnology data={home3Technology} />
    <Market2GardenAndKitchen data={home3GardenKitchen} />
    <Market2HealthyAndBeauty data={home3Healthy} />
  </div>
);

export default MarketPlace2ProductBox;
