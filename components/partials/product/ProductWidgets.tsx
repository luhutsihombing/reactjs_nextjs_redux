import React from 'react';
import Link from 'next/link';
import {sameBrands} from '../../../public/static/data/product.json';
import Product from '../../elements/products/Product';

const ProductWidgets = () => (
  <section>
    <aside className="widget widget_product widget_features">
      <p>
        <i className="icon-network" /> Shipping worldwide
      </p>
      <p>
        <i className="icon-3d-rotate" /> Free 7-day return if eligible, so easy
      </p>
      <p>
        <i className="icon-receipt" /> Supplier give bills for this product.
      </p>
      <p>
        <i className="icon-credit-card" /> Pay online or when receiving goods
      </p>
    </aside>
    <aside className="widget widget_sell-on-site">
      <p>
        <i className="icon-store" /> Sell on Martfury?
        <Link href="/account/register">
          <a> Register Now !</a>
        </Link>
      </p>
    </aside>
    <aside className="widget widget_ads">
      <Link href="/shop">
        <a>
          <img src="/static/img/ads/product-ads.png" alt="martfury" />
        </a>
      </Link>
    </aside>
    <aside className="widget widget_same-brand">
      <h3>Same Brand</h3>
      <div className="widget__content">
        {sameBrands &&
          (sameBrands as any).map(product => <Product product={product} key={product.id} />)}
      </div>
    </aside>
  </section>
);

export default ProductWidgets;
