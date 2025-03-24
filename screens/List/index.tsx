import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';

import Background from '../../components/Background';
import Title from '../../components/Title';
import Card from '../../components/Card';
import ButtonWithColor from '../../components/ButtonWithColor';

import type { RootState } from '../../store'
import { SetCardList } from './listSlice';
import { fetchCards } from './utils';

function List(): React.JSX.Element {
  const cardList = useSelector((state: RootState) => state.list.cardList);
  const listFetched = useSelector((state: RootState) => state.list.listFetched);
  
  const dispatch = useDispatch();

  fetchCards((json: Array<any>) => {
    dispatch(SetCardList(json));
  });

  return (
    <Background showBackgroundShapes={false}>
      <ScrollView style={styles.scrollStyle}>
        <View style={styles.containerStyle}>
          <Title text='Wallet Test' titleColor='#FFF' />
          { cardList.map((item: any) => {
            return <Card name={item.name} number={item.number} dueDate={item.dueDate} cardColor='#111' textColor='#FFF' />;
          })}
        </View>
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  scrollStyle: {
    width: '100%',
  },
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default List;
