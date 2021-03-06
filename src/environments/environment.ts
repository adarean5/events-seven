// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfigDev = {
    apiKey: "AIzaSyCZ3seLFt83NTojiiea47QhMbOSBsD-IrQ",
    authDomain: "events7-dev.firebaseapp.com",
    projectId: "events7-dev",
    storageBucket: "events7-dev.appspot.com",
    messagingSenderId: "882939281004",
    appId: "1:882939281004:web:862d57b692e9e18bca6249",
};

export const environment = {
    production: false,
    firebaseConfig: firebaseConfigDev,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
