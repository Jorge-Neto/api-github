import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';
import { getLangsFrom } from '../../services/api';

import { Container, Sidebar, Main } from './styles';

const RepositoriesPage = () => {
  const user = {
    login: 'Jorge-Neto',
    name: 'Jorge Neto',
    avatar_url: 'https://avatars.githubusercontent.com/u/53627696?v=4',
    followers: 0,
    following: 0,
    company: 'Grupo Mirum',
    blog: 'linkedin.com/in/jorge-neto-a8557b190',
    location: 'Curitiba - PR',
  };

  const repositories = [
    {
      name: 'alurakut',
      description:
        'Repositório criado durante as aulas de imersão react da Alura.',
      html_url: 'https://github.com/Jorge-Neto/alurakut',
      language: 'JavaScript',
    },
    {
      name: 'api-github',
      description: 'React app that queries Github API and returns data',
      html_url: 'https://github.com/Jorge-Neto/api-github',
      language: 'Java',
    },
    {
      name: 'Calculadora-Basica',
      description:
        'Projeto criado para desenvolver meus conhecimentos em Javascript, Html e CSS',
      html_url: 'https://github.com/Jorge-Neto/Calculadora-Basica',
      language: 'HTML',
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
