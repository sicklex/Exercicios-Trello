function InfoBoard({ info, quantity, icon, InfoBoardColor }) {
  return (
    <div className="infoBoard" style={{ backgroundColor: InfoBoardColor }}>
      <div className="infoBoard__icon">{icon}</div>
      <p>{info}</p>
      <p> {quantity > 100 ? info + " its full" : quantity}</p>
    </div>
  );
}

export default InfoBoard;
