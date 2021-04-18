import React from "react";
import {
  View,
  StyleSheet,
  Text
} from "react-native";
import Firebase from "./FirebaseConfig";
import {addToFirestore2} from "./Firebase"
import { Input } from "./Components/Input";
import { Button } from "./Components/Button";
  
  class AddProucts extends React.Component{
  
    state = {
        name: "",
        manufacturer: "",
        Price: 0,
        Quantity:0,
        image:"",
        category:"",
      };
    
  
      setImage = (image) => {
          props.setFieldValue('imageUri', image.uri);
        }
    
        UploadtoFireBase = () =>{

            let item = new ItemBuilder().setName(this.state.name).setManufacturer(this.state.manufacturer).setPrice(this.state.Price)
    .setQuantity(this.state.Quantity).setImage(this.state.image).setCategory(this.state.category);
console.log(item);
            addToFirestore2('Items',item);
        }
  
    render() {
        return (
 
        <View>
            <MyImagePicker image={props.spot.image} onImagePicked={setImage}  />
        <Input
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
          placeholder="Product Name"
        />
        <Input
          style={styles.inputBox}
          value={this.state.category}
          onChangeText={category => this.setState({ category })}
          placeholder="Product Category"
          autoCapitalize="none"
        />
        <Input
          style={styles.inputBox}
          value={this.state.Price}
          onChangeText={price => this.setState({ price })}
          placeholder="Price"
          secureTextEntry={true}
        />
         <Input
          style={styles.inputBox}
          value={this.state.Quantity}
          onChangeText={Quantity => this.setState({ Quantity })}
          placeholder="Quantity"
        
        />
         <Input
          style={styles.inputBox}
          value={this.state.manufacturer}
          onChangeText={manufacturer => this.setState({ manufacturer })}
          placeholder="Manufacturer"
          
        />
        <Button onPress={this.UploadtoFireBase}>
          <Text>Add Product</Text>
        </Button>
      </View>
  
  
  
            
  
  )
  }
}
  
  const styles = StyleSheet.create({
    container: {
        marginTop:10,
        width: '100%',
        borderColor: '#eee',
        borderBottomWidth: 2,
        alignItems: 'center'
    },
    label: {
    padding:5,
    paddingBottom:0, 
    color:'#333',
    fontSize: 17,
    fontWeight : '700',
    width: '100%'
  },
    input: {
        paddingRight: 5,
        paddingLeft : 5,
        paddingBottom :2,
        color: '#333',
        fontSize:18
    ,
    fontWeight: '700',
    width: '100%'
    },
    formInput: {
        width: 300,
        height: 50,
        borderColor: '#B5B4BC',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8
      },
  });
  
 
export default AddProucts;
  
  
  