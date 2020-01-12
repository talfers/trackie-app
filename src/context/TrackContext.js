import createDataContext from './createDataContext';
import trackieApi from '../api/trackie';

const trackReducer = (state, action) => {
  switch(action.type) {
    case 'get_tracks':
      return action.payload;
    default:
      return state;
  }
}

const fetchTracks = (dispatch) => {
  return async () => {
    const res = await trackieApi.get('/tracks');
    dispatch({type: 'get_tracks', payload: res.data})
  }
}

const createTrack = (dispatch) => {
  return async (name, locations) => {
    await trackieApi.post('/tracks', { name, locations });
  }
}

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
)
