import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

import { Consumer } from './context';

export default function connectDropdown(WrappedComponent) {
  const ConnectedDropdown = props => (
    <Consumer>
      {({ dropdown }) => (
        <WrappedComponent {...props} dropdown={dropdown} />
      )}
    </Consumer>
  );
  return hoistNonReactStatic(ConnectedDropdown, WrappedComponent);
}
