import Fingerprint2 from "fingerprintjs2";

export function getFingerprint() {
  return new Promise(resolve =>
    Fingerprint2.getPromise({}).then(components => {
      const values = components.map(component => component.value).join("");
      const hash =
        process.env.REACT_APP_FINGERPRINT_PREFIX +
        Fingerprint2.x64hash128(values, 31) +
        process.env.REACT_APP_FINGERPRINT_SUFFIX;
      resolve(hash);
    })
  );
}

export function getUserInfo() {
  return new Promise(async resolve => {
    const fingerprint = await Fingerprint2.getPromise({})
      .then(components => {
        return components.reduce(
          (acc, cur) => ({ ...acc, [cur.key]: cur.value }),
          {}
        );
      })
      .catch(err => emptyFingerprint);
    const ip = await fetch("https://extreme-ip-lookup.com/json")
      .then(res => res.json())
      .catch(error => emptyIp);

    const userInfo = { ...fingerprint, ...ip };
    resolve(userInfo);
  });
}

// https://dev.to/molamk/sneaky-fingerprint-and-ip-tracker-2ka7
export function getIp() {
  return new Promise(resolve =>
    fetch("https://extreme-ip-lookup.com/json")
      .then(res => res.json())
      .then(json => {
        const values = Object.keys(json)
          .map(value => json[value])
          .join("");

        const hash = Fingerprint2.x64hash128(values, 31);
        resolve(hash);
      })
  );
}

const emptyIp = {
  businessName: null,
  businessWebsite: null,
  city: null,
  continent: null,
  country: null,
  countryCode: null,
  ipName: null,
  ipType: null,
  isp: null,
  lat: null,
  lon: null,
  org: null,
  query: null,
  region: null,
  status: null
};
const emptyFingerprint = {
  userAgent: null,
  webdriver: null,
  language: null,
  colorDepth: null,
  deviceMemory: null,
  hardwareConcurrency: null,
  screenResolution: null,
  availableScreenResolution: null,
  timezoneOffset: null,
  timezone: null,
  sessionStorage: null,
  localStorage: null,
  indexedDb: null,
  addBehavior: null,
  openDatabase: null,
  cpuClass: null,
  platform: null,
  plugins: null,
  canvas: null,
  webgl: null,
  webglVendorAndRenderer: null,
  adBlock: null,
  hasLiedLanguages: null,
  hasLiedResolution: null,
  hasLiedOs: null,
  hasLiedBrowser: null,
  touchSupport: null,
  fonts: null,
  audio: null
};
