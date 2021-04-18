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
  export function addToFirestore2 (collection, object) {
    Firebase.firestore()
    .collection(collection)
    .add({object}) 
    .then((snapshot)=>{
        object.id = snapshot.id;
        snapshot.set(object);
      })
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


    export  async function getItemByType(type,ItemRetrieved){
    
      var Items = [];
    
    var snapshot = await Firebase.firestore()
      .collection('Items')
      .where('Category', '==',type)
      .get()
    
    snapshot.forEach((doc) => {
      const spot = doc.data();
      item.id = doc.id;
      Items.push(spot);
     
    })
    // console.log(Firebase.auth().currentUser.email);
    ItemRetrieved(Items);
    }
    export  async function getItemByType2(type){
    
      var Items = [];
    
    var snapshot = await Firebase.firestore()
      .collection('Items')
      .where('Category', '==',type)
      .get()
    
    snapshot.forEach((doc) => {
      const spot = doc.data();
      item.id = doc.id;
      Items.push(spot);
     
    })
    // console.log(Firebase.auth().currentUser.email);
    return Items;
    }