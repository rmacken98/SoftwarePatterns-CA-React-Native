import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
import { connect } from 'react-redux';

import { addOrder } from '../redux/actions/orderActions';
import { emptyCart } from '../redux/actions/cartActions';
import { Button } from './Button';
import { Input } from './Input';

class CustomerForm extends Component {
 state = {
    name:'',
    phone: '',
    email: '',
    street: '',
  }

  renderTextfield(options) {
    return (
        <Input  onChangeText={(value) => this.setState({[options.name]: value})} 
                placeholder= {options.label} value={this.state[options.name]} keyboardType= {options.keyboard || 'default'}/>
      );
  }

  onPressButton = () => {
        const {name, phone, email, street} = this.state;
        const { cartItems, navigation, addOrder, emptyCart } = this.props;
        let customer = { name: name, phone: phone, email: email, street: street}
        addOrder({cartItems: cartItems, customer: customer});
        emptyCart();
  
        this.props.navigation.navigate('Receipt')
    }

  renderButton() {
        return (
            <Button onPress={this.onPressButton}>
                <Text>proceed to checkout</Text>
            </Button>
        );
    }

  render() {
    return (
            <View style={styles.panel}>
             
             <View style={styles.panel}>
                {this.renderTextfield({name: 'Confirm name', label: 'Your name'})}
                {this.renderTextfield({name: 'Confirm phone', label: 'Your phone number', keyboard: 'phone-pad'})}
                {this.renderTextfield({name: 'Confirm email', label: 'Your email address', keyboard: 'email-address'})}
                {this.renderTextfield({name: 'Confirm street', label: 'Your street'})}
                {this.renderButton()}
            </View>
            </View>
    );
  }
}

const styles = StyleSheet.create({
	    panel: {
        backgroundColor: '#fff',
        borderRadius: 3,
        padding: 10,
        margin: 10
    },
  
});

const mapStateToProps = (state) => ({
	cartItems: state.cart.cart
})
export default connect(mapStateToProps, {addOrder, emptyCart})(CustomerForm);