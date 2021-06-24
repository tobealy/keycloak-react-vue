import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Keycloak from 'keycloak-js'
let initOptions = {
  url: 'http://localhost:8181/auth', realm: 'secured-app', clientId: 'react', onLoad: 'login-required'
}

let keycloak = Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad }).then((auth) => {
  if (!auth) {
    window.location.reload();
  } else {
    console.log("Authenticated");
    console.log(keycloak.idToken)
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );

  }
})