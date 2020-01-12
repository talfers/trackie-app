import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Button from '../components/Button';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errMessage, submitText, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Spacer>
        <Text h3 style={styles.grey}>{headerText}</Text>
      </Spacer>
      <Spacer>
        <Input
          inputStyle={styles.grey}
          value={email}
          onChangeText={text => setEmail(text)}
          label="Email"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input
          inputStyle={styles.grey}
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          label="Password"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      {errMessage?<Text style={styles.errMessage}>{errMessage}</Text>:null}
      <Spacer><Button title={submitText} onPress={() => {onSubmit({email, password})}} /></Spacer>
    </>

  )
}

const styles = StyleSheet.create({
  errMessage: {
    color: 'darkred',
    marginLeft: 12,
    marginTop: 10,
    fontSize: 16
  },
  grey: {
    color: '#f0f0f0'
  }
});

export default AuthForm;
