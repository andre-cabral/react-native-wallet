import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { hideCardNumbers } from './utils';

type CardProps = PropsWithChildren<{
  name: string,
  number: string,
  dueDate: string,
  cardColor: string,
  textColor: string,
}>;

function Card({
  name,
  number,
  dueDate,
  cardColor,
  textColor,
}:CardProps): React.JSX.Element {
  const colors = StyleSheet.create({
    cardColor: {
      backgroundColor: cardColor,
    },
    textColor: {
      color: textColor,
    }
  });
  return (
    <View style={[styles.cardStyle, colors.cardColor]}>
      <Text style={[styles.cardTypeStyle, colors.textColor]}>Black Card</Text>
      <Text style={[styles.cardNameStyle, colors.textColor]}>{name}</Text>
      <Text style={[styles.cardNumberStyle, colors.textColor]}>{hideCardNumbers(number)}</Text>
      <Text style={[styles.cardDueDateStyle, colors.textColor]}>Validade {dueDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    width: '80%',
    minHeight: 180,
    boxSizing: 'border-box',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    justifyContent: 'center',
  },
  cardTypeStyle: {
    fontFamily: 'PTSans-Regular',
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 32,
  },
  cardNameStyle: {
    fontFamily: 'PTSans-Regular',
    fontSize: 16,
    lineHeight: 18,
    marginBottom: 4,
  },
  cardNumberStyle: {
    fontFamily: 'PTSans-Regular',
    fontSize: 14,
    lineHeight: 16,
    marginBottom: 4,
  },
  cardDueDateStyle: {
    fontFamily: 'PTSans-Regular',
    fontSize: 14,
    lineHeight: 16,
    marginBottom: 4,
  },
});

export default Card;
