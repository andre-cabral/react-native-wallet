import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {
  View,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';

import type { RootState } from '../../store'

import Background from '../../components/Background';
import ButtonWithColor from '../../components/ButtonWithColor';
import CardInput from '../../components/CardInput';
import {cardNumberMask, cvvMask, dateMask} from '../../components/CardInput/masks';

import { registerValidate } from './utils';
import { ChangeRegisterNumber, ChangeRegisterName, ChangeRegisterDueDate, ChangeRegisterCvv } from './registerSlice'

function Register(): React.JSX.Element {
  const number = useSelector((state: RootState) => state.register.number);
  const name = useSelector((state: RootState) => state.register.name);
  const cvv =  useSelector((state: RootState) => state.register.cvv);
  const dueDate =  useSelector((state: RootState) => state.register.dueDate);

  const validated = registerValidate({number, name, dueDate, cvv});

  
  const dispatch = useDispatch()

  return (
    <Background showBackgroundShapes={true}>
      <CardInput
        label='número do cartão'
        labelColor='#BBB'
        placeholder=''
        mask={cardNumberMask}
        onEndEditing={(value: string) => {
          dispatch(ChangeRegisterNumber(value));
        }}
      />
      <CardInput
        label='nome do titular do cartão'
        placeholder=''
        onEndEditing={(value: string) => {
          dispatch(ChangeRegisterName(value));
        }}
      />
      <View style={styles.doubleInputStyle}>
        <CardInput
          label='vencimento'
          placeholder='00/00'
          mask={dateMask}
          onEndEditing={(value: string) => {
            dispatch(ChangeRegisterDueDate(value));
          }}
          isSmall={true}
        />
        <CardInput
          label='código de segurança'
          placeholder='***'
          mask={cvvMask}
          onEndEditing={(value: string) => {
            dispatch(ChangeRegisterCvv(value));
          }}
          isSmall={true}
        />
      </View>
      <ButtonWithColor
        pressFunction={(e: Event) => {

        }}
        text='avançar'
        buttonColor={validated ? '#12C2E9' : '#EEE'}
        textColor={validated ? '#FFF' : '#BBB'}
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  doubleInputStyle: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Register;
