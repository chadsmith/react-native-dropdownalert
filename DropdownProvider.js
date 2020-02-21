import * as React from 'react';

import Dropdown from './Dropdown';
import {Provider} from './context';

export default class DropdownProvider extends React.Component {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
  }

  getContext = () => ({
    dropdown: (title, text, options = {}) => {
      this._ref.current !== null &&
        this._ref.current.dropdown(title, text, options);
    },
  });

  render() {
    return (
      <Provider value={this.getContext()}>
        <Dropdown ref={this._ref} defaultOptions={this.props.defaultOptions}>
          {React.Children.only(this.props.children)}
        </Dropdown>
      </Provider>
    );
  }
}
