import Table from "react-bootstrap/Table";

function Main() {
  // const s1={rol:"100",name:"amit"}
  // const s2={rol:"101",name:"amita"}
  // const std=[s1,s2]

  const std = [
    { rol: "100", name: "amit", per: 66.66, city: "Gwalior" },
    { rol: "101", name: "amita", per: 65.66, city: "Indore" },
    { rol: "102", name: "amita", per: 67.66, city: "Bhopal" },
    { rol: "103", name: "amita", per: 68.66, city: "Gwalior" },
  ];
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Per</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {std.map((s, i) => {
          return (
            <>
              <tr>
                <td>{s.rol}</td>
                <td>{s.name}</td>
                <td>{s.per}</td>
                <td>{s.city}</td>
              </tr>
            </>
          );
        })}

        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Main;
