import { signInWithEmailAndPassword , createUserWithEmailAndPassword ,
GoogleAuthProvider , signInWithPopup} from 'firebase/auth'
import { auth } from "../FireBaseConfig";

export const LogInAPI = (email , password) => {
    try{
   let response = signInWithEmailAndPassword(auth, email, password)
   return response;
    } catch (err) {
        return err;
    }
};
export const RegisterAPI = (email , password) => {
    try{
   let response = createUserWithEmailAndPassword(auth, email, password)
   return response;
    } catch (err) {
        return err;
    }
};
export const GoogleSignInAPI = () => {
    try{
   let googleProvider = new GoogleAuthProvider()
   let response = signInWithPopup(auth, googleProvider)
    return response;
    } catch (err) {
        return err;
    }
};

