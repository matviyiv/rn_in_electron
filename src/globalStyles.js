import { StyleSheet } from 'react-native';
import _ from 'lodash';
import deepAssign from 'deep-assign';

const fonts = {
  light: {
    fontWeight: '300',
  },
  regular: {
    fontWeight: '400',
  },
  medium: {
    fontWeight: '500',
  },
  bold: {
    fontWeight: '600',
  },
};

const styles = {
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
};

const extend = (additionalStyles) =>
  StyleSheet.create(deepAssign({}, _.cloneDeep(styles), additionalStyles));

export default {
  styles,
  fonts,
  extend,
};
