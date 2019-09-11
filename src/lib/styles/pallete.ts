const palette = {
  /* gray */
  gray0: '#F8F9FA',
  gray1: '#F1F3F5',
  gray2: '#E9ECEF',
  gray3: '#DEE2E6',
  gray4: '#CED4DA',
  gray5: '#ADB5BD',
  gray6: '#868E96',
  gray7: '#495057',
  gray8: '#343A40',
  gray9: '#212529',

  /* blue */
  blue0: '#e7f5ff',
  blue1: '#d0ebff',
  blue2: '#a5d8ff',
  blue3: '#74c0fc',
  blue4: '#4dabf7',
  blue5: '#339af0',
  blue6: '#228be6',
  blue7: '#1c7ed6',
  blue8: '#1971c2',
  blue9: '#1864ab',

  /* red */
  red0: '#fff5f5',
  red1: '#ffe3e3',
  red2: '#ffc9c9',
  red3: '#ffa8a8',
  red4: '#ff8787',
  red5: '#ff6b6b',
  red6: '#fa5252',
  red7: '#f03e3e',
  red8: '#e03131',
  red9: '#c92a2a'
};

export const buttonColorMap: {
  [color: string]: {
    backgroundColor: string;
    color: string;
    hoverBackgroundColor: string;
  };
} = {
  lightGray: {
    backgroundColor: palette.gray2,
    color: palette.gray7,
    hoverBackgroundColor: palette.gray1
  },
  gray: {
    backgroundColor: palette.gray6,
    color: 'white',
    hoverBackgroundColor: palette.gray5
  },
  darkGray: {
    backgroundColor: palette.gray8,
    color: 'white',
    hoverBackgroundColor: palette.gray6
  }
};

export default palette;
