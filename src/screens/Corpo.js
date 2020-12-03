import React, { useState } from "react";
import "./css/Styles.css";
export default function Corpo() {
  // vamos carregar os dados e aplicar no estado inicial do react.
  // quando for necessario mudar os dados iremos alterar o estado do react
  // para inicar o estado dos dados iremos criar uma constadnte com o estado inicial e uma entrada para mudar o estado;
  // Depous iremos fazer o carregamento dos dados da API para inserir no novo estado
  const [dados, setDados] = useState([]);
  // para fazer a chamada da nossa API iremos usar o comando useEffect
  React.useEffect(() => {
    fetch("http://localhost:5050")
      .then((response) => response.json())
      .then((resultado) => {
        setDados(resultado.saida);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="subtitulo">Dados dos Clientese</h2>
      <table className="tabela">
        <thead className="cabecalho">
          <tr>
            <th>ID</th>
            <th>Nome Cliente</th>
            <th>E-Mail</th>
            <th>Telefone</th>
            <th>CPF</th>
            <th>Idade</th>
            <th>Data Cadastro</th>
          </tr>
        </thead>
        <tbody className="corpo">
          {dados.map((rs) => (
            <tr key={rs._id}>
              <td>{rs._id}</td>
              <td>{rs.nomecliente}</td>
              <td>{rs.email}</td>
              <td>{rs.telefone}</td>
              <td>{rs.cpf}</td>
              <td>{rs.idade}</td>
              <td>{rs.datacadastro}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
