import { AppRegistry } from 'react-native';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// TODO: to have ServiceWorker in production we need to host assets
registerServiceWorker();

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });