import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  ScrollView,
  View,
  Pressable,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Background from '../../components/Background';
import Card from '../../components/Card';
import ButtonWithColor from '../../components/ButtonWithColor';
import TabHeader from '../../components/TabHeader';

import type { RootState } from '../../store'
import { SetCardList, SetSelectedCardIndex } from './listSlice';
import { fetchCards } from './utils';

function List(): React.JSX.Element {
  const cardList = useSelector((state: RootState) => state.list.cardList);
  const listFetched = useSelector((state: RootState) => state.list.listFetched);
  const selectedCardIndex = useSelector((state: RootState) => state.list.selectedCardIndex);
  
  const dispatch = useDispatch();
  const navigation = useNavigation();

  if(!listFetched){
    fetchCards((json: Array<any>) => {
      dispatch(SetCardList(json));
    });
  }

  return (
    <Background showBackgroundShapes={false}>
      <TabHeader text='Meus cartões' />
      <ScrollView style={styles.scrollStyle}>
        <View style={styles.containerStyle}>
          { cardList.map((item: any, index: number) => {
            if(selectedCardIndex === index.toString() || selectedCardIndex === 'none'){
              return (
                <Pressable key={`listpagecard-${index}`} onPress={(e) => {dispatch(SetSelectedCardIndex(index.toString()))}} style={styles.cardView}>
                  <Card
                    name={item.name}
                    number={item.number}
                    dueDate={item.dueDate}
                    cardColor='#111'
                    textColor='#FFF'
                  />
                </Pressable>
              );
            }
          })}
          { selectedCardIndex !== 'none' && 
            <>
              <ButtonWithColor text='pagar com este cartão' buttonColor='#12C2E9' textColor='#FFF' pressFunction={() => {navigation.navigate('Home');}} />
              <ButtonWithColor text='escolher outro cartão' buttonColor='#A5FF32' textColor='#142995' pressFunction={() => {dispatch(SetSelectedCardIndex('none'))}} />
            </>
          }
        </View>
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  scrollStyle: {
    width: '100%',
    marginTop: 32,
  },
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default List;
