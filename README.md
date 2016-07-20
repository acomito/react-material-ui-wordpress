# Base-Material-UI 
A Material-UI starting point for Meteor/React apps. (Fork of [TheMeteorChef's Base](http://themeteorchef.com/base))

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


| [TODO](#TODO) | [COMPARISON](/COMPARISON.md) | [Examples](/README.md) |  [ORIGINAL Base Docs](http://themeteorchef.com/base) |
|---|---|---|---|

## Changes from ORIGINAL Base - Overall

* added material-ui with `meteor npm install material-ui`
* added `formsy-react` and `formsy-react-material-ui`
* added `react-tap-event-plugin` with `meteor npm install --save react-tap-event-plugin`
* uses formsy instead of jquery and jquery validation





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
