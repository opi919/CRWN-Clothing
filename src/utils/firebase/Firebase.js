import {initializeApp} from 'firebase/app'
import {getAuth,GoogleAuthProvider,signInWithPopup,signInWithRedirect,createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAqbIekilOs9-SthZGlgXeW4CkGjHcM12w",
  authDomain: "crwn-clothing-db-154e3.firebaseapp.com",
  projectId: "crwn-clothing-db-154e3",
  storageBucket: "crwn-clothing-db-154e3.appspot.com",
  messagingSenderId: "397863047190",
  appId: "1:397863047190:web:1bebf699606d1bc9e62537"
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = ()=> signInWithPopup(auth,googleProvider)

export const db = getFirestore()
export const createUserDocFromAuth = async (userAuth,aditionalInfo={}) => {
  const userDocRef = doc(db,'users',userAuth.uid)
  
  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()){
    const {displayName,email} = userAuth
    const createdAt = new Date()

    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...aditionalInfo
      })
    }catch(err){
      console.log("error while creating user: ",err.message)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPass = async (email,password) =>{
  if(!email || !password) return

  return await createUserWithEmailAndPassword(auth,email,password)
}