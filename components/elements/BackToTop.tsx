import React, {Component} from 'react';

class BackToTop extends Component<
  {scrollStepInPx: number; delayInMs: number},
  {intervalId: ReturnType<typeof setTimeout>}
> {
  constructor(props) {
    super(props);
    this.scrollStep = this.scrollStep.bind(this);
    this.state = {
      intervalId: 0 as any
    };
  }

  scrollStep() {
    if (typeof window !== 'undefined') {
      if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
  }

  scrollToTop() {
    const intervalId = setInterval(this.scrollStep, this.props.delayInMs);
    this.setState({intervalId});
  }

  render() {
    return (
      <button
        type="button"
        id="back2top"
        className="ps-btn--back-to-top"
        onClick={this.scrollToTop}>
        <i className="icon-chevron-up" />
      </button>
    );
  }
}

export default BackToTop;
