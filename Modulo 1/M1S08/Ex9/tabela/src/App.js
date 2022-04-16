import "./App.css";
import Table from "./components/index";

function App() {
  return (
    <Table
      title="Minha Tabela"
      description="Tabela de Compra"
      columns={["Event", "Device Id", "Comment"]}
      data={[
        {
          event: "Valor do evento",
          deviceId: "Valor do deviceId",
          comment: "valor do comment",
        },
        {
          event: "Valor do evento",
          deviceId: "Valor do deviceId",
          comment: "valor do comment",
        },
        {
          event: "Valor do evento",
          deviceId: "Valor do deviceId",
          comment: "valor do comment",
        },
        {
          event: "Valor do evento",
          deviceId: "Valor do deviceId",
          comment: "valor do comment",
        },
        {
          event: "Valor do evento",
          deviceId: "Valor do deviceId",
          comment: "valor do comment",
        },
        {
          event: "Valor do evento",
          deviceId: "Valor do deviceId",
          comment: "valor do comment",
        },
        {
          event: "Valor do evento",
          deviceId: "Valor do deviceId",
          comment: "valor do comment",
        },
        {
          event: "Valor do evento",
          deviceId: "Valor do deviceId",
          comment: "valor do comment",
        },
        {
          event: "Valor do evento",
          deviceId: "Valor do deviceId",
          comment: "valor do comment",
        },
      ]}
    />
  );
}

export default App;
