import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import { navigate } from '../navigationRef';
import trackerApi from '../api/trackie';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errMessage: action.payload };
    case 'clear_err_message':
      return { ...state, errMessage: ''}
    case 'signin':
      return { errMessage: '', token: action.payload };
    case 'signout':
      return { token: null, errMessage: ''};
    default:
      return state;
  }
}

const tryLocalSignin = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem('token');
    if(token) {
      dispatch({type: 'signin', payload: token});
      navigate('TrackList');
    } else {
      navigate('Signin');
    }

  }
}

const clearErrMessage = (dispatch) => {
  return () => {
    dispatch({type: 'clear_err_message'})
  }
}

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      // Make API request with email and password
      const response = await trackerApi.post('/signup', { email, password })
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token})
      navigate('TrackList');

    } catch(err) {
      dispatch({ type: 'add_error', payload: 'Error during signup attempt'})
    }

  }
}

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signin', { email, password })
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});
      navigate('TrackList');
    } catch(err) {
      dispatch({type: 'add_error', payload: 'Error during signin attempt'})
    }
    // Try signin with email, password
    // Handle success, update state
    // Handle failure, show err message
  }
}

const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('Signin');
  }
}

export const {Provider, Context} = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrMessage, tryLocalSignin },
  { isSignedIn: false, errMessage: '' }
);
