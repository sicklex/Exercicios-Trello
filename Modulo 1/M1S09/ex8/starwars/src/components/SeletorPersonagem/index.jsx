import PropType from "prop-types";
import "./styles.css";

function SeletorPersonagem({ onChange }) {
  return (
    <div className="person-selector">
      Digite um número, de 1 a 82, para buscar os dados de um personagem:
      <div className="input-group">
        <input
          name="id-personagem"
          id="id-personagem"
          type="number"
          max="82"
          min="1"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

SeletorPersonagem.propTypes = {
  valor: PropType.number.isRequired,
  onChange: PropType.func.isRequired,
};

export default SeletorPersonagem;
