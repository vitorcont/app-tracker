import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modal: {
    alignSelf: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,

    top: '25%',
    width: '80%',
    paddingTop: 30,
    borderRadius: 16,
    backgroundColor: '#FAFAFA',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
});
