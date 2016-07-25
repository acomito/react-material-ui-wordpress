
import { composeWithTracker } from 'react-komposer';
import { WordpressPostsList } from '../components/wordpressPosts.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';
import { WordpressPosts } from '../../startup/client/index';
import { WordpressImages } from '../../startup/client/index';

const composer = (params, onData) => {
  const postSubscription = Meteor.subscribe('REST2DDP', 'getAllWordPressPosts');
  const imageSubscription = Meteor.subscribe('REST2DDP', 'getAllWordPressMedia');
  if (postSubscription.ready() && imageSubscription.ready()) {
    const documents = WordpressPosts.find().fetch();
    const images = WordpressImages.find().fetch();
    onData(null, { documents, images });
  }
};

export default composeWithTracker(composer, Loading)(WordpressPostsList);


