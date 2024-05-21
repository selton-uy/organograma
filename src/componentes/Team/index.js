import "./Team.css";

const Team = (props) => {
  return (
    <section className="team" style={{ backgroundColor: props.corDeFundo }}>
      <h3 style={{ borderColor: props.corDeDestaque }}>{props.nome}</h3>
    </section>
  );
};

export default Team;
