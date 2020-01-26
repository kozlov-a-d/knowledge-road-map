import firebase from 'firebase/app';
import 'firebase/firestore';

export const db = firebase.initializeApp({ projectId: 'knowledge-road-map', }).firestore();

export const Timestamp = firebase.firestore.Timestamp;

const API = (() => {

    const NOTES = db.collection("notes");

    const getNodes = () => new Promise((resolve, reject) => {
        NOTES.get().then((querySnapshot) => {
            const arrNodes = []
            querySnapshot.forEach((doc) => {
                arrNodes.push(doc.data())
            });
            resolve(arrNodes);
        }).catch(function(error) {
            reject(error)
        });
    });

    const getNodeById = (id) => new Promise((resolve, reject) => {
        NOTES.doc(id).get().then(function(doc) {
            if (doc.exists) {
                resolve(doc.data());
            } else {
                reject(new Error(`No such document with id ${id} in collection "notes"!`));
            }
        }).catch(function(error) {
            reject(new Error(`Error getting document: ${error}`));
        });
    });

    const createNode = (node) => new Promise((resolve, reject) => {
        NOTES.doc(node.id).set(node).then(function() {
            resolve(true);
        }).catch(function(error) {
            reject(new Error(`Error writing document: ${error}`));
        });
    });

    const updateNode = (node) => new Promise((resolve, reject) => {
        NOTES.doc(node.id).set(node).then(function() {
            resolve(true);
        }).catch(function(error) {
            reject(new Error(`Error writing document: ${error}`));
        });
    });

    const removeNode = (node) => new Promise((resolve, reject) => {
        NOTES.doc(node.id).delete().then(function() {
            resolve(true);
        }).catch(function(error) {
            reject(new Error(`Error removing document: ${error}`));
        });
    });

    return Object.freeze({
        getNodes,
        getNodeById,
        createNode,
        updateNode,
        removeNode
    });
})();

export default API;