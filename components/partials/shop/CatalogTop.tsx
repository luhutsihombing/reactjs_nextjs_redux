import React from 'react';
import Link from 'next/link';
import {
  categories,
  shop_categories_catalog as shopCategoriesCatalog
} from '../../../public/static/data/shopCategories.json';

const CatalogTop = () => (
  <div className="ps-catalog-top">
    <div className="row">
      <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 ">
        <div className="ps-block--menu-categories" data-mh="catalog-top">
          <div className="ps-block__header">
            <h3>Categories</h3>
          </div>
          <div className="ps-block__content">
            <ul className="ps-list--menu-cateogories">
              {/* eslint-disable-next-line @typescript-eslint/camelcase */}
              {shopCategoriesCatalog &&
                shopCategoriesCatalog.map(catalog => {
                  if (catalog.extraClass) {
                    return (
                      <li className={catalog.extraClass} key={catalog.text}>
                        <Link href="/shop">
                          <a>{catalog.text}</a>
                        </Link>
                        <ul className={catalog.subClass}>
                          {catalog.subMenu.map(item => (
                            <li className={item.text} key={item.text}>
                              <Link href="/shop">
                                <a>{item.text}</a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  } else {
                    return (
                      <li>
                        <Link href="/shop">
                          <a>{catalog.text}</a>
                        </Link>
                      </li>
                    );
                  }
                })}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 ">
        <div className="ps-block--categories-grid" data-mh="catalog-top">
          {categories &&
            categories.map((category, index) => {
              return index < 6 ? (
                <div className="ps-block--category-2" data-mh="categories" key={category.id}>
                  <div className="ps-block__thumbnail">
                    <img src={category.thumbnail} alt="martfury" />
                  </div>
                  <div className="ps-block__content">
                    <h4>{category.title}</h4>
                    <ul>
                      {category.links &&
                        category.links.map(link => (
                          <li key={link}>
                            <Link href="/shop" as="/shop">
                              <a>{link}</a>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              ) : (
                ''
              );
            })}
        </div>
      </div>
    </div>
  </div>
);

export default CatalogTop;
