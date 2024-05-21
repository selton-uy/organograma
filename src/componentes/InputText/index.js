import { useState } from "react";
import "./InputText.css";
const InputText = (props) => {
  const placeholderMod = `${props.placeholder}`;

  const [valor, setValor] = useState("Selton Batitsa");

  const aoDigitar = (evento) => {
    props.aoAlterado(evento.target.value);
  };
  return (
    <div className="input-text">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitar}
        required={props.required}
        type="text"
        placeholder={placeholderMod}
      />
    </div>
  );
};

export default InputText;
