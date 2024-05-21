import { useState } from "react";
import Banner from "./componentes/Banner";
import Form from "./componentes/Form";
import Team from "./componentes/Team";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Adovocacia",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Design",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Vendas",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
  ];

  const [colaboradores, setColaboradores] = useState([])

  const colaboradorAdd = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        times={times.map(time=>time.nome)}
        colaboradorAdd={(colaborador) => colaboradorAdd(colaborador)} 
      />
      {times.map((time) => (
        <Team
          key={time.nome}
          nome={time.nome}
          corDeFundo={time.corSecundaria}
          corDeDestaque={time.corPrimaria}
        />
      ))}
    </div>
  );
}

export default App;
