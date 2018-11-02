import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { changeLang } from '../actions';

class Lang extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showOptionFlag: false
    }
    this.toggleOptions = this.toggleOptions.bind(this);
  }

  toggleOptions() {
    this.setState({showOptionFlag: !this.state.showOptionFlag});
  }

  handleLang(lang) {
    this.props.changeLang(lang);
    this.setState({showOptionFlag: false})
  }

  render() {
    let showOption = this.state.showOptionFlag ? {display: "flex"} : {display: "none"}
    return (
      <div className="lang" >
        <span onClick={this.toggleOptions}>Language</span>
        <ul className="lang-options" style={showOption}>
          <li className="icon icon-taiwan"  onClick={() => this.handleLang('zh')}></li>
          <li className="icon icon-japan" onClick={() => this.handleLang('ja')}></li>
          <li className="icon icon-us"  onClick={() => this.handleLang('en')}></li>
        </ul>
      </div>
    );
  }
}

export default connect(null, { changeLang })(Lang);