import React from 'react';

import { MdGroup, MdWork, MdLocationCity, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/53627696?v=4" />
      <Login>Jorgera</Login>
      <Name>Jorge Neto</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20} />
        30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
      </Data>
      <Data>
        <MdWork size={20} />
        Grupo Mirum
      </Data>
      <Data>
        <MdLocationCity size={20} />
        Curitiba - PR
      </Data>
      <Data>
        <MdLink size={20} />
        <a href="linkedin.com/in/jorge-neto-a8557b190">
          linkedin.com/in/jorge-neto
        </a>
      </Data>
    </Inner>
  </Container>
);

export default Profile;
