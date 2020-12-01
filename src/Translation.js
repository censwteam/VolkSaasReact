import ApplicationBase from 'terra-application/lib/application-base';
import App from './App'; // Your custom app component
// This value could be sent from the server as well
const locale = (navigator.languages && navigator.languages[0])
               || navigator.language
               || navigator.userLanguage
               || 'en';
<ApplicationBase locale={locale}>
  <App />
</ApplicationBase>