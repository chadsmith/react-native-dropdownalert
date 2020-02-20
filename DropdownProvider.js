import * as React from 'react';

import DropdownAlert from './DropdownAlert';
import {Provider} from './context';

export default class DropdownProvider extends React.Component {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
  }

  getContext = () => ({
    dropdown: (title, text, type = 'custom') => {
      this._ref.current !== null &&
        this._ref.current.alertWithType(type, title, text);
    },
  });

  render() {
    return (
      <Provider value={this.getContext()}>
        {React.Children.only(this.props.children)}
        <DropdownAlert ref={this._ref} />
      </Provider>
    );
  }
}
