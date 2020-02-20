import * as React from 'react';

import DropdownAlert from './DropdownAlert';

export default class Dropdown extends React.Component {

  ref = React.createRef();

  state = {};

  dropdown = (title, text, options) => {
    if(options) {
      this.setState(options, () =>
        this.ref.current.alertWithType(options.type || 'custom', title, text);
      );
    }
    else {
      this.ref.current.alertWithType('custom', title, text);
    }
  }

  render() {
    const defaultOptions = this.props.defaultOptions || {};
    const {type, ...rest} = this.state;
    return (
      <>
        {React.Children.only(this.props.children)}
        <DropdownAlert ref={this.ref} {...defaultOptions} {...rest} />
      </>
    );
  }
}
