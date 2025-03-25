/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Background from '../components/Background';
import ButtonWithColor from '../components/ButtonWithColor';
import Card from '../components/Card';
import CardInput from '../components/CardInput';
import TabHeader from '../components/TabHeader';
import Title from '../components/Title';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<Background />);
  });
});

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<ButtonWithColor text='Test button' buttonColor='#111' textColor='#FFF' pressFunction={()=>{}} />);
  });
});

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<Card name='Test Person Name' number='1111 2222 3333 4444' dueDate='11/23' cardColor='#111' textColor='#fff' />);
  });
});

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<CardInput label='Test label' labelColor='#111' placeholder='test placeholder' onEndEditing={()=>{}} />);
  });
});

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<TabHeader text='Test tab header' />);
  });
});

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<Title text='Test title' titleColor='#111' />);
  });
});
