import React, {PureComponent, RefObject} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import {Form, Input, notification} from 'antd';
import {connect} from 'react-redux';
import {FormInstance} from 'antd/lib/form/util';
import {login} from '../../../store/auth/action';

class Login extends PureComponent<{dispatch?(val: any): void}> {
  static handleFeatureWillUpdate() {
    notification.open({
      message: 'Opp! Something went wrong.',
      description: 'This feature has been updated later!',
      duration: 500
    });
  }

  static getDerivedStateFromProps(props) {
    if (props.isLoggedIn) {
      Router.push('/');
    }
    return false;
  }

  form: RefObject<FormInstance> = React.createRef<FormInstance>();

  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginSubmit(value) {
    if (value) {
      this.props.dispatch(login());
      Router.push('/');
    }
  }

  render() {
    return (
      <div className="ps-my-account">
        <div className="container">
          <Form ref={this.form} className="ps-form--account" onFinish={this.handleLoginSubmit}>
            <ul className="ps-tab-list">
              <li className="active">
                <Link href="/account/login">
                  <a>Login</a>
                </Link>
              </li>
              <li>
                <Link href="/account/register">
                  <a>Register</a>
                </Link>
              </li>
            </ul>
            <div className="ps-tab active" id="sign-in">
              <div className="ps-form__content">
                <h5>Log In Your Account</h5>
                <div className="form-group">
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!'
                      }
                    ]}>
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Username or email address"
                    />
                  </Form.Item>
                </div>
                <div className="form-group form-forgot">
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!'
                      }
                    ]}>
                    <Input className="form-control" type="password" placeholder="Password..." />
                  </Form.Item>
                </div>
                <div className="form-group">
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="remember-me"
                      name="remember-me"
                    />
                    <label htmlFor="remember-me">Rememeber me</label>
                  </div>
                </div>
                <div className="form-group submit">
                  <button type="submit" className="ps-btn ps-btn--fullwidth">
                    Login
                  </button>
                </div>
              </div>
              <div className="ps-form__footer">
                <p>Connect with:</p>
                <ul className="ps-list--social">
                  <li>
                    <a className="facebook" href="#" onClick={Login.handleFeatureWillUpdate}>
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a className="google" href="#" onClick={Login.handleFeatureWillUpdate}>
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#" onClick={Login.handleFeatureWillUpdate}>
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="instagram" href="#" onClick={Login.handleFeatureWillUpdate}>
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.auth;
};
export default connect(mapStateToProps)(Login as any);
