import { createContext, useContext } from 'react';

const context = createContext({
  dropdown: function dropdown(title, text, type) {},
});

export function useDropdown() {
  const { dropdown } = useContext(context);
  return dropdown;
}

const Provider = context.Provider;
const Consumer = context.Consumer;

export {
  Provider,
  Consumer,
};
