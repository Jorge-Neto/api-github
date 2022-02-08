import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MdSearch } from 'react-icons/md';

import { Container, Logo, Title, Form, Input, Button } from './styles';
import githubLogo from '../../assests/images/github-logo.svg';

function MainPage() {
  return (
    <Container>
      <Logo src={githubLogo} alt="Logo API Github" />
      <Title>API GitHub</Title>
      <Form>
        <Input placeholder="User" />
        <Button>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}

export default MainPage;
