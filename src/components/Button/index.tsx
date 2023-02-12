import { theme } from '@mobile/global/styles/theme';
import React, { useEffect, useRef } from 'react';
import { ActivityIndicator, Animated, Text, TouchableOpacity } from 'react-native';

interface IButtonProps {
  loading?: boolean;
  onPress?: () => void;
  label: string;
  animated?: boolean;
}

const Button = ({ loading, onPress, label, animated = true }: IButtonProps) => {
  const value = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    const fade = () => {
      Animated.timing(value, {
        toValue: loading ? 60 : 200,
        duration: 300,
        useNativeDriver: false,
      }).start();
    };

    fade();
  }, [loading]);

  return (
    <Animated.View
      style={{
        ...(animated && { width: value }),
        height: 60,
        borderRadius: loading ? 120 : 20,
        justifyContent: 'center',
        elevation: 5,
        backgroundColor: theme.colors.primary,
      }}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: loading ? 120 : 20,
          backgroundColor: theme.colors.primary,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text
            style={{
              fontSize: 24,
              color: 'white',
              fontFamily: theme.fonts.Regular,
            }}>
            {label}
          </Text>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Button;
