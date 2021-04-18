import { FETCH_PRODUCTS } from './types';
import { getProducts } from '../../data';
import Firebase from '../../FirebaseConfig';
const db = Firebase.database();





export const fetchProducts = () => dispatch => {
    const items = []
    Firebase.firestore().collection("Items").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            items.push(doc.data());
          

            console.log(items)
           
            dispatch({
                type: FETCH_PRODUCTS,
                payload: items
            })
        });
    });
}


export const addProduct= (product, collection) => dispatch => {
    const items=[];

    Firebase.firestore()
    .collection(collection)
    .add({product}) 
    .then((snapshot)=>{
        object.id = snapshot.id;
        snapshot.set(product);
      })
}
   
}






