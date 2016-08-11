import {
  StyleSheet,
  Dimensions
} from 'react-native';

const rWindow = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: 100,
    borderColor: 'rgba(255, 255, 255, 0.67)' // bugg wont work :/
  },

  title: {
    position: 'relative',
    top: (100/2)-30,
    fontSize: 30,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.67)',
    textAlign: 'center',
    margin: 10
  },

  backButtonWrap: {
    position: 'absolute',
    top: 16,
    left: -24,
    width: 40,
    height: 30
  },

  backButton: {
    marginTop: 5,
    color: 'rgba(255, 255, 255, 0.67)',
    width: 40,
    height: 30
  },

  childComonent: {
    flex: 1,
    margin: 16,
    marginTop: 20,
    paddingBottom: 25,
    justifyContent: 'flex-start',
  },
});
