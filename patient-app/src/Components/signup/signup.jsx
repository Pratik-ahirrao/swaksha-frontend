import React from 'react';
import './signup.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { useState } from 'react';
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LanguageSelect from "../navbar/LanguageSelect.jsx";
import { useTranslation } from "react-i18next";

function useRadioButtons(name) {
  const [value, setState] = useState(null);

  const handleChange = e => {
    setState(e.target.value);
  };

  const inputProps = {
    name,
    type: "radio",
    onChange: handleChange
  };

  return [value, inputProps];
}

function App(){
    let [name,setName]=useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [phone_number, setPhone_number] = useState();
    let [address, setAddress] = useState("");
    let [city, setCity] = useState("");
    let [state, setState] = useState("");
    let [dob, setDob] = useState();
    let [cmPinPassword, setcmPinPassword] = useState("");
    let [cmPinConfirmPassword, setcmPinConfirmPassword] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setconfirmPassword] = useState("");
    // let [gender, setGender] = useState("");
    const [genderValue, genderInputProps] = useRadioButtons("gender");
    const { t } = useTranslation();


    let navigate = useNavigate(); 
    // data:{
    //           "first_name": e.first_name,
    //           "last_name": e.last_name,
    //           "email": e.email,
    //           "phone_number": e.phone_number,
    //           "address": e.address,
    //           "city": e.city,
    //           "state": e.state,
    //           "date": e.date,
    //           "cm_pin_password": e.cm_pin_password,
    //           "cm_pin_confirm_password": e.cm_pin_confirm_password,
    //           "gender": e.gender
    //         }
    const routeToLogin = () =>{ 
        let path = `/`; 
        navigate(path);
      }


      const API_URL = "http://localhost:9005/api/v1/auth/send-otp";
      const routeToVerifyOtp = (e) =>{ 
            e.preventDefault();
            console.log(e)
            const dat={
              "first_name": name,
              "last_name": lastName,
              "email": email,
              "phone_number": phone_number,
              "address": address,
              "city": city,
              "state": state,
              "date": dob,
              "cmPinPassword": cmPinPassword,
              "cm_pin_confirm_password": cmPinConfirmPassword,
              "password": password,
              "confirm_password": confirmPassword,
              "gender": genderValue
            }
            console.log(dat)
            axios.post(
              API_URL, {
                "phone_number":phone_number
              } 
            ).then(()=>
            {
            let path = `/verifyotp`; 
            navigate(path, {state: 
            dat
            }
            );
            <Navigate 
        
              to= {{
                pathname: path,
                state: {data:dat}
              }}
            />
          })
        
      
    }
    return (
        <div className='outer' >
            <div className="wrapper">
            <div className='iconlang'>
              <LanguageOutlinedIcon  />
              <LanguageSelect />
            </div>
        <div className="title">{t("registration")}</div>
        <form action="#">
          <div className="user-details">
            <div className="input-box">
              <span className="details">{t("first_name")}</span>
              <input type="text" id="first_name" placeholder={t("enter_your_first_name")} name='first_name' onChange={(e)=>{setName(e.target.value)}} required />
            </div>
            <div className="input-box">
              <span className="details">{t("last_name")}</span>
              <input type="text" placeholder={t("enter_your_last_name")} name='last_name' onChange={(e)=>{setLastName(e.target.value)}} required />
            </div>
            <div className="input-box">
              <span className="details">{t("email")}</span>
              <input type="email" placeholder={t("enter_your_email")} name='email' onChange={(e)=>{setEmail(e.target.value)}} required />
            </div>
            <div className="input-box">
              <span className="details">{t("phone_number")}</span>
              <input type="number" placeholder={t("enter_your_number")} name='phone_number' onChange={(e)=>{setPhone_number(e.target.value)}} required />
            </div>

            <div className="input-box">
              <span className="details">{t("address")}</span>
              <input type="text" placeholder={t("enter_your_address")} name='address' onChange={(e)=>{setAddress(e.target.value)}} required />
            </div>
            <div className="input-box">
              <span className="details">{t("city")}</span>
              <input type="text" placeholder={t("enter_your_city")}  name='city' onChange={(e)=>{setCity(e.target.value)}} required />
            </div> 
            <div className="input-box">
              <span className="details">{t("state")}</span>
              <input type="text" placeholder={t("enter_your_state")} name='state' onChange={(e)=>{setState(e.target.value)}} required />
            </div>

            <div className="input-box">
              <span className="details">{t("dob1")}</span>
              <input type="date" name='date' onChange={(e)=>{setDob(e.target.value)}} required />
            </div>
            
            <div className="input-box">
              <span className="details">{t("cm_pin")}</span>
              <input type="password" placeholder={t("enter_your_cm_pin")} name='cm_pin_password'  onChange={(e)=>{setcmPinPassword(e.target.value)}} required />
            </div>
            <div className="input-box">
              <span className="details">{t("confirm_cm_pin")}</span>
              <input type="password" placeholder={"confirm_your_cm_pin"} name='cm_pin_confirm_password' onChange={(e)=>{setcmPinConfirmPassword(e.target.value)}}  required />
            </div>

            <div className="input-box">
              <span className="details">{t("password")}</span>
              <input type="password" placeholder="Enter your Password" name='password' onChange={(e)=>{setPassword(e.target.value)}} required />
            </div>
            <div className="input-box">
              <span className="details">{t("confirm_password")}</span>
              <input type="password" placeholder={t("confirm_your_password")} name='confirm_password' onChange={(e)=>{setconfirmPassword(e.target.value)}} required />
            </div>
          </div>
          <div className="gender-details">
            <input type="radio" name="gender" value={t("male")} checked={genderValue=="Male"} {...genderInputProps} id="dot-1" />
            <input type="radio" name="gender" value={t("female")} checked={genderValue=="Female"} {...genderInputProps} id="dot-2" />
            <input type="radio" name="gender" value={t("prefer_not_to_say")} checked={genderValue=="Prefer Not to say"} {...genderInputProps}  id="dot-3" />
            <span className="gender-title">{t("gender")}</span>
            <div className="category">
              <label htmlFor="dot-1">
                <span className="dot one" />
                <span className="gender">{t("male")}</span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two" />
                <span className="gender">{t("female")}</span>
              </label>
              <label htmlFor="dot-3">
                <span className="dot three" />
                <span className="gender">{t("prefer_not_to_say")}</span>
              </label>
            </div>        
          </div>
          <div className="button">
            <input type="submit" onClick={(e)=>{routeToVerifyOtp(e)}} defaultValue="Register" />
          </div>
        </form>
        <p className="small fw-bold mt-2 pt-1 mb-2">{t("already_have_an_account")}<a href="" className="link-danger" onClick={routeToLogin} >{t("login")}</a></p>

      </div>
        </div>
        
    )
}

export default App;