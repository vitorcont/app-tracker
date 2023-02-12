import { theme } from '@mobile/global/styles/theme';
import React, { useEffect, useRef } from 'react';
import { Animated, View, Text } from 'react-native';
import { MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';

interface ICardProps {
  title: string;
  type: string;
  subType: string;
  date?: string;
}

const Card = ({ title, type, subType, date }: ICardProps) => {
  return (
    <View
      style={{
        elevation: 5,
        width: '89%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: theme.colors.primary,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        marginBottom: 15,
        paddingRight: 10,
      }}>
      <View
        style={{
          width: '25%',
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}>
        <MaterialIcons name="report" size={60} color="#d82b00" />
      </View>
      <View
        style={{
          width: '65%',
          marginTop: 10,
          marginBottom: 3,
        }}>
        <View style={{ flexDirection: 'column', alignContent: 'center' }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: theme.fonts.Bold,
            }}>
            {title}
          </Text>
          <Text
            style={{
              marginTop: -4,
              fontSize: 16,
              fontFamily: theme.fonts.Bold,
            }}>
            {type}
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontFamily: theme.fonts.Regular,
              marginTop: -5,
            }}>
            {subType}
          </Text>
        </View>
        <View style={{ right: 0, alignSelf: 'flex-end' }}>
          <Text
            style={{
              opacity: 0.3,
              fontSize: 14,
              fontFamily: theme.fonts.Regular,
            }}>
            {date}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
