import React from 'react';

import Background from '../../components/Background';
import Title from '../../components/Title';
import ButtonWithColor from '../../components/ButtonWithColor';

function List(): React.JSX.Element {

  return (
    <Background showBackgroundShapes={false}>
      <Title text='Wallet Test' titleColor='#fff' />
    </Background>
  );
}

export default List;
