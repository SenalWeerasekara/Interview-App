import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { FirebaseEnv } from "./config";
import { genRandFileName } from "./utils/random";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

const FirebaseApp = initializeApp({
    apiKey: FirebaseEnv.API_KEY,
    authDomain: FirebaseEnv.AUTH_DOMAIN,
    projectId: FirebaseEnv.PROJECT_ID,
    storageBucket: FirebaseEnv.STORAGE_BUCKET,
    messagingSenderId: FirebaseEnv.MESSAGING_SENDER_ID,
    appId: FirebaseEnv.APP_ID,
    measurementId: FirebaseEnv.MEASUREMENT_ID,
  });
  
  const Storage = getStorage(FirebaseApp);

  export async function uploadFile(
    file: File | Blob,
    name ?: string,
    collection?: string
  ) {
    const file_name = name || genRandFileName();
    // const file_name = name;
    const storage_ref = ref(Storage, `${collection || "public"}/${file_name}`);
  
    let snapshot = await uploadBytes(storage_ref, file);
    let url = await getDownloadURL(snapshot.ref);
  
    return [file_name, url];
  }
  
  export default { FirebaseApp, Storage };