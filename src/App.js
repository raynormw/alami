import React from 'react';
import { Provider } from 'react-redux';

import Store from 'stores/index';
import Navigation from 'Navigation';

const App = () => {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}

export default App;
