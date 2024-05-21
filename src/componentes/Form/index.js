import InputText from "../InputText";
import Dropdown from "../Dropdown";
import ClickButton from "../ClickButton";
import "./Form.css";
import { useState } from "react";


const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const AoSalvar = (evento) => {
    evento.preventDefault();
    props.colaboradorAdd({
      nome,
      cargo,
      imagem,
      time,
    });
  };
  return (
    <section className="form">
      <form onSubmit={AoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>

        <InputText
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          required={true}
          label="Nome"
          placeholder="Selton batista"
        />

        <InputText
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
          required={true}
          label="Cargo"
          placeholder="Dev front-end"
        />

        <InputText
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          label="Imagem"
          placeholder="imagen>selton>fotos-incirveis"
        />

        <Dropdown
          required={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <ClickButton>Criar card</ClickButton>
      </form>
    </section>
  );
};
export default Form;
