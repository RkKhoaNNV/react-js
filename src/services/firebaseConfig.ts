import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

// Replace these values with your project's ones
// (you can find such code in the Console)
const firebaseConfig = {
  apiKey: 'AIzaSyCoB2MSi088FwHbVjwVnMTJH6roAYkJ2P0',
  authDomain: 'react-boilerplate-push-notice.firebaseapp.com',
  projectId: 'react-boilerplate-push-notice',
  storageBucket: 'react-boilerplate-push-notice.appspot.com',
  messagingSenderId: '150173288546',
  appId: '1:150173288546:web:b422cde75d4aeec383a93b',
  measurementId: 'G-NNSPX9H757',
};

export const app = initializeApp(firebaseConfig);
const messaging = getMessaging();

export async function getFCMToken() {
  try {
    // Don't forget to paste your VAPID key here
    // (you can find it in the Console too)
    const token = await getToken(messaging, {
      vapidKey: 'BERKE8-s9mVA7JQFT_jJDELv6I1KXvXPYdnR2qFmfUdCykKW3vzNJt3ZPtI5llzhDOlwabL9F0yRk7gT0FhQtgI',
    });
    return token;
  } catch (e) {
    console.log('getFCMToken error', e);
    return undefined;
  }
}
