import "./datatable.scss";
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
import { useTranslation } from "react-i18next";

const Datatable = () => {
  let navigate = useNavigate(); 
  const { t } = useTranslation();

  let [data, setData] = useState(null);

  useEffect(() => {
    console.log(authHeader())
    // fetch("https://dog.ceo/api/breeds/image/random/3")
    axios.post("http://localhost:9001/patient/fetchConsents",{},{headers:authHeader()})
    .then(response => {
        
        console.log(response)
       // console.log(response.data.size)
        setData(response.data);
     
    })
       
  },[])

  const routeToApproveConsent = (ind) =>{ 
    let path = `/approveConsent`; 
    // navigate(path);
      console.log(data.consentObjs[ind]);
    navigate(path, {state: 
            data.consentObjs[ind]
            }
            );
    //         <Navigate 
        
    //           to= {{
    //             pathname: path,
    //             state: {data:data}
    //           }}
    //         />
  }

  const routeToRevokeConsent = (ind) =>{ 

    const REVOKE_URL = "http://localhost:9001/patient/revokeConsent";
    // let path = `/revokeConsent`; 
    // navigate(path);
    console.log(data)
    let reqData = {};
    reqData.consentID = data.consentObjs[ind].consentID;
    reqData.reqSSID = data.SSID;
     console.log("revoke", reqData);
    // navigate(path, {state: 
            // data.consentObjs[ind]
            // }
            // );
    axios.post(
      REVOKE_URL, reqData,{headers:authHeader()}
    ).then(()=>
    {
    let path = `/consents`;
    navigate(path);
    window.location.reload();

    })
    //         <Navigate 
        
    //           to= {{
    //             pathname: path,
    //             state: {data:data}
    //           }}
    //         />
  }

  const routeToRejectConsent = (ind) =>{ 

    const REVOKE_URL = "http://localhost:9001/patient/rejectConsent";
    console.log(data)
    let reqData = {};
    reqData.consentID = data.consentObjs[ind].consentID;
    reqData.reqSSID = data.SSID;
     console.log("revoke", reqData);

    axios.post(
      REVOKE_URL, reqData,{headers:authHeader()}
    ).then(()=>
    {
    let path = `/consents`;
    navigate(path);
    window.location.reload();
    })
}

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
            <h1 className="heading">{t("consents_list")}</h1>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className="tableCell">{t("consent_id")}</TableCell>
            <TableCell className="tableCell">{t("doctor_ssid")}</TableCell>
            <TableCell className="tableCell">{t("hiu_ssid")}</TableCell>
            <TableCell className="tableCell">{t("patient_ssid")}</TableCell>
            <TableCell className="tableCell">{t("status")}</TableCell>
            <TableCell className="tableCell">{t("action")}</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.consentObjs
.map((row,ind) => (
            <TableRow key={ind}>
              <TableCell className="tableCell">{row.consentID}</TableCell>
              <TableCell className="tableCell">{row.doctorSSID}</TableCell>
              <TableCell className="tableCell">{row.hiuSSID}</TableCell>
              <TableCell className="tableCell">{row.patientSSID}</TableCell>
              <TableCell className="tableCell">

                <span className={`status ${row.isApproved ? "Approved" : "Pending"}`}>{row.isApproved ? "Approved" : "Pending"}</span>
              </TableCell>
              <TableCell className="tableCell">
              <div className="cellAction">
                {/* <Link to="/approveConsent" style={{ textDecoration: "none" }}> */}
                {row.isApproved && <div className="disabledButton">{t("approve")}</div>}
                {!row.isApproved && <div className="viewButton" onClick={(e)=>routeToApproveConsent(ind)}>{t("approve")}</div>}
                {/* </Link> */}
                { row.isApproved && <div
                className="deleteButton"
                onClick={(e)=>routeToRevokeConsent(ind)}>
                {t("revoke")}
                </div>}
                { !row.isApproved && <div
                className="disabledButton">
                {t("revoke")}
                </div>}
                <div className="rejectButton" onClick={(e)=>routeToRejectConsent(ind)}>{t("reject")}</div>
            </div>
              </TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Datatable;