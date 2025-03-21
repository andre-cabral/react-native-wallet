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

type ButtonProps = PropsWithChildren<{
  showBackgroundShapes?: boolean,
}>;

function Button({children, showBackgroundShapes = true}:ButtonProps): React.JSX.Element {  
  return (
    <View style={styles.buttonStyle}>
      <Text style={styles.textStyle}>
        text here l
      </Text>
    </View>
  );
}

// Prevent the view from rendering under the System UI.
const safePadding = '5%';

// Variables for recurrent values
const verticalPosition = '-23%';
const horizontalPosition = '-46%';
const borderRadius = 50;

const styles = StyleSheet.create({
  buttonStyle: {
    height: '100%',
    backgroundColor: '#142995',
    paddingBottom: safePadding,
  },
  textStyle: {
    fontFamily: 'PTSans-Regular',
    color: '#fff',
    fontSize: 32,
  },
});

export default Button;
