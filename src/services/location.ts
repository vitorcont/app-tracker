import * as Location from 'expo-location';

export const getUserLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    return null;
  }

  let location = await Location.getCurrentPositionAsync({});
  return location.coords;
};
