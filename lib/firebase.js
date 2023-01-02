//---------- firebase admin config -----------
import admin from "firebase-admin"
import {getApps} from "firebase-admin/app"
import  { getFirestore } from "firebase-admin/firestore"
import serviceAccountKey from "./private-key.json"

//------------- initialaze firebase admin api ---------------
// console.log(getApps());

//check if app already exits
if(!getApps().length){
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
    databaseURL:process.env.DATABSE_URL
  });
}

//--- firebase admin database-------------
const db= getFirestore()
//if u want to allow to insert undefined properties in firebase
// db.settings({
//     ignoreUndefinedProperties:true
// })
export {db,admin}
