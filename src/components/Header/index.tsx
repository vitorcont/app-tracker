import { FontAwesome } from '@expo/vector-icons';
import navigationService from '@mobile/services/navigation';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface HeaderProps {
  title: string;
  variant: 'default' | 'home' | 'report' | 'profile';
}

export function Header({ title, variant = 'default' }: HeaderProps) {
  return (
    <>
      {variant === 'default' && (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
      {variant === 'home' && (
        <View style={styles.homeContainer}>
          <Text style={styles.headerText}>{`Olá, ${title}!`}</Text>
          <Text style={styles.headerDescription}>
            Seja bem vindo so seu portal de ocorrências, aqui você poderá relatar e vizualizar os
            problemas de sua região.
          </Text>
        </View>
      )}
      {variant === 'profile' && (
        <View style={styles.homeContainer}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      )}
      {variant === 'report' && (
        <View style={styles.reportContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ paddingRight: 20 }}
            onPress={() => navigationService.back()}>
            <FontAwesome name="arrow-left" size={24} color="white" />
          </TouchableOpacity>

          <Text style={styles.reportHeader}>{title}</Text>
        </View>
      )}
    </>
  );
}
