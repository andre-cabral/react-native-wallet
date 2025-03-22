import React from 'react';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

import Background from '../../components/Background';
import Title from '../../components/Title';
import ButtonWithColor from '../../components/ButtonWithColor';

function Home(): React.JSX.Element {

  const navigation = useNavigation();

  return (
    <Background showBackgroundShapes={true}>
      <Title text='Wallet Test' titleColor='#fff' />
      <ButtonWithColor 
        pressFunction={(e: Event) => {navigation.navigate('List')}}
        text='meus cartões'
        buttonColor='#12C2E9'
        textColor='#fff'
      />
      <ButtonWithColor
        pressFunction={(e: Event) => {navigation.navigate('Register')}}
        text='cadastrar cartão'
        buttonColor='#A5FF32'
        textColor='#142995'
      />
    </Background>
  );
}

export default Home;
