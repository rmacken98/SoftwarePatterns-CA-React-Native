import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    
    Animated
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from './Button';
export class Cart extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        opacity: new Animated.Value(1)
      };
    }
    componentDidUpdate(nextProps) {
        if (nextProps.cartItems !== this.props.cartItems) {
            this.startAnimation();
        }
    }
    startAnimation(){
        Animated.timing(this.state.opacity,
        {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start(()=> {
            setTimeout(()=> {
                this.endAnimation()
            }, 100);
        })
    }
    endAnimation(){
        Animated.timing(this.state.opacity,
        {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start()
    }
    onPress = () => {
        this.props.navigation.navigate('Checkout');
    }
    render() {
        const { cartItems } = this.props;
        let animatedStyle = {opacity: this.state.opacity}
        return (
            <Animated.View style={[styles.container, animatedStyle]}>
                <Button onPress={this.onPress}>
                    <Text style={styles.cart}>Your cart: {(cartItems).length} items</Text>
                </Button>
            </Animated.View>
        );
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.cart.cart
});
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cart:{
        color: 'white',
        fontSize: 14
    }
})
export default connect(
    mapStateToProps
)(Cart);