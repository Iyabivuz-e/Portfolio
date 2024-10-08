
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDf0Er5JY9Temn0yhVDuaCNhP1xVA8ZKrc",
  authDomain: "dio-portfolio-a46a2.firebaseapp.com",
  projectId: "dio-portfolio-a46a2",
  storageBucket: "dio-portfolio-a46a2.appspot.com",
  messagingSenderId: "435485977141",
  appId: "1:435485977141:web:8a598d31c8c6db01dddf7c",
  measurementId: "G-22PW67W04R",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Request permission to receive notifications
const requestPermission = async () => {
  try {
    await Notification.requestPermission();
    console.log("Notification permission granted.");
  } catch (error) {
    console.error("Permission not granted", error);
  }
};

// Get FCM token
const getFcmToken = async () => {
  try {
    const token = await getToken(messaging, { vapidKey: "YOUR_VAPID_KEY" });
    console.log("FCM Token:", token);
  } catch (error) {
    console.error("Error getting FCM token", error);
  }
};

// Handle foreground messages
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);

  // Check if the notification is defined
  if (payload.notification) {
    // Show notification only if payload.notification exists
    new Notification(payload.notification.title || "Default Title", {
      body: payload.notification.body || "Default Body",
    });
  } else {
    console.warn("Notification data is missing in the payload.");
  }
});

requestPermission();
getFcmToken();

