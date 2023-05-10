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
      procedure_code: "Autopsy",
      
    },
    {
      id: 2235235,
      name: "Michael Doe",
      date: "07-03-2003",
      procedure_code: "Autopsy",
     
    },
    {
      id: 2342353,
      name: "Will Smith",
      date: "07-03-2003",
      procedure_code: "Autopsy",
   
    },
    {
      id: 2357741,
      name: "Jane Smith",
      date: "07-03-2003",
      procedure_code: "Surgery",
    
    },
    {
      id: 2342355,      
      name: "Harold Carol",
      date: "07-03-2003",
      procedure_code: "Surgery",

    },
  ];
  return (
    <TableContainer component={Paper} className="table">
                    <h1 className="heading">Procedure EHR Records</h1>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Doctor SSID</TableCell>
            <TableCell className="tableCell">Doctor Name</TableCell>
            <TableCell className="tableCell">Creation Date</TableCell>
            <TableCell className="tableCell">Procedure Code</TableCell>
           

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.procedure_code}</TableCell>
              
              
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;