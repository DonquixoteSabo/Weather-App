import Title from 'components/atoms/Title';
import dateFormat from 'dateformat';
import getIcon from 'helpers/getIcon';
import React from 'react';
import { Card, CardImage, CardContent } from './styles';

function Cart({ stateName, date, abbr, minTemp, maxTemp, isTomorrow = false }) {
  const formattedDate = dateFormat(date, 'ddd, d mmm');
  const icon = getIcon(abbr);
  return (
    <Card>
      <Title>{isTomorrow ? 'Tomorrow' : formattedDate}</Title>
      <CardImage src={icon} alt={stateName} />
      <CardContent>
        <li>{maxTemp}</li>
        <li>{minTemp}</li>
      </CardContent>
    </Card>
  );
}

export default Cart;
