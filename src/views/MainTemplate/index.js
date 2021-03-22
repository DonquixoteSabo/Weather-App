import { useState } from 'react';

import BigCart from 'components/organism/BigCart';
import Search from 'components/organism/Search';

function MainTemplate() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleActiveChange = () => setIsSearchActive(prevState => !prevState);

  return (
    <div>
      {isSearchActive ? (
        <Search handleActiveChange={handleActiveChange} />
      ) : (
        <BigCart handleActiveChange={handleActiveChange} />
      )}
    </div>
  );
}

export default MainTemplate;
