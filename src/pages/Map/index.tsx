import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { View, TouchableOpacity, Text } from 'react-native';
import { useReduxState } from '@mobile/hooks/useReduxState';
import { MaterialIcons } from '@expo/vector-icons';
import MeIcon from '@mobile/assets/icons/ic_me.svg';
import MapsIcon from '@mobile/assets/icons/ic_google_maps.svg';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { getTracking } from '@mobile/store/Blynk/action';
import { getUserLocation } from '@mobile/services/location';
import { LocationObjectCoords } from 'expo-location';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { DateTime } from 'luxon';
import { openWebSite } from '@mobile/services/contacts';
import { useLinkTo } from '@react-navigation/native';

const Map = () => {
  const dispatch = useDispatch();
  const linkTo = useLinkTo();
  const { blynk } = useReduxState();
  const [userLocation, setUserLocation] = useState<LocationObjectCoords | null>(null);
  const mapRef = useRef<MapView | null>(null);
  const [follow, setFollow] = useState<string | null>(null);

  const setDeviceLocation = async () => {
    const location = await getUserLocation();
    setUserLocation(location);
  };

  const centerUserLocation = () => {
    if (userLocation && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  };

  const centerLocation = () => {
    if (!!blynk.latitude && !!blynk.longitude && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: blynk.latitude,
        longitude: blynk.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  };

  useEffect(() => {
    setInterval(() => {
      dispatch(getTracking());
      setDeviceLocation();
    }, 1000);
  }, []);

  useEffect(() => {
    if (follow === 'user') {
      centerUserLocation();
    }
    if (follow === 'device') {
      centerLocation();
    }
  }, [blynk, userLocation, follow]);

  return (
    <View style={{ flex: 1 }}>
      <MapView ref={mapRef} style={styles.mapView} provider={PROVIDER_GOOGLE}>
        {!!blynk.latitude && !!blynk.longitude && (
          <Marker
            tracksViewChanges={false}
            coordinate={{
              latitude: blynk.latitude,
              longitude: blynk.longitude,
            }}>
            <FontAwesome name="map-marker" size={45} color="#b3251b" />
          </Marker>
        )}
        {!!userLocation && (
          <Marker
            tracksViewChanges={false}
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}>
            <MeIcon width={25} height={25} />
          </Marker>
        )}
      </MapView>
      <View style={styles.mapWrapper}>
        <TouchableOpacity
          onPress={() => {
            openWebSite('https://' + blynk.mapsLink);
          }}
          style={styles.mapsButton}>
          <MapsIcon width={35} height={35} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFollow(follow ? null : 'device');
          }}
          style={styles.findUserButton}>
          <MaterialCommunityIcons
            name="map-search"
            size={24}
            color={follow === 'device' ? '#09a5d9' : '#000'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFollow(follow ? null : 'user');
          }}
          style={styles.findButton}>
          <MaterialIcons
            name="my-location"
            size={22}
            color={follow === 'user' ? '#09a5d9' : '#000'}
          />
        </TouchableOpacity>
        <View style={styles.informationWrapper}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 3 }}>
            {blynk.deviceConnection ? (
              <MaterialIcons name="wifi-tethering" size={24} color="black" />
            ) : (
              <MaterialIcons name="portable-wifi-off" size={24} color="black" />
            )}
            <Text
              style={{
                marginLeft: 8,
                fontSize: 16,
                fontWeight: '600',
              }}>
              {!!blynk.deviceConnection ? 'Online' : 'Offline'}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 3 }}>
            <MaterialIcons name="speed" size={22} color="black" />
            <Text
              style={{
                marginLeft: 8,
                fontSize: 16,
                fontWeight: '600',
              }}>{`${blynk.speed} km/h`}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 3 }}>
            <MaterialIcons name="date-range" size={22} color="black" />
            <Text
              style={{
                marginLeft: 8,
                fontSize: 16,
                fontWeight: '600',
              }}>
              {DateTime.fromFormat(blynk.lastSeenAt, 'M/d/yyyy h:m')
                .minus({ hour: 3 })
                .toFormat('dd/MM/yyyy hh:mm')}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 3 }}>
            <MaterialCommunityIcons name="compass-outline" size={24} color="black" />
            <Text
              style={{
                marginLeft: 8,
                fontSize: 16,
                fontWeight: '600',
              }}>
              {blynk.bearing.toFixed(0) + 'º'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Map;
