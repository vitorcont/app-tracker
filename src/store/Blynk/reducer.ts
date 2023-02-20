import { GET_TRACKING } from '../actionsType';

export const initialState: reducers.BlynkState = {
  latitude: 0,
  longitude: 0,
  altitude: 0,
  speed: 0,
  deviceConnection: false,
  lastSeenAt: '',
  mapsLink: '',
  bearing: 0,
};

const blynkReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_TRACKING:
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        altitude: action.payload.altitude,
        speed: action.payload.speed,
        deviceConnection: action.payload.deviceConnection,
        lastSeenAt: action.payload.lastSeenAt,
        mapsLink: action.payload.mapsLink,
        bearing: action.payload.bearing,
      };
    default:
      return state;
  }
};

export default blynkReducer;
