import React from 'react';
import './App.css';
import Container from './Componentes/Container.js';
import Formulario from './Componentes/Menu/Formulario.js';
import UiButton from './Componentes/Botao/UiButton.js';
import CardsUteis from './Componentes/Filtros/CardsUteis.js';
import FiltroPeriodo from './Componentes/Filtros/FiltroPeriodo.js';
import Cards from './Componentes/Main/Cards.js';
import Content from './Componentes/Main/Content.js';
import UiLabel from './Componentes/Main/UiLabel.js';
import Dados from './Componentes/Main/Dados.js';
import Botoes from './Componentes/Main/Botoes.js';

class App extends React.Component {
 
  render(){
    return (
      <div>
        <Container>
          <Formulario />    { /*\ 3 Eventos - CARDS, PROJETOS E ATIVIDADES\*/ }
        </Container>
  
        <Container>
          <UiButton  id="cardsuteis">
            <CardsUteis />
          </UiButton>
          <UiButton className="labeled icon top center pointing dropdown" id="filtro">
            <FiltroPeriodo />
          </UiButton>
        </Container>
  
        <Container className="ui container">
          <main className="ui one cards">
            <Cards>
              <Content className="center aligned">
                <UiLabel conteudo="Sexta, 13 de Março"/>
              </Content>
              <Content>
                <Dados/>
                <Botoes /> {/*\ 3 Eventos - Atividades \*/}
              </Content>
              <Content className="center aligned">
                <UiLabel conteudo="Total de horas: 1:47:00"/>
              </Content>
            </Cards>
          </main>
        </Container>

        <Container className="ui center aligned basic segment">
          <UiButton className="blue basic" conteudo="Carregar Mais"/>
        </Container>
      </div>
    );
  }
  
}

export default App;
