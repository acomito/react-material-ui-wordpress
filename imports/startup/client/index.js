import { Bert } from 'meteor/themeteorchef:bert';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './routes.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

Bert.defaults.style = 'growl-top-right';




// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
//http://www.material-ui.com/#/get-started/installation
injectTapEventPlugin();