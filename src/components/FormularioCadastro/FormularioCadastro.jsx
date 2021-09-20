import React from 'react';
import { Component } from 'react';
import "../../style/estiloFormularioCadastro.css";

class FormularioCadastro extends Component {

  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(event) {
    // console.log(event.target.value);
    this.titulo = event.target.value;
  }

  _handleMudancaTexto(event) {
    // console.log(event.target.value);
    this.texto = event.target.value;
  }

  _criarNota(event) {
    // previnir a ação a ser realizada.
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
    // console.log(`uma nova nota foi criada ${this.titulo} e ${this.texto}`);
  }

  render() {
    return (
      <form 
        className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        {/* <select className="form-cadastro_input"> */}
        {/* </select> */}
        <input
          className="form-cadastro_input"
          type="text"
          placeholder="Título"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          className="form-cadastro_input"
          placeholder="Escreva sua nota..."
          rows={15}
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro; 