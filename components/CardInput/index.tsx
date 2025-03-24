import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  KeyboardType,
  KeyboardTypeOptions,
} from 'react-native';

import MaskInput from 'react-native-mask-input';


type CardInputProps = PropsWithChildren<{
  label: string,
  labelColor?: string,
  placeholder: string,
  mask?: Array<string | RegExp>,
  onEndEditing: Function,
  isSmall?: boolean,
  keyboardType?: KeyboardTypeOptions,
}>;

function CardInput({
  label,
  labelColor = '#FFF',
  placeholder = '',
  mask = [],
  onEndEditing,
  isSmall = false,
  keyboardType = 'default',
}:CardInputProps): React.JSX.Element {

  const colors = StyleSheet.create({
    labelColor: {
      color: labelColor,
    }
  });
  
  //Here we use a local state because redux would remount the component if used to
  //keep the values change.
  //Redux is used on the onEndEditing event instead.
  const [value, setValue] = React.useState('');

  return (
    <View style={isSmall ? styles.containerSmallStyle : styles.containerStyle} >
      <Text style={[styles.labelStyle, colors.labelColor]}>{label}</Text>
      { mask?.length > 0 
        ?
          <MaskInput
            keyboardType={keyboardType}
            returnKeyType="next"
            style={styles.inputStyle}
            value={value}
            onChangeText={(masked, unmasked) => {
              setValue(masked);
            }}
            onEndEditing={(e) => {
              onEndEditing(e.nativeEvent.text);
            }}
            mask={mask}
            placeholder={placeholder}
          />
        :
          <TextInput
            keyboardType={keyboardType}
            returnKeyType="next"
            style={styles.inputStyle}
            onChangeText={(value) => {
              setValue(value);
            }}
            onEndEditing={(e) => {
              onEndEditing(e.nativeEvent.text);
            }}
          />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '80%',
    height: 55,
    boxSizing: 'border-box',
    borderRadius: 12,
    marginBottom: 40,
    justifyContent: 'center',
  },
  containerSmallStyle: {
    width: '48%',
    height: 55,
    boxSizing: 'border-box',
    borderRadius: 12,
    marginBottom: 20,
    justifyContent: 'center',
  },
  labelStyle:{
    height: 24,
    fontFamily: 'PTSans-Regular',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'left',
  },
  inputStyle: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 6,
    fontFamily: 'PTSans-Regular',
    fontSize: 18,
    lineHeight: 20,
    justifyContent: 'center',
    paddingLeft: 16,
  },
});

export default CardInput;
