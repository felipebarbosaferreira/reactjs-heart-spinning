import React from 'react';
import logo from '../../assets/logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import * as S from './styles';

function App() {
  return (
    <S.Container>
        <S.Content>
            <S.Header>
                Simples React JS
                <img src={logo} className="App-logo" alt="logo" />
                com CSS
            </S.Header>

            <S.HeartSpinning>
                <FontAwesomeIcon icon={ faHeart } />
            </S.HeartSpinning>

            <S.Footer>
                Felipe Barbosa Ferreira
            </S.Footer>
        </S.Content>
      </S.Container>
  );
}

export default App;
