import React from 'react';
import NearMeIcon from '@material-ui/icons/NearMe';
import { Wrapper } from './styles';

function Compass({ windDirection }) {
  return (
    <Wrapper degree={windDirection}>
      <div>
        <NearMeIcon className='icon' />
      </div>
      <span>WSW</span>
    </Wrapper>
  );
}

export default Compass;
