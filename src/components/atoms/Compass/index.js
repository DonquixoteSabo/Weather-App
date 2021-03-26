import React from 'react';
import NearMeIcon from '@material-ui/icons/NearMe';
import { Wrapper } from './styles';

function Compass({ windDirection, windDirectionCompass }) {
  return (
    <Wrapper degree={windDirection}>
      <div>
        <NearMeIcon className='icon' />
      </div>
      <span>{windDirectionCompass}</span>
    </Wrapper>
  );
}

export default Compass;
