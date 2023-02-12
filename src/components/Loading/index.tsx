import { theme } from '@mobile/global/styles/theme';
import React from 'react';
import LoadingIcon from '@mobile/assets/icons/ic_loading.svg';
import { ActivityIndicator, Text, View } from 'react-native';

const Loading = () => {
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 100,
        width: '100%',
        height: '100%',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
      <Text
        style={{
          color: '#222222',
          fontSize: 22,
          fontFamily: theme.fonts.Bold,
          textAlign: 'center',
          marginTop: 40,
        }}>
        Carregando...
      </Text>
      <Text
        style={{
          color: '#222222',
          fontSize: 16,
          fontFamily: theme.fonts.Regular,
          textAlign: 'center',
          marginHorizontal: 40,
          marginBottom: 80,
        }}>
        Estamos preparando tudo para você ter a melhor experiência possível
      </Text>
      <LoadingIcon height={200} />
    </View>
  );
};

export default Loading;
