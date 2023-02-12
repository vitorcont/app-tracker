import { Linking } from 'react-native';

export const openCall = (phoneNumberProp: string) => {
  Linking.openURL(`tel:${phoneNumberProp}`);
};

export const openWhatsApp = (whatsappProp: string) => {
  const url = `whatsapp://send?phone=${whatsappProp}`;
  Linking.openURL(url);
};

export const openEmail = (emailProp: string) => {
  const url = `mailto:${emailProp}`;
  Linking.openURL(url);
};

export const openWebSite = (siteProp: string) => {
  Linking.openURL(siteProp);
};
