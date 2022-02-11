import React from 'react';

import { Container, Name, Description, Footer, Lang, Link } from './styles';

const Repository = () => (
  <Container color="#d35400">
    <Name>Teste</Name>
    <Description>Repo de teste</Description>
    <Footer color="#d35400">
      <Lang>Java</Lang>
      <Link href="https://github.com/Jorge-Neto/api-github" target="_blank">
        Ver
      </Link>
    </Footer>
  </Container>
);

export default Repository;
