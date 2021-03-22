import React from 'react';
import { Card, CardTitle, CardImage, CardContent } from './styles';

function Cart() {
  return (
    <Card>
      <CardTitle>Tomorrow</CardTitle>
      <CardImage src='https://i.imgur.com/EMIwgdn.png' alt='weather icon' />
      <CardContent>
        <p>16°C</p>
        <p>13°C</p>
      </CardContent>
    </Card>
  );
}

export default Cart;
