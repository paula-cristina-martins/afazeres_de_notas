import React from 'react';
import { Component } from 'react';
import "../../style/estiloCardNota.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";

class CardNota extends Component {
  apagar_nota() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar_nota.bind(this)} />
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;