import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

type TabHeaderProps = PropsWithChildren<{
  text: string,
}>;

function TabHeader({text}: TabHeaderProps): React.JSX.Element {
  return (
    <View style={styles.tabStyle}>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    width: '100%',
    height: 66,
    backgroundColor: '#EEE',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'PTSans-Regular',
    fontSize: 20,
    lineHeight: 22,
    color: '#12C2E9',
  }
});

export default TabHeader;
