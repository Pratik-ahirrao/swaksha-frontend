import "../table/table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const List = () => {
  const rows = [
    {
      id: 1143155,
      name: "John Smith",
      date: "07-03-2003",
      observation_code: "Blood Pressure",
      observation_value: "100 mm"

    },
    {
      id: 2235235,
      name: "Michael Doe",
      date: "07-03-2003",
      observation_code: "Weight",
      observation_value: "100kg"

    },
    {
      id: 2342353,
      name: "Will Smith",
      date: "07-03-2003",
      observation_code: "Blood Group",
      observation_value: "B+"

   
    },
    {
      id: 2357741,
      name: "Jane Smith",
      date: "07-03-2003",
      observation_code: "Height",
      observation_value: "200cm"

    
    },
    {
      id: 2342355,      
      name: "Harold Carol",
      date: "07-03-2003",
      observation_code: "Fat Percentage",
      observation_value: "30%"

    },
  ];
  return (
    <TableContainer component={Paper} className="table">
                    <h1 className="heading">Observation EHR Records</h1>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Doctor SSID</TableCell>
            <TableCell className="tableCell">Doctor Name</TableCell>
            <TableCell className="tableCell">Creation Date</TableCell>
            <TableCell className="tableCell">Observation Code</TableCell>
            <TableCell className="tableCell">Observation Value</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.observation_code}</TableCell>
              <TableCell className="tableCell">{row.observation_value}</TableCell>

              
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;