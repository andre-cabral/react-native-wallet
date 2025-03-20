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

type BackgroundProps = PropsWithChildren<{
  showBackgroundShapes?: boolean,
}>;

function Background({children, showBackgroundShapes = true}:BackgroundProps): React.JSX.Element {  
  return (
    <View style={styles.backgroundStyle}>
      { showBackgroundShapes && 
        <>
          <View style={[styles.backgroundShape, styles.backgroundUp]} />
          <View style={[styles.backgroundShape, styles.backgroundDown]} />
        </>
      }

      {children}
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
  backgroundStyle: {
    height: '100%',
    backgroundColor: '#142995',
    paddingBottom: safePadding,
  },
  backgroundShape: {
    position: 'absolute',
    width: '100%',
    height:'50%',
    transform: [{rotate: '-45deg'}],
    backgroundColor: '#eee',
    opacity: 0.2,
  },
  backgroundUp: {
    top:verticalPosition,
    left:horizontalPosition,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },
  backgroundDown: {
    bottom: verticalPosition,
    right: horizontalPosition,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
  },
});

export default Background;
