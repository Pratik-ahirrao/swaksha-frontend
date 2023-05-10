// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyCCxB1aAQLHWk1vAQPS_YVdBujy05VkMCM",
    authDomain: "swaksha-7e825.firebaseapp.com",
    projectId: "swaksha-7e825",
    storageBucket: "swaksha-7e825.appspot.com",
    messagingSenderId: "476499142717",
    appId: "1:476499142717:web:bc85113a0876ed39bca254",
    measurementId: "G-D7VXY3WK2F"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});