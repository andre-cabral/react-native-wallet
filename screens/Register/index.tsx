import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {
  View,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

import type { RootState } from '../../store'

import Background from '../../components/Background';
import ButtonWithColor from '../../components/ButtonWithColor';
import CardInput from '../../components/CardInput';
import Title from '../../components/Title';
import {cardNumberMask, cvvMask, dateMask} from '../../components/CardInput/masks';
import Card from '../../components/Card';

import { registerValidate, postRegister } from './utils';
import { ChangeRegisterNumber, ChangeRegisterName, ChangeRegisterDueDate, ChangeRegisterCvv, SendingPostRegister, FetchDoneRegister, FetchFailedRegister, ResetRegisterState } from './registerSlice'

function Register(): React.JSX.Element {
  const number = useSelector((state: RootState) => state.register.number);
  const name = useSelector((state: RootState) => state.register.name);
  const dueDate =  useSelector((state: RootState) => state.register.dueDate);
  const cvv =  useSelector((state: RootState) => state.register.cvv);
  const sendingPost = useSelector((state: RootState) => state.register.sendingPost);
  const fetchStatus = useSelector((state: RootState) => state.register.fetchStatus);
  
  const dispatch = useDispatch()
  const validated = registerValidate({number, name, dueDate, cvv});
  const navigation = useNavigation();

  return (
    <Background showBackgroundShapes={true}>
      {fetchStatus === '' &&
        <>
          <CardInput
            label='número do cartão'
            labelColor='#BBB'
            placeholder=''
            mask={cardNumberMask}
            onEndEditing={(value: string) => {
              dispatch(ChangeRegisterNumber(value));
            }}
            keyboardType='numeric'
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
              keyboardType='numeric'
            />
            <CardInput
              label='código de segurança'
              placeholder='***'
              mask={cvvMask}
              onEndEditing={(value: string) => {
                dispatch(ChangeRegisterCvv(value));
              }}
              isSmall={true}
              keyboardType='numeric'
            />
          </View>
          <ButtonWithColor
            pressFunction={(e: Event) => {
              if(validated && !sendingPost) {
                dispatch(SendingPostRegister());

                postRegister({
                  number,
                  name,
                  dueDate,
                  cvv,
                  fetchDone: () => {dispatch(FetchDoneRegister())},
                  fetchFailed: () => {dispatch(FetchFailedRegister())},
                });
              }
            }}
            text={sendingPost ? 'cadastrando o cartão' : 'avançar'}
            buttonColor={(validated && !sendingPost) ? '#12C2E9' : '#EEE'}
            textColor={(validated && !sendingPost) ? '#FFF' : '#BBB'}
          />
        </>
      }
      {fetchStatus === 'done' && 
        <>
          <Title text='Wallet Test' titleColor='#FFF' />
          <Text style={styles.subtitleDoneStyle}>cartão cadastrado com sucesso</Text>
          <Card name={name} number={number} dueDate={dueDate} cardColor='#111' textColor='#FFF' />
          <ButtonWithColor
            pressFunction={(e: Event) => {
              dispatch(ResetRegisterState());
              navigation.navigate('Home');
            }}
            text='avançar'
            buttonColor='#12C2E9'
            textColor='#FFF'
          />
        </>
      }
    </Background>
  );
}

const styles = StyleSheet.create({
  doubleInputStyle: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitleDoneStyle: {
    fontFamily: 'PTSans-Regular',
    fontSize: 20,
    lineHeight: 22,
    color: '#FFF',
    marginBottom: 32,
  }
});

export default Register;
