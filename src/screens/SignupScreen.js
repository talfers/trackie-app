import React, { useContext } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ({navigation}) => {
  const { state, signup, clearErrMessage } = useContext(AuthContext);

  return (

      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1477415657650-2a16a7c0afae?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'}} style={{width: '100%', height: '100%'}}>
          <View style={styles.container}>
            <NavigationEvents onWillBlur={() => {clearErrMessage()}}/>
            <AuthForm
              headerText="Sign Up for Trackie"
              submitText="Sign Up"
              errMessage={state.errMessage}
              onSubmit={( { email, password } ) => {signup({email, password})}}
            />
          <NavLink title="Already Have An Account? Sign In" routeName="Signin" />
          </View>
      </ImageBackground>


  )
}

SignupScreen.navigationOptions = () => {
  return {
    header: null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 200,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
});

export default SignupScreen;
