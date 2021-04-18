import React, { Component } from 'react';
import {  
    View, 
    StyleSheet, 
    FlatList,
    Text,
    Button
} from 'react-native';
import { connect } from 'react-redux';
import  Product  from '../Components/ProductComponent';
import { addToCart } from '../redux/actions/cartActions';
import { fetchProducts } from '../redux/actions/productAction';

class Products extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Products'
    }
  }
  constructor(props) {
      super(props);
  }
  componentWillMount = () => {
    this.props.fetchProducts();
  }
  addItemsToCart = (product) => {
      this.props.addToCart(product);
  }
  render() {
    const { products, navigation } = this.props
    return (
        <View style={styles.container}>
         
        <View style={styles.body}>
        <Button title="Search" onPress={()=> this.props.navigation.navigate('Search')}></Button>
        <Button title="Checkout" onPress={()=> this.props.navigation.navigate('Checkout')}></Button>
          <FlatList 
          data={products} 
          renderItem={({item}) => <Product item={item} addItemsToCart={this.addItemsToCart} product={item}/>}
          keyExtractor ={(item) => item.id}
          ItemSeparatorComponent= {()=> <View style={{height:0.5, backgroundColor:'#34495e90'}}/> }/>
        </View>
      </View>
 
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
      flex: 1,
      justifyContent: 'center'
    }
});
const mapStateToProps = (state) => ({
    products: state.products.items
})
export default connect(mapStateToProps, {addToCart,fetchProducts})(Products);