import {
    collection,
    doc,
    getDocs,
    getDoc,
    setDoc,
    updateDoc,
    deleteDoc,
    serverTimestamp,
    addDoc,
    query,
    orderBy,
} from 'firebase/firestore';
import { db } from './firebase'; // assuming you already have this setup
import { getAuth } from 'firebase/auth';

const productsRef = collection(db, 'products');

export const getProducts = async () => {
    const q = query(productsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id: string) => {
    const docSnap = await getDoc(doc(db, 'products', id));
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

export const addProduct = async (productData: any) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const newDoc = await addDoc(productsRef, {
        ...productData,
        createdBy: user?.uid || 'system',
        updatedBy: user?.uid || 'system',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        stockBatches: [],
    });
    return newDoc.id;
};

export const updateProduct = async (id: string, updates: any) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const docRef = doc(db, 'products', id);
    await updateDoc(docRef, {
        ...updates,
        updatedBy: user?.uid || 'system',
        updatedAt: serverTimestamp(),
    });
};

export const deleteProduct = async (id: string) => {
    await deleteDoc(doc(db, 'products', id));
};

export const addStockBatch = async (id: string, batch: any) => {
    const docRef = doc(db, 'products', id);
    const productSnap = await getDoc(docRef);
    if (productSnap.exists()) {
        const product = productSnap.data();
        const updatedBatches = [...(product.stockBatches || []), batch];
        await updateDoc(docRef, {
            stockBatches: updatedBatches,
            updatedAt: serverTimestamp(),
        });
    }
};
