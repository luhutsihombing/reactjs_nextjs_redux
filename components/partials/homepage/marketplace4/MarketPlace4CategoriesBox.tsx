import React, {PureComponent} from 'react';
import CategoriesBoxConsumerElectronics from './modules/CategoriesBoxConsumerElectronics';
import CategoriesBoxClothings from './modules/CategoriesBoxClothings';
import CategoriesBoxGardenAndKitchen from './modules/CategoriesBoxGardenAndKitchen';

class MarketPlace4CategoriesBox extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ps-categories-box">
        <div className="container">
          <CategoriesBoxConsumerElectronics />
          <CategoriesBoxClothings />
          <CategoriesBoxGardenAndKitchen />
        </div>
      </div>
    );
  }
}

export default MarketPlace4CategoriesBox;
