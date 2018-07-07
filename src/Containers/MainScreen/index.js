import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navigationActions } from '../../Actions';

@connect(
  null,
  (dispatch) => ({
    navigationActions: bindActionCreators(navigationActions, dispatch),
  }),
)
export default class MainScreen extends Component {
  goBack = () => {
    this.props.navigationActions.goBack();
  }
  render() {
    return (<View style={styles.mainColumn}>
      <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
          <Text>Left panel</Text>
          <TouchableOpacity
            accessible
            accessibilityComponentType="button"
            accessibilityLabel={'Go back'}
            onPress={this.goBack}
          >
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightContainer}>
          <Text>Right panel</Text>
        </View>
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
  },
  mainColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  leftContainer: {
    flex: 2,
  },
  rightContainer: {
    flex: 3,
  },
});