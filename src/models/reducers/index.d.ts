export as namespace reducers;

export interface AuthState {
  authenticated: {
    accessToken: string | null;
  };
  logged: boolean;
}

export interface BlynkState {
  latitude: number;
  longitude: number;
  speed: number;
  altitude: number;
}

export interface ReduxState {
  loading: number;
  blynk: BlynkState;
}
