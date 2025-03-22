import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';

type ButtonProps = PropsWithChildren<{
  text: string,
  buttonColor: string,
  textColor: string,
  pressFunction: Function,
}>;

function ButtonWithColor({
  text,
  buttonColor,
  textColor,
  pressFunction = (e: Event) => {},
}:ButtonProps): React.JSX.Element {  
  const colors = StyleSheet.create({
    buttonColor: {
      backgroundColor: buttonColor,
    },
    textColor: {
      color: textColor,
    }
  });
  return (
    <Pressable style={[styles.buttonStyle, colors.buttonColor]} onPress={(e) => pressFunction(e)}>
      <Text style={[styles.textStyle, colors.textColor]}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: '80%',
    height: 55,
    boxSizing: 'border-box',
    borderRadius: 12,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'PTSans-Regular',
    fontSize: 18,
    lineHeight: 20,
  },
});

export default ButtonWithColor;
