import { useEffect, useState } from 'react';
import initialization from './../firebase/firebaseInitialize';
import {
    getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile,
    signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendEmailVerification
} from "firebase/auth";

initialization();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            // .then(response => {
            //     setUser(response.user);
            //     setError('');
            // })
            // .catch(error => setError(error.message))
            .finally(() => { setLoading(false) });
    }
    const createUser = (email, pass, uname) => {
        return createUserWithEmailAndPassword(auth, email, pass)
            .finally(() => {
                setLoading(false);
                sendVerification();
            });
    }
    const setUserFullName = (username) => {
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: username
        }).then(() => {
            setLoading(false);
        }).catch((error) => {
        });
    }
    const signInEmailPass = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
            .finally(() => {
                setLoading(false);
            });
    }
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => setUser({}))
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }
    const sendVerification = () => sendEmailVerification(auth.currentUser);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);

    return {
        user,
        loading,
        setUser,
        setError,
        error,
        signInGoogle,
        signInEmailPass,
        logOut,
        createUser,
        setUserFullName
    };
};

export default useFirebase;