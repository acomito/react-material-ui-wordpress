import { Bert } from 'meteor/themeteorchef:bert';
import './routes.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Mongo } from 'meteor/mongo';

// sets up bert alert, the alert system used
Bert.defaults.style = 'growl-top-right';

// sets up the collections to be used from wordpress. add more as needed. then add config in imports/startup/server/rest2dpp
export const WordpressPosts = new Mongo.Collection('wordpressPosts');
export const WordpressImages = new Mongo.Collection('wordpressImages');

// needed for material-ui
injectTapEventPlugin();

