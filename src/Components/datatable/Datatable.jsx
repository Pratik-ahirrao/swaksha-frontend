import "./datatable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const datatable = () => {
  const rows = [
    {
      Doctor_SSID: 1143165,
      HIU_SSID: 15,
      patient_SSID: 12,
      initiated_dateTime: "2020-03-09",     
      status: "Approved",
    },
    {
        Doctor_SSID: 114355,
        HIU_SSID: 14,
        patient_SSID: 12,
        initiated_dateTime: "2021-02-03",     
        status: "Pending",
    },
    {
        Doctor_SSID: 1143145,
        HIU_SSID: 13,
        patient_SSID: 12,
        initiated_dateTime: "2022-04-03",     
        status: "Approved",
    },
    {
        Doctor_SSID: 1143195,
        HIU_SSID: 1,
        patient_SSID: 12,
        initiated_dateTime: "2023-03-29",     
        status: "Pending",
    },
    {
        Doctor_SSID: 1143185,
        HIU_SSID: 12,
        patient_SSID: 12,
        initiated_dateTime: "2018-09-01",     
        status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
            <h1 className="heading">Consents Lists</h1>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Doctor SSID</TableCell>
            <TableCell className="tableCell">HIU SSID</TableCell>
            <TableCell className="tableCell">Patient SSID</TableCell>
            <TableCell className="tableCell">Initiated DateTime</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.Doctor_SSID}</TableCell>
               
              <TableCell className="tableCell">{row.HIU_SSID}</TableCell>
              <TableCell className="tableCell">{row.patient_SSID}</TableCell>
              <TableCell className="tableCell">{row.initiated_dateTime}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">
              <div className="cellAction">
                <Link to="/approveConsent" style={{ textDecoration: "none" }}>
                <div className="viewButton">Approve</div>
                </Link>
                <div
                className="deleteButton"
                
                >
                Revoke
                </div>
            </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default datatable;