import { FETCH_PRODUCTS } from './types';
import { getProducts } from '../../data';
import Firebase from '../../FirebaseConfig';
const db = Firebase.database();





export const fetchProducts = () => dispatch => {
    const items = []
    Firebase.firestore().collection("Items").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
           // console.log(doc.id, " => ", doc.data());
            items.push(doc.data());
            console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')

            console.log(items)
            console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            dispatch({
                type: FETCH_PRODUCTS,
                payload: items
            })
        });
    });
  
   
}






