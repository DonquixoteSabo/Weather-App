import { useState } from 'react';

import BigCart from 'components/organism/BigCart';
import Search from 'components/organism/Search';
import Carts from 'components/organism/Carts';
import Hightlight from 'components/organism/Hightlights';
import Footer from 'components/organism/Footer';

import { Wrapper, BigContainer } from './styles';

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
          <Footer />
        </div>
      </BigContainer>
    </Wrapper>
  );
}

export default MainTemplate;
