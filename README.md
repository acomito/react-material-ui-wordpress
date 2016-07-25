# Base-Material-UI 
A simple way to get started with react, meteor and the wordpress api (Fork of [TheMeteorChef's Base](http://themeteorchef.com/base))

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
* Redux, mobx, or flux are NOT incorporated at this time
* And of course you'll be connecting with your WordPress site's API (not included in this package)

## Getting Started

* As the projects are essentially the same, see https://themeteorchef.com/base/getting-started/
* Make sure you have the wordpress api plugin installed on your wordpress website. [this youtube video may be helpful](https://www.youtube.com/watch?v=-yeW5sntRRU)
* go into `base-material-ui-wordpress` into `imports/startup/server/rest2ddp.js` and add your endpoint/url for your blog posts, etc. (see rest2dpp docs for more info)
* If you've setup the API on your WordPress site and added the relevant url to the posts call in your meteor app, then you should be pulling in a basic list of blog posts from your WP site.

| [TODO](#todo) | [COMPARISON](/COMPARISON.md) | [Examples](/README.md) |  [ORIGINAL Base Docs](http://themeteorchef.com/base) |
|---|---|---|---|

What is different:



## Changes from ORIGINAL Base - Overall

* added material-ui with `meteor npm install material-ui`
* added `formsy-react` and `formsy-react-material-ui`
* added `react-tap-event-plugin` with `meteor npm install --save react-tap-event-plugin`
* uses formsy instead of jquery and jquery validation
* uses rest2dpp package to query 





## Other Stuff
* [How to Do a FAB in the corner] (http://stackoverflow.com/questions/35828991/make-material-ui-reactjs-floatingactionbutton-float)
* 

## TODO

* Add PropTypes where needed (basically, everywhere at this point.)
* it would be cool to tie bert-alert color schemes into the material-ui color scheme
* decision: combine delete-dialog and update-dialog components?
* decision: flexbox grid? bootstrap grid? grid agnostic?
* where it makes sense, extract inline-js css styles to the .scss files
* Add file for customizing the Material-UI theme
* Keep an eye out for new version of Material-UI... errors since react updated (https://facebook.github.io/react/warnings/unknown-prop.html)
* Re-add re-routing logic (login, reset, etc. etc.)
* Collapsable nav and other responsive work
* improve documentation
* you have to click off the input field for formsy to validate and change the submit button from disabled... minor UI blemish.
* **Consider Other Versions:**
* base/boilerplate for a blog/portfolio website
* base/boilerplates with mobx/redux/flow/relay/graphql

## DONE
* ~~re-add validation for password-reset form~~
* ~~wire up the username to be in top-right corner of authenticated navbar (was getting an odd error when trying to do this so I just hardcoded "username" there for now)~~
