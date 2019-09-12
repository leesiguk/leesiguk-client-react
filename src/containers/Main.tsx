import React from 'react';
import MainContent from '../components/main/MainContent';
import { useListVals } from 'react-firebase-hooks/database';
import db from '../lib/firebase/db';

export interface Brand {
  name: string;
  brandColor: string;
  brandImageUrl: string;
  facebookPageUrl: string;
  like: number;
  likeHistory: number[];
}

export interface Game {
  category: string;
  id: string;
  japan: Brand;
  korea: Brand;
}

export type BrandType = 'japan' | 'korea';

const Main = () => {
  const [games, loading] = useListVals<Game>(db.ref('/'));

  return <MainContent games={games!} loading={loading} />;
};

export default Main;
