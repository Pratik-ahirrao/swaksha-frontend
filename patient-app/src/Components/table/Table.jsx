import "./table.scss";
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
      condition: "Cold flu",
      severity: "mild",
      category: "Encounter Diagnosis",
      prescription: "Amoxicillin ",
    },
    {
      id: 2235235,
      name: "Michael Doe",
      date: "07-03-2003",
      condition: "AIDS",
      severity: "severe",
      category: "Chemo therapy",
      prescription: "Trizivir",
    },
    {
      id: 2342353,
      name: "Will Smith",
      date: "07-03-2003",
      condition: "Diarrhoea",
      severity: "severe",
      category: "Encounter Diagnosis",
      prescription: "Entriquinol",
    },
    {
      id: 2357741,
      name: "Jane Smith",
      date: "07-03-2003",
      condition: "Cold flu and fever",
      severity: "low",
      category: "Diagnosis",
      prescription: "Sinarest",
    },
    {
      id: 2342355,      
      name: "Harold Carol",
      date: "07-03-2003",
      condition: "Severe Headache",
      severity: "severe",
      category: "Diagnosis",
      prescription: "Dolo 650",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
                    <h1 className="heading">{t("my_health_records")}</h1>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">{t("doctor_ssid")}</TableCell>
            <TableCell className="tableCell">{t("doctor_name")}</TableCell>
            <TableCell className="tableCell">{t("diagnosis_date")}</TableCell>
            <TableCell className="tableCell">{t("condition")}</TableCell>
            <TableCell className="tableCell">{t("severty")}</TableCell>
            <TableCell className="tableCell">{t("category")}</TableCell>
            <TableCell className="tableCell">{t("prescription")}</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.condition}</TableCell>
              <TableCell className="tableCell">{row.severity}</TableCell>
              <TableCell className="tableCell">{row.category}</TableCell>
              <TableCell className="tableCell">{row.prescription}</TableCell>
              
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;