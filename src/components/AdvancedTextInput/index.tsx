import { theme } from '@mobile/global/styles/theme';
import React from 'react';
import { KeyboardType, TextInput, View, ViewStyle } from 'react-native';

interface TextIProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  keyboardType?: KeyboardType;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
  multiline?: boolean;
  secureTextEntry?: boolean;
  style?: ViewStyle;
}

const AdvancedTextInput = ({
  onChange,
  value,
  disabled,
  maxLength,
  onBlur,
  onFocus,
  placeholder,
  keyboardType,
  multiline,
  style,
  secureTextEntry,
}: TextIProps) => {
  return (
    <View
      style={[
        {
          backgroundColor: disabled ? '#dfdfdf' : '#eeeeee',
          borderRadius: 16,
          borderColor: '#dddddd',
          borderWidth: 1.5,
          paddingVertical: 8,
          paddingHorizontal: 14,
          width: '100%',
          height: 60,
          justifyContent: 'center',
        },
        style,
      ]}>
      <TextInput
        style={{
          fontSize: 20,
          fontFamily: theme.fonts.Regular,
        }}
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        maxLength={maxLength}
        editable={!disabled}
        keyboardType={keyboardType}
        onBlur={onBlur}
        onFocus={onFocus}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
        blurOnSubmit
      />
    </View>
  );
};

export default AdvancedTextInput;
