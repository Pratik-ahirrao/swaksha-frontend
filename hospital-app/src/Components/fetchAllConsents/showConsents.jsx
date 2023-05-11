import "../datatable/datatable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import  {useState, useEffect} from 'react';
import axios from "axios";
import authHeader from "../../services/auth-header";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";

const Datatable = () => {
  let navigate = useNavigate(); 
//   const { t } = useTranslation();

  let [data, setData] = useState(null);

  useEffect(() => {
    console.log(authHeader())
    // fetch("https://dog.ceo/api/breeds/image/random/3")
    axios.post("http://localhost:9002/hospital/requests/fetchConsents",{},{headers:authHeader()})
    .then(response => {
        
        console.log(response)
       // console.log(response.data.size)
        setData(response.data);
     
    })
       
  },[])




  return (
    <TableContainer component={Paper} className="table">
            <h1 className="heading">List of Consents</h1>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">{"Consent ID"}</TableCell>
            <TableCell className="tableCell">{"Doctor SSID"}</TableCell>
            <TableCell className="tableCell">{"Patient SSID"}</TableCell>
            <TableCell className="tableCell">{"Data access start date"}</TableCell>
            <TableCell className="tableCell">{"Data access end date"}</TableCell>
            <TableCell className="tableCell">{"Consent End date"}</TableCell>
            <TableCell className="tableCell">{"Status"}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.consentObjs
.map((row,ind) => (
            <TableRow key={ind}>
              <TableCell className="tableCell">{row.consentID}</TableCell>
              <TableCell className="tableCell">{row.doctorSSID}</TableCell>
              <TableCell className="tableCell">{row.patientSSID}</TableCell>
              <TableCell className="tableCell">{row.dataAccessStartDate}</TableCell>
              <TableCell className="tableCell">{row.dataAccessEndDate}</TableCell>
              <TableCell className="tableCell">{row.consentEndDate}</TableCell>
              <TableCell className="tableCell">

                <span className={`status ${row.isApproved ? "Approved" : "Pending"}`}>{row.isApproved ? "Approved" : "Pending"}</span>
              </TableCell>
              <TableCell className="tableCell">
              </TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Datatable;