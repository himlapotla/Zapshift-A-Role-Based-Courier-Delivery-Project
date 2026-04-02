// (
    // Import the functions you need from the SDKs you need (Software Development Kit)

    // learn sdk -- Think of it like a toolbox that a company gives you so you can easily use their service in your app.
    // Imagine you want to use electricity in your house.
    // You don't build the power plant yourself — the electric company gives you a socket (the SDK) that you just plug into

    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";

    // You are importing from Firebase's JavaScript SDK — a package Google built and gave you so you don't have to deal with the complex stuff underneath.
// )


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};


// (
    // Initialize Firebase - the connection to my Firebase project (app)
    const app = initializeApp(firebaseConfig);
    // This initializes Firebase inside your app
    // It creates a Firebase App instance
    // This instance acts like a gateway to all Firebase services (Auth, DB, Storage, etc.)
// )


// )
    // Initialize Firebase Authentication and get a reference to the service
    export const auth = getAuth(app);
    // Think of Firebase as a big building with many departments:
    // Firebase Building (app)
    // ├── 🔐 Authentication Department   ← getAuth() gives you access to THIS
    // ├── 🗄️  Database Department
    // ├── 📁 Storage Department
    // └── 📢 Messaging Department
    // getAuth(app) is like going to the reception desk and saying:

    // "Give me the keys to the Authentication department of THIS building"
// )









// listen i am saying you look i am right or wrong.   first -- 

// ```javascript
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };
// ```

// here it is the representation of my firebase project that i build in firebseconlose.                                       second -- 

// ```javascript
// const app = initializeApp(firebaseConfig);
// ```

// here i am making the connecton my zapshift project (I am initializing Firebase and accessing its services) which i am building with my firebase project that i build from firebase console.     
//                         third -- 

// ```javascript
// export const auth = getAuth(app);
// ```

// here i am getting the connecton with my zapshift project with firebase authentication system and this auth will be  used letter  on to do any authentication related action.   am i right?