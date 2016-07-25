import React from 'react';
import { AppNavigation } from '../components/app-navigation';
import EasyTransition from 'react-easy-transition'
import { ContactForm } from  '../components/contact-form';

export const App = React.createClass({

  render() {
    return <div>
              <ContactForm />
            	<AppNavigation />
		          <EasyTransition path={location.pathname} initialStyle={{opacity: 0}} transition="opacity 0.3s ease-in" finalStyle={{opacity: 1}} >
	            	{ this.props.children }
	            </EasyTransition>
            </div>;
  }
  
});
