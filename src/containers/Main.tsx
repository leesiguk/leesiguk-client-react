import React from 'react';
import MainContent from '../components/main/MainContent';
import mockItems from '../../src/mock.json';

const Main = () => {
  return (
    <MainContent games={mockItems}/>
  );
};

export default Main;
