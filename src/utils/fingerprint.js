import Fingerprint2 from "fingerprintjs2";

export function getFingerprint() {
  return new Promise(resolve =>
    Fingerprint2.getPromise({}).then(components => {
      const values = components.map(component => component.value).join("");
      const hash = Fingerprint2.x64hash128(values, 31);
      resolve(hash);
    })
  );
}
export function getUserInfo() {
  return new Promise(resolve =>
    Fingerprint2.getPromise({}).then(components => {
      resolve(components);
    })
  );
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
