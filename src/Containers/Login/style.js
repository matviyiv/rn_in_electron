import { Platform } from 'react-native';
import globalStyles from '../../globalStyles';

const style = globalStyles.extend({
  bg: {
    flex: 1,
  },

  bgImage: {
    flex: 1,
    width: null,
    height: null,
  },

  page: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: 'transparent',
  },

  logoImage: {
    width: 221,
    height: 103,
    alignSelf: 'center',
  },

  text: {
    ...globalStyles.fonts.light,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },

  formRow: {
    flexDirection: 'row',
    height: 48,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.6)',
  },
  iconPhoneWrapper: {
    width: 32,
    height: 48,
    marginRight: 12,
    alignItems: 'center',
  },
  iconPhone: {
    width: 48,
    height: 48,
  },
  inputField: {
    flex: 1,
    height: 48,
    padding: 0,
    margin: 0,
    ...globalStyles.fonts.bold,
    color: '#fff',
  },
  iconCheckWrapper: {
    width: 26,
    height: 48,
    alignItems: 'center',
  },
  iconCheck: {
    width: 48,
    height: 48,
  },

  buttonSubmitWrapper: {
    alignSelf: 'center',
  },
  textInfo: {
    fontSize: 12,
    ...globalStyles.fonts.light,
    color: 'white',
    textAlign: 'center',
  },
  termsWrapper: {
    flex: 1,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default style;
