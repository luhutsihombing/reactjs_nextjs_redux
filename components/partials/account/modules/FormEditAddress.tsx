import React, {PureComponent} from 'react';

class FormEditAddress extends PureComponent {
  render() {
    return (
      <form className="ps-form--edit-address">
        <div className="ps-form__header">
          <h3>Billing address</h3>
        </div>
        <div className="ps-form__content">
          <div className="form-group">
            <label htmlFor="firstName">
              FirstName <sup>*</sup>
            </label>
            <input id="firstName" type="text" placeholder="" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">
              Lastname <sup>*</sup>
            </label>
            <input id="lastName" type="text" placeholder="" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input id="companyName" type="text" placeholder="" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="countryName">
              Country <sup>*</sup>
            </label>
            <input type="text" id="countryName" placeholder="" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="address">
              Street Address <sup>*</sup>
            </label>
            <input type="text" id="address" placeholder="" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="state">
              State <sup>*</sup>
            </label>
            <input type="text" id="state" placeholder="" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="postcode">
              Postcode <sup>*</sup>
            </label>
            <input id="postcode" type="text" placeholder="" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email address <sup>*</sup>
            </label>
            <input id="email" type="text" placeholder="" className="form-control" />
          </div>
          <div className="form-group submit">
            <button type="submit" className="ps-btn">
              Save Address
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default FormEditAddress;
