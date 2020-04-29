import React, {PureComponent} from 'react';

class PanelSearch extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ps-panel__wrapper">
        <div className="ps-panel__header">
          <form className="ps-form--search-mobile" action="/" method="get">
            <div className="form-group--nest">
              <input className="form-control" type="text" placeholder="Search something..." />
              <button type="button">
                <i className="icon-magnifier" />
              </button>
            </div>
          </form>
        </div>
        <div className="navigation__content" />
      </div>
    );
  }
}

export default PanelSearch;
