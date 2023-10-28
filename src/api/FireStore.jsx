import { firestore } from '../FireBaseConfig';
import { addDoc, collection } from 'firebase/firestore';

let dbRef = collection(firestore, 'status');

export const postStatus = (status) => {
    let object = {
        status: status,
        };
    addDoc(dbRef, object)
    .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
        console.error('Error adding document: ', error);
    });
};