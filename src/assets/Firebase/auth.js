import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const createUserInDb = (uid, fullName, email) => {
    return firestore().collection('users').doc(uid).set(
        {
            uid,
            fullName,
            email
        }
    )
}
// signup handling
const signUp = (username, email, password) => {
    if(!username || !email || !password){
        Alert.alert('Error', 'Please enter all fields')
    }

    return auth().createUserWithEmailAndPassword(email, password)
    .then( cred => {
        const {uid} = cred.user;

        auth().currentUser.updateProfile({
            displayName: username
        })

        return uid
    })
    .then( uid => {createUserInDb(uid, username, email)})
    .catch(
        err => Alert.alert(err.code, err.message)
    )
}

const signIn = (email, password,) => {
    if(!email || !password){
        Alert.alert('Error', 'Please enter all fields')
    }

    return auth().signInWithEmailAndPassword(email, password)
    .then(() => {})
    .catch(
        err => Alert.alert(err.code, err.message)
    )
}

const forgetPassword = (email) => {
    if(!email){
        Alert.alert('Error', 'Please enter email')
    }

    return auth().sendPasswordResetEmail(email)
}

const signOut = () => {
    return auth().signOut()
}

const inviteUser = (email) => {
    if(!email){
        Alert.alert('Error', 'Please enter email')
    }

    var actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'https://rnfirebaseexp.page.link/eNh4',
        // This must be true.s
        handleCodeInApp: true,
        // iOS: {
        //   bundleId: 'com.example.ios'
        // },
        android: {
          packageName: 'com.example.android',
          installApp: true,
        },
      };

    return auth().sendSignInLinkToEmail(email, actionCodeSettings)
    .then(
        Alert.alert('Email sent', 'Inform the user')
    )
    .catch(
        err => Alert.alert(err.code, err.message)
    )
}

const sendOtp = (number) => {
    if(!number){
        Alert.alert('Error', 'Please Enter number')
    }

    return auth().signInWithPhoneNumber(number)
}

const confirmCode = (state, code) => {
    return state.confirm(code)
    .then(() => {})
    .catch(err => Alert.alert(err.code, err.message))
}

const Auth = {
    signUp,
    signIn,
    forgetPassword,
    signOut,
    inviteUser,
    sendOtp,
    confirmCode
}

export default Auth