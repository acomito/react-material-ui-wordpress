# The Meteor Chef - Base - Material-ui
A starting point for Meteor apps.

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

[Read the Base Documentation](http://themeteorchef.com/base)


## Changes from Normal Base - Overall

* add material ui meteor npm install material-ui
* uses formsy-react and formsy-react-material-ui

## Changes from Normal Base - By File

### imports/ui/pages/index.js

* removed jumbotron import
* remove `<Jumbotron>` in favor of normal `<div>`
* `import RaisedButton from 'material-ui/RaisedButton'`
* use button for links to documentation
* add link to base material-ui documentation

### imports/ui/startup/client/index.js

* `import injectTapEventPlugin from 'react-tap-event-plugin';` 
* add `injectTapEventPlugin();` see (http://www.material-ui.com/#/get-started/installation)
* 

### imports/ui/startup/client/routes.js

* `import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';`
* wrap router in material-ui theme with `<MuiThemeProvider></MuiThemeProvider>`
