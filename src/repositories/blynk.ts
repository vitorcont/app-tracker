import getInstance from '@mobile/api/axios';

const BlynkAPI = {
  getLatitude: async () => {
    const instance = await getInstance();
    const { data } = await instance.get('', {
      params: {
        v1: '',
      },
    });

    return data;
  },
  getLongitude: async () => {
    const instance = await getInstance();
    const { data } = await instance.get('', {
      params: {
        v2: '',
      },
    });

    return data;
  },
  getAltitude: async () => {
    const instance = await getInstance();
    const { data } = await instance.get('', {
      params: {
        v3: '',
      },
    });

    return data;
  },
  getSpeed: async () => {
    const instance = await getInstance();
    const { data } = await instance.get('', {
      params: {
        v7: '',
      },
    });

    return data;
  },
};

export default BlynkAPI;
