import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navigationActions } from '../../Actions';
import Styles from './style';

@connect(
  null,
  (dispatch) => ({
    navigationActions: bindActionCreators(navigationActions, dispatch),
  }),
)
export default class Login extends Component {

  onSubmitPhoneNumber = () => {
    this.props.navigationActions.navigate('MainPage');
  };

  render() {
    // eslint-disable-next-line no-shadow
    return (
      <View style={Styles.bg}>
        <Text style={Styles.text}>Sign in with your phone number</Text>

        <View style={Styles.formRow}>
          <TextInput
            accessible
            accessibilityLabel={'Please input your phone number'}
            value=""
            style={Styles.inputField}
            underlineColorAndroid="transparent"
            maxLength={16}
          />
        </View>

        <TouchableOpacity
          accessible
          accessibilityComponentType="button"
          accessibilityLabel={'Press to submit your phone number'}
          onPress={this.onSubmitPhoneNumber}
          style={Styles.buttonSubmitWrapper}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
