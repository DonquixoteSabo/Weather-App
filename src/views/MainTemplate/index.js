import { useState } from 'react';

import BigCart from 'components/organism/BigCart';
import Search from 'components/organism/Search';
import { Wrapper, BigContainer } from './styles';
import Carts from 'components/organism/Carts';
import Hightlight from 'components/organism/Hightlights';
function MainTemplate() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleActiveChange = () => setIsSearchActive(prevState => !prevState);

  return (
    <Wrapper>
      {isSearchActive ? (
        <Search handleActiveChange={handleActiveChange} />
      ) : (
        <BigCart handleActiveChange={handleActiveChange} />
      )}
      <BigContainer>
        <div className='container'>
          <Carts />
          <Hightlight />
        </div>
      </BigContainer>
    </Wrapper>
  );
}

export default MainTemplate;
