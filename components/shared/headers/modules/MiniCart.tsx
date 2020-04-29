import React, {Component} from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';
import {getCart, removeItem} from '../../../../store/cart/action';

class MiniCart extends Component<{
  amount?: number;
  cartTotal?: number;
  cartItems?: {
    id: string;
    sale: boolean;
    salePrice: number;
    vendor: string;
    quantity: number;
    price: number;
    thumbnail: string;
    title: string;
    ratingCount: number;
    badge: {
      type: string;
      value: string;
    }[];
  }[];
  dispatch?(val: any): void;
}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getCart());
  }

  handleRemoveCartItem = product => {
    this.props.dispatch(removeItem(product));
  };

  render() {
    const {amount, cartTotal, cartItems} = this.props;
    return (
      <div className="ps-cart--mini">
        <a className="header__extra" href="#">
          <i className="icon-bag2" />
          <span>
            <i>{cartTotal}</i>
          </span>
        </a>
        {cartItems && cartItems.length > 0 ? (
          <div className="ps-cart__content">
            <div className="ps-cart__items">
              {cartItems && cartItems.length > 0
                ? cartItems.map(product => (
                    <div className="ps-product--cart-mobile" key={product.id}>
                      <div className="ps-product__thumbnail">
                        <Link href="/product/[pid]" as={`/product/${product.id}`}>
                          <a>
                            <img src={product.thumbnail} alt="martfury" />
                          </a>
                        </Link>
                      </div>
                      <div className="ps-product__content">
                        <button
                          type="button"
                          className="ps-product__remove"
                          onClick={this.handleRemoveCartItem.bind(this, product)}>
                          <i className="icon-cross" />
                        </button>
                        <Link href="/product/[pid]" as={`/product/${product.id}`}>
                          <a className="ps-product__title">{product.title}</a>
                        </Link>
                        <p>
                          <strong>Sold by:</strong> {product.vendor}
                        </p>
                        <small>
                          {product.quantity} x ${product.price}
                        </small>
                      </div>
                    </div>
                  ))
                : ''}
            </div>
            <div className="ps-cart__footer">
              <h3>
                Sub Total:
                <strong>${amount}</strong>
              </h3>
              <figure>
                <Link href="/account/shopping-cart" as="/cart">
                  <a className="ps-btn">View Cart</a>
                </Link>
                <Link href="/account/checkout" as="/checkout">
                  <a className="ps-btn">Checkout</a>
                </Link>
              </figure>
            </div>
          </div>
        ) : (
          <div className="ps-cart__content">
            <div className="ps-cart__items">
              <span>No products in cart</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state.cart;
};
export default connect(mapStateToProps)(MiniCart);
