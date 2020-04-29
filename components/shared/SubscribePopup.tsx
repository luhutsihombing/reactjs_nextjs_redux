import React from 'react';

class SubscribePopup extends React.Component<{active: boolean}, {isSubscribeShow: boolean}> {
  constructor(props) {
    super(props);
    this.state = {
      isSubscribeShow: true
    };

    this.handleCloseSubscribePopup = this.handleCloseSubscribePopup.bind(this);
  }

  handleCloseSubscribePopup(e) {
    e.preventDefault();
    this.setState({isSubscribeShow: false});
  }

  render() {
    const {isSubscribeShow} = this.state;
    const {active} = this.props;

    if (isSubscribeShow) {
      return (
        <div className={`ps-popup ${active ? 'active' : ''}`} id="subscribe">
          <div
            className="ps-popup__content bg--cover"
            style={{
              backgroundImage: "url('/static/img/bg/subscribe.jpg')"
            }}>
            <button
              type="button"
              className="ps-popup__close"
              onClick={this.handleCloseSubscribePopup}>
              <i className="icon-cross" />
            </button>
            <form className="ps-form--subscribe-popup" action="/" method="get">
              <div className="ps-form__content">
                <h4>
                  Get <strong>25%</strong> Discount
                </h4>
                <p>
                  Subscribe to the Martfury mailing list <br /> to receive updates on new arrivals,
                  special offers
                  <br /> and our promotions.
                </p>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email Address"
                    required
                  />
                  <button type="button" className="ps-btn">
                    Subscribe
                  </button>
                </div>
                <div className="ps-checkbox">
                  <input className="form-control" type="checkbox" id="notShow" name="notShow" />
                  <label htmlFor="notShow">Don't show this popup again</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return '';
    }
  }
}

export default SubscribePopup;
