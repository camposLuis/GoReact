import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars3.githubusercontent.com/u/5728954?v=4" alt="Avatar" />
      Luís Campos
    </User>
  </Container>
);

export default Header;
