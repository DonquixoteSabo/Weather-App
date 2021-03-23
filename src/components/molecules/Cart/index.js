import dateFormat from 'dateformat';
import getIcon from 'helpers/getIcon';
import React from 'react';
import { Card, CardTitle, CardImage, CardContent } from './styles';

function Cart({ stateName, date, abbr, minTemp, maxTemp, isTomorrow = false }) {
  const formattedDate = dateFormat(date, 'ddd, d mmm');
  const icon = getIcon(abbr);
  return (
    <Card>
      <CardTitle>{isTomorrow ? 'Tomorrow' : formattedDate}</CardTitle>
      <CardImage src={icon} alt={stateName} />
      <CardContent>
        <p>{maxTemp}</p>
        <p>{minTemp}</p>
      </CardContent>
    </Card>
  );
}

export default Cart;
