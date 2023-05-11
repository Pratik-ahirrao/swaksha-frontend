import "../table/table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const List = () => {
  const { t } = useTranslation();
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
                    <h1 className="heading">{t("procedure_ehr_records")}</h1>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">{t("doctor_ssid")}</TableCell>
            <TableCell className="tableCell">{t("doctor_name")}</TableCell>
            <TableCell className="tableCell">{t("creation_date")}</TableCell>
            <TableCell className="tableCell">{t("procedure_code")}</TableCell>
           

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