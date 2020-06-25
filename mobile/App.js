import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './src/routes'

console.ignoredYellowBox = ['Remote debugger'];

console.ignoredYellowBox = ([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

YellowBox.ignoreWarnings([
  'Possible Unhandled Promise Rejection'
]);

export default function App() {
  return <Routes />
}


//yarn start 
// nos nao usamos codigos em html, usamos TEGS como Text e View , temos que estilizar todos os textos 
// yarn add react-navigation
//expo install react-native-gesture-handler react-native-reanimated (para animação )
