import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

type TitleProps = PropsWithChildren<{
  text: string,
  titleColor: string,
}>;

function Title({text, titleColor}:TitleProps): React.JSX.Element {  
  const colors = StyleSheet.create({
    text: {
      color: titleColor,
    }
  });
  return (
    <Text style={[styles.titleStyle, colors.text]}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: 'PTSansCaption-Regular',
    fontSize: 28,
    marginBottom: 32,
  },
});

export default Title;
