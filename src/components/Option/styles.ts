import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const { Regular, Bold } = theme.fonts;

export const styles = StyleSheet.create({
  regular: {
    fontSize: 18,
    fontFamily: Regular,
  },

  bold: {
    fontSize: 18,
    fontFamily: Bold,
  },

  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#DFDFDF',
    bottom: 2,
  },
});
