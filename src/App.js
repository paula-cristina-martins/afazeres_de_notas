import React from 'react';
import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor() {
    super();
    this.notas = [];
    this.state = {
      notas: []
    };
  }

  criarNota(titulo, texto) {
    console.log(`uma nova nota foi criada ${titulo} e ${texto}`);
    const novaNota = { titulo, texto };

    const novoArrayNotas = [...this.state.notas, novaNota];

    const novoEstado = {
      notas: novoArrayNotas,
    }
    this.setState(novoEstado);
  }


  apagarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({notas:arrayNotas});
    console.log('del');
  }

  render() {
    console.log('renderização')
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas
          notas={this.state.notas}
          apagarNota={this.apagarNota.bind(this)}
        />
      </section>
    );
  }
}

export default App;
