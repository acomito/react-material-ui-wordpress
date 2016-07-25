# React-Material-UI-Wordpress
A simple way to get started with React, Meteor, Material-UI and the WordPress api (Fork of [TheMeteorChef's Base](http://themeteorchef.com/base))

## Version

<table>
  <tbody>
      <tr>
      <th>Base Material-UI Version</th>
      <td>v0.0.0.1</td>
    </tr>
    <tr>
      <th>Base Version</th>
      <td>v4.5.0</td>
    </tr>
    <tr>
      <th>Meteor Version</th>
      <td>v1.3.5.1</td>
    </tr>
  </tbody>
</table>

## What You're Working With

* [Meteor](https://www.meteor.com/)
* [React](https://facebook.github.io/react/)
* [React-Router](https://github.com/reactjs/react-router)
* [Material-UI](http://www.material-ui.com/#/)
* [Formsy-React](https://github.com/christianalfoni/formsy-react)
* [Formsy-Material-UI](https://github.com/mbrookes/formsy-material-ui)
* [The Meteor Chef's Base Repo](http://themeteorchef.com/base)
* [okgrow:rest2ddp](https://github.com/okgrow/rest2ddp)
* [An array of different meteor packages to make developing your app (and serving it) much easier](https://github.com/acomito/react-material-ui-wordpress/blob/master/.meteor/packages)
* ES2015 (and beyond) support.
* Redux, mobx, or flux are *NOT* incorporated at this time
* This does *NOT* have accounts setup (although it would be trivial to set up). It is just a front-end to consume your WP back-end.
* And of course you'll be connecting with your WordPress site's API (not included in this package)

## Getting Started

#### See Meteor Chef's Base 
As the projects are essentially the same, see https://themeteorchef.com/base/getting-started/

#### Clone Repo
`git clone https://github.com/acomito/react-material-ui-wordpress.git <directory>`

#### Setup the call to WP API

* Make sure you have the wordpress api plugin installed on your wordpress website. [this youtube video may be helpful](https://www.youtube.com/watch?v=-yeW5sntRRU)
* go into `base-material-ui-wordpress` into `imports/startup/server/rest2ddp.js` [(here)](https://github.com/acomito/react-material-ui-wordpress/blob/master/imports/startup/server/rest2ddp.js). Then add your endpoint/url for your blog posts, etc. (see [rest2dpp docs](https://github.com/okgrow/rest2ddp) for more info)

#### Run NPM Install

* run `meteor npm install`
* after runnning `meteor npm install`, sometimes I find it is good to also run regular `npm install` just in case

#### Run Start Script

run `meteor npm start` to fire up the app

#### Got to LocalHost:3000 and you should be good

* If you've setup the API on your WordPress site and added the relevant url to the posts call in your meteor app, then you should be pulling in a basic list of blog posts from your WP site.



## Changes from ORIGINAL Base - Overall

* added material-ui with `meteor npm install material-ui`
* added `formsy-react` and `formsy-react-material-ui`
* added `react-tap-event-plugin` with `meteor npm install --save react-tap-event-plugin`
* uses formsy instead of jquery and jquery validation
* uses rest2dpp package to query WP API



## Other Stuff
* [How to Do a FAB in the corner] (http://stackoverflow.com/questions/35828991/make-material-ui-reactjs-floatingactionbutton-float)
* [AirBnB Style Guide for React] (https://github.com/airbnb/javascript/tree/master/react)
* [MaterialUp curates the best of Material Design, daily.] (http://www.materialup.com/)
* [Material Palette] (https://www.materialpalette.com/)



