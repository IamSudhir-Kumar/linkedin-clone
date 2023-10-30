import { toast } from 'react-toastify';
import { firestore } from '../FireBaseConfig';
import { addDoc, collection, doc, onSnapshot } from 'firebase/firestore';

let dbRef = collection(firestore, 'status');
let usersName = collection(firestore, 'users');
export const postStatus = (object) => {
    addDoc(dbRef, object)
        .then((docRef) => {
            toast.success('Status Posted Successfully');
        })
        .catch((error) => {
            console.error('Error adding document: ', error);
        });
};

export const getStatus = (setAllStatus) => {
    onSnapshot(dbRef, (response) => {
        setAllStatus(
            response.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            })
        );
    });
};

export const getUserName = (userObject) => {
    addDoc(usersName, userObject)
        .then((docRef) => {
            console.log('User name added successfully.');
        })
        .catch((error) => {
            console.error('Error adding user name: ', error);
        });
};
