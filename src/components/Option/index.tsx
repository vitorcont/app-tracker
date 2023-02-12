import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { styles } from './styles';

type OptionProps = TouchableOpacityProps & {
  name: string;
  disabled?: boolean;
  bold?: boolean;
};

export function Option({ name, disabled = false, bold = false, ...rest }: OptionProps) {
  const color = name === 'Cancelar' ? 'red' : disabled ? '#DFDFDF' : 'black';
  const style = bold
    ? [
        styles.bold,
        {
          color: color,
        },
      ]
    : [
        styles.regular,
        {
          color: color,
        },
      ];

  return (
    <>
      <TouchableOpacity {...rest} disabled={disabled}>
        <Text style={style}>{name}</Text>
      </TouchableOpacity>
      {name !== 'Cancelar' ? <View style={styles.divider} /> : []}
    </>
  );
}
