import { GET_TRACKING } from './../actionsType';
import { Dispatch } from 'redux';
import Toaster from '@mobile/services/toaster';
import BlynkAPI from '@mobile/repositories/blynk';

export const getTracking = () => async (dispatch: Dispatch) => {
  // dispatch(startLoading());
  try {
    const data = await Promise.all([
      BlynkAPI.getLatitude(),
      BlynkAPI.getLongitude(),
      BlynkAPI.getAltitude(),
      BlynkAPI.getSpeed(),
    ]);

    const payload: reducers.BlynkState = {
      latitude: data[0],
      longitude: data[1],
      altitude: data[2],
      speed: data[3],
    };
    dispatch({ type: GET_TRACKING, payload });
  } catch (err) {
    console.log(err);
    Toaster.error('Erro', 'Dados inválidos');
  } finally {
    // dispatch(stopLoading());
  }
};
