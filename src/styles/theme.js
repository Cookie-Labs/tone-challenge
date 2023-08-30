const viewSize = {
  mobile: 'screen and (max-width: 767px)', // ~767px
  tablet: 'screen and (max-width: 1023px)', // 768px~1023px
  web: 'screen and (min-width: 1024px)', // 1024px~
};

const fontSize = {
  xs: '0.5rem', // 8px
  sm: '0.75rem', // 12px
  base: '0.875rem', // 14px
  md: '1rem', // 16px, 13px, 10px
  lg: '1.25rem', // 20px
  xl: '1.5rem', // 24px
  xxl: '1.75rem', // 28px
  xxxl: '2rem', // 32px
  subTitle: '2.5rem', // 40px
  title: '3.25rem', // 52px
  bigTitle: '5rem', // 80px
};

const fontWeight = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
};

const effectStyles = {
  bigCard: '4px 4px 10px 0px rgba(0,0,0,0.25)',
  smallCard: '4px 4px 20px 0px rgba(0,0,0,0.12)',
  formContainer: '4px 4px 12px 0px rgba(0,0,0,0.04)',
  dropdownMenu: '0 4px 10px 2px rgba(0,0,0,0.3)',
};

const lightModeColor = {
  black: '#000000',
  white: '#FFFFFF',
  red: '#FF0000',
  gray01: '#FBFBFB',
  gray02: '#F7F7F7',
  gray03: '#F5F4F3',
  gray04: '#EFEFEF',
  gray05: '#ECECEC',
  gray06: '#DFDFDF',
  gray07: '#C1C1C1',
  gray08: '#A5A5A5',
  gray09: '#8B8B8B',
  gray10: '#6F6F6F',
  gray11: '#555555',
  gray12: '#3D3D3D',
  gray13: '#333333',
  gray14: '#242424',
  gray15: '#171717',
  blue01: '#D2E7F8',
  blue02: '#B5D8F4',
  blue03: '#98C9EF',
  blue04: '#81BFEF',
  blue05: '#6AB6F0',
  blue06: '#469FE3',
  blue07: '#2087D6',
  blue08: '#0073CB',
  blue09: '#0166B3',
  blue10: '#01599D',
  blue11: '#014D88',
  blue12: '#001B30',
  attendanceNotyet: '#A5A5A5',
  attendanceAbsent: '#FF0000',
  attendanceAttend: '#11D611',
};

const darkModeColor = {};

const theme = {
  viewSize,
  fontSize,
  fontWeight,
  effectStyles,
  lightModeColor,
  darkModeColor,
};

export default theme;
