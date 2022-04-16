import "./App.css";
import InfoBoard from "./components/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faAddressBook } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <InfoBoard
        className="infoBoard"
        info="Mensagens"
        quantity={152}
        InfoBoardColor="black"
        icon={
          <FontAwesomeIcon
            icon={faEnvelope}
            className="icon"
            style={{ color: "white" }}
          />
        }
      />
      <InfoBoard
        className="infoBoard"
        info="Contatos"
        quantity={100}
        InfoBoardColor="red"
        icon={
          <FontAwesomeIcon
            icon={faAddressBook}
            className="icon"
            style={{ color: "white" }}
          />
        }
      />
    </>
  );
}
export default App;
