import React, { useEffect } from 'react';
import Navigation from './src/navigation/Navigation'
import firebase from '@react-native-firebase/app'
import OneSignal from 'react-native-onesignal';
import codePush from "react-native-code-push";

var firebaseConfig = {
  apiKey: "AIzaSyA0VgMf6hfoJmhb-M2jXRWUEdeUopAkFq8",
  authDomain: "ayoshopping-fbaff.firebaseapp.com",
  databaseURL: "https://ayoshopping-fbaff.firebaseio.com",
  projectId: "ayoshopping-fbaff",
  storageBucket: "ayoshopping-fbaff.appspot.com",
  messagingSenderId: "713244706516",
  appId: "1:713244706516:web:ab13482f0f83b94f1bdd41",
  measurementId: "G-5BFFRV0Y87"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {

  useEffect(() => {
    OneSignal.setLogLevel(6, 0);

    OneSignal.init("d9d75552-c30e-4602-95de-e674a3a4e097", { kOSSettingsKeyAutoPrompt: false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption: 2 });
    OneSignal.inFocusDisplaying(2);

    OneSignal.addEventListener('received', onReceived)
    OneSignal.addEventListener('opened', onOpened)
    OneSignal.addEventListener('ids', onIds)

    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    }, SyncStatus)

    return () => {
      OneSignal.removeEventListener('received', onReceived)
      OneSignal.removeEventListener('opened', onOpened)
      OneSignal.removeEventListener('ids', onIds)
    }
  }, [])

  const SyncStatus = (status) => {
    switch (status) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log("Checking for Update")
        break;
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log("Downloading Package")
        break;
      case codePush.SyncStatus.UP_TO_DATE:
        console.log("Up to Date")
        break;
      case codePush.SyncStatus.INSTALLING_UPDATE:
        console.log("Installing Update")
        break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
        Alert.alert("Notification", "Update Installed")
        break;
      case codePush.SyncStatus.AWAITING_USER_ACTION:
        console.log("Awaiting User")
        break;
      default:
        break;
    }
  }

  const onReceived = (notification) => {
    console.log("onReceived -> notification", notification)
  }

  const onOpened = (openResult) => {
    console.log("onOpened -> openResult", openResult)
  }

  const onIds = (device) => {
    console.log("onIds -> device", device)
  }

  return (
    <Navigation />
  );
}
