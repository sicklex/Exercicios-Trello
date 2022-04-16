function Pokedex({ name, id, image, types }) {
  return (
    <div className="card">
      <div className="pokedex-image">
        <img src={image} alt={name} />
      </div>
      <div className="pokedex-info">
        <h2>{name}</h2>
        <p>{id}</p>
        <p>
          {types.map(type => (
            <span key={type}>{type}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Pokedex;
