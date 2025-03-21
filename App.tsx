import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Background from './components/Background';
import Button from './components/Button';

function App(): React.JSX.Element {

  return (
    <Background>
      <Button />
    </Background>
  );
}

export default App;
