import React, {Component, RefObject} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import {Form, Input} from 'antd';
import {FormInstance} from 'antd/lib/form/util';

class FormCheckoutInformation extends Component<{
  amount?: number;
  cartTotal?: number;
  cartItems?: {
    id: string;
    title: string;
    quantity: number;
    price: number;
  }[];
}> {
  form: RefObject<FormInstance> = React.createRef<FormInstance>();

  constructor(props) {
    super(props);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.form.current.validateFields().then(value => {
      if (value) {
        Router.push('/account/shipping');
      }
    });
  }

  render() {
    const {amount, cartItems, cartTotal} = this.props;
    return (
      <Form ref={this.form} onFinish={this.handleLoginSubmit} className="ps-form--checkout">
        <div className="ps-form__content">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
              <div className="ps-form__billing-info">
                <h3 className="ps-form__heading">Contact information</h3>
                <div className="form-group">
                  <Form.Item
                    name="text"
                    rules={[
                      {
                        required: true,
                        message: 'Enter an email or mobile phone number!'
                      }
                    ]}>
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Email or phone number"
                    />
                  </Form.Item>
                </div>
                <div className="form-group">
                  <div className="ps-checkbox">
                    <input className="form-control" type="checkbox" id="keep-update" />
                    <label htmlFor="keep-update">
                      Keep me up to date on news and exclusive offers?
                    </label>
                  </div>
                </div>
                <h3 className="ps-form__heading">Shipping address</h3>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <Form.Item
                        name="firstName"
                        rules={[
                          {
                            required: true,
                            message: 'Enter your first name!'
                          }
                        ]}>
                        <Input className="form-control" type="text" placeholder="First Name" />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <Form.Item
                        name="firstName"
                        rules={[
                          {
                            required: true,
                            message: 'Enter your last name!'
                          }
                        ]}>
                        <Input className="form-control" type="text" placeholder="Last Name" />
                      </Form.Item>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <Form.Item
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: 'Enter an address!'
                      }
                    ]}>
                    <Input className="form-control" type="text" placeholder="Address" />
                  </Form.Item>
                </div>
                <div className="form-group">
                  <Form.Item
                    name="apartment"
                    rules={[
                      {
                        required: false,
                        message: 'Enter an Apartment!'
                      }
                    ]}>
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Apartment, suite, etc. (optional)"
                    />
                  </Form.Item>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <Form.Item
                        name="city"
                        rules={[
                          {
                            required: false,
                            message: 'Enter an city!'
                          }
                        ]}>
                        <Input className="form-control" type="city" placeholder="City" />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <Form.Item
                        name="postalCode"
                        rules={[
                          {
                            required: false,
                            message: 'Enter a postal code!'
                          }
                        ]}>
                        <Input
                          className="form-control"
                          type="postalCode"
                          placeholder="Postal Code"
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="ps-checkbox">
                    <input className="form-control" type="checkbox" id="keep-update" />
                    <label htmlFor="keep-update">Save this information for next time</label>
                  </div>
                </div>
                <div className="ps-form__submit">
                  <Link href="/account/cart">
                    <a>
                      <i className="icon-arrow-left mr-2" />
                      Return to shopping cart
                    </a>
                  </Link>
                  <div className="ps-block__footer">
                    <button type="submit" className="ps-btn">
                      Continue to shipping
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
              <div className="ps-form__orders">
                <h3>Your order</h3>
                <div className="ps-block--checkout-order">
                  <div className="ps-block__content">
                    <figure>
                      <figcaption>
                        <strong>Product</strong>
                        <strong>total</strong>
                      </figcaption>
                    </figure>
                    <figure className="ps-block__items">
                      {cartItems &&
                        cartItems.map(product => (
                          <Link href="/" key={product.id}>
                            <a>
                              <strong>
                                {product.title}
                                <span>x{product.quantity}</span>
                              </strong>
                              <small>${product.quantity * product.price}</small>
                            </a>
                          </Link>
                        ))}
                    </figure>
                    <figure>
                      <figcaption>
                        <strong>Subtotal</strong>
                        <small>${amount}</small>
                      </figcaption>
                    </figure>
                    <figure className="ps-block__shipping">
                      <h3>Shipping</h3>
                      <p>Calculated at next step</p>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    );
  }
}

export default FormCheckoutInformation;
