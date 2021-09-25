import React from 'react';
import { Component } from 'react';
import CardNota from '../CardNota';
import "../../style/estiloListaDeNotas.css";

class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, cont) => {
          return (
            <li className="lista-notas_item" key={cont}>
              <CardNota
                indice={cont}
                titulo={nota.titulo}
                texto={nota.texto}
                apagarNota={this.props.apagarNota}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;