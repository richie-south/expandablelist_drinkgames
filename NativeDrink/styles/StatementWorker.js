import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'

  },

  statementWrap: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  statement: {
    fontSize: 60,
    fontWeight: '400'
  },

  button: {
    borderWidth: 4,
    justifyContent: 'center',

    minWidth: 200,
    minHeight: 50,

    width: 300,
    height: 60,
  },

  buttonText: {
    margin: 30,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  }

});
