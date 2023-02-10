import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: 'AIzaSyDXl9hZ1pe_vR4AHFPI9MsrMRCZvVctNZw',
  authDomain: 'restaurantapp-898da.firebaseapp.com',
  databaseURL: 'https://restaurantapp-898da-default-rtdb.firebaseio.com',
  projectId: 'restaurantapp-898da',
  storageBucket: 'restaurantapp-898da.appspot.com',
  messagingSenderId: '464154625059',
  appId: '1:464154625059:web:3da8f5fd7c47fc89bf1d96',
}

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }