import Firebase from './FirebaseConfig';
export function addToFirestore (object){

    Firebase.firestore()
    .collection("Users")
    .add( 
     { uuid: object.uuid,
       name: object.name,
        email: object.email, 
        shippingAddress: object.shippingAddress,
        paymentMethod:object.paymentMethod}
  ).then((data) => addComplete(data))
  }


deleteFireStore= (type,key)=>{
    Firebase.firestore().collection(type).doc(key).delete()
}



export async function getFromFirestore(collection,Retrieved){
    var listType=[];
    var snapshot = await Firebase.firestore()
    .collection(collection)
    .get()
    snapshot.forEach((doc) => {
    const item = doc.data();
    item.id = doc.id;
    listType.push(item);
    })
    // console.log(Firebase.auth().currentUser.email);
    Retrieved(listType);
    } 