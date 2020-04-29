import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getProducts} from '../../store/product/action';
import {
  categories,
  clothingCollection,
  electronicCollection,
  kitchenCollection
} from '../../public/static/data/shopCategories.json';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import Newletters from '../../components/partials/commons/Newsletters';
import BreadCrumb from '../../components/elements/BreadCrumb';
import CatalogTop from '../../components/partials/shop/CatalogTop';
import CategoriesBestSeller from '../../components/partials/shop/CategoriesBestSeller';
import CategoriesRecommendItems from '../../components/partials/shop/CategoriesRecommendItems';
import ConsumerElectronics from '../../components/partials/shop/categories-box/ConsumerElectronics';
import ClothingAndApparel from '../../components/partials/shop/categories-box/ClothingAndApparel';
import GardenAndKitchen from '../../components/partials/homepage/home-default/GardenAndKitchen';
import MoreCategories from '../../components/partials/shop/MoreCategories';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';

class ShopCategoriesPage extends Component<{}, {breadCrumb: {text: string; url?: string}[]}> {
  constructor(props) {
    super(props);
    this.state = {
      breadCrumb: [
        {
          text: 'Home',
          url: '/'
        },
        {
          text: 'Shop Categories'
        }
      ]
    };
  }

  componentDidMount() {
    this.props.dispatch(getProducts());
  }

  render() {
    const {allProducts} = this.props;
    return (
      <div className="site-content">
        <HeaderDefault />
        <HeaderMobile />
        <NavigationList />
        <BreadCrumb breadcrumb={this.state.breadCrumb} />
        <div className="ps-page--shop" id="shop-categories">
          <div className="container">
            <CatalogTop />
            <CategoriesBestSeller products={allProducts || []} />
            <CategoriesRecommendItems products={allProducts || []} />
            <ConsumerElectronics data={electronicCollection} />
            <ClothingAndApparel data={clothingCollection} />
            <GardenAndKitchen data={kitchenCollection} />
            <MoreCategories data={categories} />
          </div>
        </div>
        <Newletters />
        <FooterDefault />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.product;
};
export default connect(mapStateToProps)(ShopCategoriesPage);
