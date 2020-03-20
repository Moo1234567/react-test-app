import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const onToken = token => {
    console.log(token);
    alert('Payment ok');
}

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_z0exlkmSiO0J02zDWbt1til7';
    return (
        <StripeCheckout 
        label='Pay Now' 
        name='Any name'
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;