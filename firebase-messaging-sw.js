importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCTwyIJApmGXLSQP-KNSR7MTgRcYRW4TBk",
  authDomain: "ehdaqui-a25d2.firebaseapp.com",
  projectId: "ehdaqui-a25d2",
  storageBucket: "ehdaqui-a25d2.firebasestorage.app",
  messagingSenderId: "823098271292",
  appId: "1:823098271292:web:6806e14d892a2bd75ac539"
});

const messaging = firebase.messaging();