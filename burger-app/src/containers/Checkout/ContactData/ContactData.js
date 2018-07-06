import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price, // in a real app, always calculate this on the server
      customer: {
        name: 'Marty Mammel',
        address: {
          street: '123 Test Street',
          zip: '12345',
          city: 'Test',
          state: 'TestState'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }

    axios.post('/orders.json', order) // for firebase --> /nodeName.json
    .then(response => {
      this.setState({loading: false});
      this.props.history.push('/');
    })
    .catch(err => {
      console.error(err);
      this.setState({loading: false});
    });
  }

  render() {
    let form = (
      <form>
        <input className={classes.Input} type='text' name='name' placeholder='Your Name' />
        <input className={classes.Input} type='email' name='email' placeholder='Your Email' />
        <input className={classes.Input} type='text' name='street' placeholder='Street' />
        <input className={classes.Input} type='text' name='zipCode' placeholder='Zip Code' />
        <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
      </form>);
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact information</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;