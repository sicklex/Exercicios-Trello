function Table({ title, description, columns = [], data = [] }) {
  return (
    <div className="main_container">
      <div className="table_header">
        <h2 className="table_title">{title}</h2>
        <p className="table_description">{description}</p>
      </div>
      <div>
        <table className="table">
          <thead className="table_head">
            <tr>
              {columns.map((column, index) => (
                <th className="table_cell" key={index}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="table__body">
            {data.map(row => (
              <tr>
                <td> {row.event}</td>
                <td> {row.deviceId}</td>
                <td> {row.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
