import InputText from "../InputText";
import "./Form.css";
import Dropdown from "../Dropdown";
const Form = () => {
  const times = [
    'Adovocacia',
    'Design',
    'Programador'
  ]
  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <InputText label="Nome" placeholder="Selton batista" />
        <InputText label="cargo" placeholder="Dev front-end" />
        <InputText label="imagem" placeholder="imagen>selton>fotos-incirveis" />
        <Dropdown label="time" itens={times} />
        
      </form>
    </section>
  );
};
export default Form;
