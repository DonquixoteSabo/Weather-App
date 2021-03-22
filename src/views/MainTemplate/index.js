import { useState } from 'react';

import BigContainer from 'components/atoms/BigContainer';
import BigCart from 'components/organism/BigCart';
import Search from 'components/organism/Search';
import { Wrapper } from './styles';
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
      <BigContainer>siema</BigContainer>
    </Wrapper>
  );
}

export default MainTemplate;
