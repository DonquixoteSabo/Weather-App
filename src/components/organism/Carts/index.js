import Cart from 'components/molecules/Cart';
import React from 'react';
import { Wrapper } from './styles';
function Carts() {
  return (
    <Wrapper>
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
    </Wrapper>
  );
}

export default Carts;
