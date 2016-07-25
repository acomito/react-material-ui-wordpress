// this file sets up the different publications that can be called and maps them to specfici REST URLs

REST2DDP.configs.push({
  name: 'getAllWordPressPosts',
  collectionName: 'wordpressPosts',
  restUrl:'http://anthonycomito.com/wp-json/wp/v2/posts',
  jsonPath: '$.*'
});

REST2DDP.configs.push({
  name: 'getAllWordPressMedia',
  collectionName: 'wordpressImages',
  restUrl:'http://anthonycomito.com/wp-json/wp/v2/media/',
  jsonPath: '$.*'
});