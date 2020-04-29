import React from 'react';
import ThumbnailBox from './modules/thumbnail/ThumbnailBox';
import InformationBox from './modules/information/InformationBox';
import DescriptionBox from './modules/description/DescriptionBox';
import Product from '../products/Product';

import {products, sample} from '../../../public/static/data/product.json';

const ProductDetailBox = () => (
  <div className="ps-product--detail ps-product--box">
    <div className="ps-product__header ps-product__box">
      <ThumbnailBox product={sample} />
      <InformationBox product={sample as any} />
    </div>
    <div className="ps-product__content">
      <div className="row">
        <div className="col-xl-9">
          <DescriptionBox />
        </div>
        <div className="col-xl-3">
          <div className="ps-product__box">
            <aside className="widget widget_same-brand">
              <h3>Same Brand</h3>
              <div className="widget__content">
                {(products as any).map((product, index) => {
                  return index > 4 && index < 7 ? (
                    <Product product={product} key={product.id} />
                  ) : (
                    ''
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductDetailBox;
