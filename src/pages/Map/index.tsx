import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useReduxState } from '@mobile/hooks/useReduxState';
import { theme } from '@mobile/global/styles/theme';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Host, Portal } from 'react-native-portalize';
import WarnIcon from '@mobile/assets/icons/ic_warn.svg';
import MeIcon from '@mobile/assets/icons/ic_me.svg';
import { styles } from './styles';
import Button from '@mobile/components/Button';
import { actualDate, toLocaleDate } from '@mobile/services/date';
import { DateTime } from 'luxon';
import { useDispatch } from 'react-redux';
import { getTracking } from '@mobile/store/Blynk/action';

const Map = () => {
  const dispatch = useDispatch();
  const { blynk } = useReduxState();

  const mapRef = useRef<MapView | null>(null);

  useEffect(() => {
    setInterval(() => {
      dispatch(getTracking());
    }, 1000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView ref={mapRef} style={{ width: '100%', height: '100%' }}>
        {blynk.latitude && blynk.longitude && (
          <Marker
            coordinate={{
              latitude: blynk.latitude,
              longitude: blynk.longitude,
            }}>
            <MeIcon width={25} height={25} />
          </Marker>
        )}
        {/* {markers.map((marker, index) => (
          <Marker
            onPress={() => setSelected(marker)}
            key={index}
            coordinate={{
              latitude: parseFloat(marker.latitude),
              longitude: parseFloat(marker.longitude),
            }}>
            <WarnIcon width={45} height={45} />
          </Marker>
        ))} */}
      </MapView>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            marginBottom: 30,
            marginRight: 15,
            width: 45,
            height: 45,
            backgroundColor: theme.colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
          }}>
          <MaterialIcons name="my-location" size={22} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Map;
function DateTimeFormatOptions(createdAt: string | undefined, DateTimeFormatOptions: any) {
  throw new Error('Function not implemented.');
}
