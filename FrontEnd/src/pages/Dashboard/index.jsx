import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:3001/pagamentos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDados(response.data);
      })
      .catch((error) => {
        alert("Erro ao buscar dados: " + error.response.data.message);
      });
  }, []);

  return (
    <div>
      <h2>Tabela de Pagamentos</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor Pago</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>R$ {item.valor.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
