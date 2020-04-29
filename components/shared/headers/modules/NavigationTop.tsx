import React, {PureComponent} from 'react';
import Link from 'next/link';

class NavigationTop extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navigation navigation--top">
        <div className="ps-container">
          <div className="navigation__left" />
          <div className="navigation__right">
            <ul className="navigation__extra">
              <li>
                <Link href="/vendor/become-a-vendor">
                  <a>Tentang FIFADA</a>
                </Link>
              </li>
              <li>
                <Link href="/account/order-tracking">
                  <a>Mitra FIFADA</a>
                </Link>
              </li>
              <li>
                <Link href="/account/order-tracking">
                  <a>Seller</a>
                </Link>
              </li>
              <li>
                <Link href="/account/order-tracking">
                  <a>Bantuan</a>
                </Link>
              </li>
              <li>
                <Link href="/link4">
                  <a>Unduh Aplikasi</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationTop;
