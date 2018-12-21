interface EmitterSubscription {
  remove: () => void;
}

type VolumeType =
  | 'call'
  | 'system'
  | 'ring'
  | 'music'
  | 'alarm'
  | 'notification';

declare module 'react-native-system-setting' {
  export default class SystemSetting {
    public static getBrightness: () => Promise<number>;
    public static setBrightness: (val: number) => Promise<boolean>;
    public static setBrightnessForce: (val: number) => Promise<boolean>;
    public static getAppBrightness: () => Promise<number>;
    public static setAppBrightness: (val: number) => Promise<boolean>;
    public static grantWriteSettingPremission: () => void;
    public static getScreenMode: () => Promise<number>;
    public static setScreenMode: (val: number) => Promise<number>;
    public static saveBrightness: () => Promise<void>;
    public static restoreBrightness: () => number;
    public static getVolume: (type?: VolumeType) => Promise<number>;
    public static setVolume: () => void;
    public static addVolumeListener: (
      callback: () => void
    ) => EmitterSubscription;
    public static removeVolumeListener: () => void;
    public static isWifiEnabled: () => Promise<boolean>;
    public static switchWifiSilence: () => void;
    public static switchWifi: () => void;
    public static isLocationEnabled: () => Promise<boolean>;
    public static getLocationMode: () => Promise<number>;
    public static switchLocation: () => void;
    public static isBluetoothEnabled: () => Promise<boolean>;
    public static switchBluetooth: () => void;
    public static switchBluetoothSilence: () => void;
    public static isAirplaneEnabled: () => Promise<boolean>;
    public static switchAirplane: () => void;
    public static addBluetoothListener: (
      callback: () => void
    ) => Promise<EmitterSubscription>;
    public static addWifiListener: (
      callback: () => void
    ) => Promise<EmitterSubscription | undefined>;
    public static addLocationListener: (
      callback: () => void
    ) => Promise<EmitterSubscription | undefined>;
    public static addAirplaneListener: (
      callback: () => void
    ) => Promise<EmitterSubscription | undefined>;
    public static removeListener: (listener?: EmitterSubscription) => void;
  }
}
