import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import InviteContainer from './containers/invite_container';
import store from './store/store';
import "./stylesheets/main.scss";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const main = (
  <MuiThemeProvider>
  <Provider store={store}>
    <InviteContainer />
  </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(main, document.getElementById('container'));
