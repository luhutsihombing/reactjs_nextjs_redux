import React, {Component} from 'react';
import {notification} from 'antd';

class LanguageSwicher extends Component {
  static handleFeatureWillUpdate(e) {
    e.preventDefault();
    notification.open({
      message: 'Opp! Something went wrong.',
      description: 'This feature has been updated later!',
      duration: 500
    });
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ps-dropdown language">
        <a href="#" onClick={LanguageSwicher.handleFeatureWillUpdate.bind(this)}>
          <img src="/static/img/flag/en.png" alt="martfury" />
          English
        </a>
        <ul className="ps-dropdown-menu">
          <li>
            <a href="#" onClick={LanguageSwicher.handleFeatureWillUpdate.bind(this)}>
              <img src="/static/img/flag/germany.png" alt="martfury" />
              Germany
            </a>
          </li>
          <li>
            <a href="#" onClick={LanguageSwicher.handleFeatureWillUpdate.bind(this)}>
              <img src="/static/img/flag/fr.png" alt="martfury" />
              France
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default LanguageSwicher;
