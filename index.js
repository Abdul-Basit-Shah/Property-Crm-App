/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import 'react-native-gesture-handler';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/Store/Index';
import Routes from './src/Navigations/Routes';
const Routeindex = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Routeindex);
